/*
 * @Descripttion: webscoket 初始化
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-09-14 09:39:13
 * @LastEditors: wqq
 * @LastEditTime: 2020-09-14 10:55:01
 */

const initWbServer = function (server) {
  var users = []; // 储存登录用户
  var usersInfo = []; // 存储用户姓名和头像  

  const io = require("socket.io")(server);
  // 每个连接的用户都有专有的socket
  /* 
   io.emit(foo); //会触发所有用户的foo事件
   socket.emit(foo); //只触发当前用户的foo事件
   socket.broadcast.emit(foo); //触发除了当前用户的其他用户的foo事件
*/
  io.on('connection', (socket) => {
    //渲染在线人员
    io.emit('disUser', usersInfo);
    //登录，检测用户名
    socket.on('login', (user) => {
      if (users.indexOf(user.name) > -1) {
        socket.emit('登录错误：用户名已存在');
      } else {
        users.push(user.name);
        usersInfo.push(user);
        socket.emit('loginSuc');
        socket.nickname = user.name;
        io.emit('system', {
          name: user.name,
          status: '进入'
        });
        io.emit('disUser', usersInfo);
      }
    })
    // 发送窗口抖动
    socket.on('shake', () => {
      socket.emit('shake', {
        name: '您'
      });
      socket.broadcast.emit('shake', {
        name: socket.nickname
      });
    });

    // 发送消息事件
    socket.on('sendMsg', (data) => {
      var img = '';
      for (var i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].name == socket.nickname) {
          img = usersInfo[i].img;
        }
      }
      socket.broadcast.emit('receiveMsg', {
        name: socket.nickname,
        img: img,
        msg: data.msg,
        color: data.color,
        type: data.type,
        side: 'left'
      });
      socket.emit('receiveMsg', {
        name: socket.nickname,
        img: img,
        msg: data.msg,
        color: data.color,
        type: data.type,
        side: 'right'
      });
      // 断开连接时
      socket.on('disconnect', () => {
        var index = users.indexOf(socket.nickname);
        if (index > -1) { // 避免是undefined
          users.splice(index, 1); // 删除用户信息
          usersInfo.splice(index, 1); // 删除用户信息

          io.emit('system', { // 系统通知
            name: socket.nickname,
            status: '离开'
          });

          io.emit('disUser', usersInfo); // 重新渲染
          console.log('a user left.');
        }
      });
    });
  })
}

module.exports = initWbServer;