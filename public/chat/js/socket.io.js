




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-bwoTcDCev0jL+0wGp8iZyIlqw1kJp7mZ8cZsAE5CtETk2gDiuhmLwlzZA9wEZqPh7SU7wbN1+1sTMRG2EJWPPw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-6f0a1370309ebf48cbfb4c06a7c899c8.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-WASiD6wSz9va61lK+zjyLVfrB7WC6DjATUenDTr7W2PUwNGgP+QatNYJ31zlLqbopzrf5XoU9GZ2Jhg7U2d0yg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-5804a20fac12cfdbdaeb594afb38f22d.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>socket.io-client/socket.io.js at master · socketio/socket.io-client</title>
    <meta name="description" content="Realtime application framework (client). Contribute to socketio/socket.io-client development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/10566080?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="socketio/socket.io-client" /><meta name="twitter:description" content="Realtime application framework (client). Contribute to socketio/socket.io-client development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/10566080?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="socketio/socket.io-client" /><meta property="og:url" content="https://github.com/socketio/socket.io-client" /><meta property="og:description" content="Realtime application framework (client). Contribute to socketio/socket.io-client development by creating an account on GitHub." />



  

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/52734507/ws?session=eyJ2IjoiVjMiLCJ1Ijo1MjczNDUwNywicyI6NTQ0MjI3NjEyLCJjIjo1MTQ2NDkwNjIsInQiOjE2MDAwNDc5OTd9--589b8c31a7dc99f9bc3872f64f340b89e91991dc15e504c95946c31de84d3fb2" data-refresh-url="/_alive">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="806C:32AE:7C3774:AF2322:5F5ECB74" data-pjax-transient="true" /><meta name="html-safe-nonce" content="12d4ddbf9b5a179680a0f68e27b03cf5734af693" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRpby9zb2NrZXQuaW8tY2xpZW50L3RyZWUvbWFzdGVyL2Rpc3QiLCJyZXF1ZXN0X2lkIjoiODA2QzozMkFFOjdDMzc3NDpBRjIzMjI6NUY1RUNCNzQiLCJ2aXNpdG9yX2lkIjoiNjA2OTkxNjA2NTEzNDkxNzg3MCIsInJlZ2lvbl9lZGdlIjoiYXAtc291dGhlYXN0LTEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-pjax-transient="true" /><meta name="visitor-hmac" content="30b2a938f94a4ff2dda38883b4164538832f220819a907829b1bdbba2bac74a4" data-pjax-transient="true" /><meta name="cookie-consent-required" content="false" />

    <meta name="hovercard-subject-tag" content="repository:557977" data-pjax-transient>


  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="52734507" /><meta name="octolytics-actor-login" content="wqqLion" /><meta name="octolytics-actor-hash" content="5f55585b9b01fc499b78f444dd76162475147bdd825b0c82c2ca0da4359b7ecf" />

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />

  





    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="46b0f17fb9d094259704474237c4e54f">

<meta class="js-ga-set" name="dimension10" content="Responsive" data-pjax-transient>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="wqqLion">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="MmUxZjA1YWQxMDUzYTJkY2RlY2Y3NzM3ZTJhODA2MDBhMzU5ZGUzOTIyZGZhYjdiOTIxMjMzNWIzOWY3ZDMzZHx7InJlbW90ZV9hZGRyZXNzIjoiMzYuNy4xMjIuNTQiLCJyZXF1ZXN0X2lkIjoiODA2QzozMkFFOjdDMzc3NDpBRjIzMjI6NUY1RUNCNzQiLCJ0aW1lc3RhbXAiOjE2MDAwNDc5OTcsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,JS_HTTP_CACHE_HEADERS">

  <meta http-equiv="x-pjax-version" content="cad40970718c588b4d75dd96281adcd2">
  

        <link href="https://github.com/socketio/socket.io-client/commits/master.atom" rel="alternate" title="Recent Commits to socket.io-client:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/socketio/socket.io-client git https://github.com/socketio/socket.io-client.git">

  <meta name="octolytics-dimension-user_id" content="10566080" /><meta name="octolytics-dimension-user_login" content="socketio" /><meta name="octolytics-dimension-repository_id" content="557977" /><meta name="octolytics-dimension-repository_nwo" content="socketio/socket.io-client" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="557977" /><meta name="octolytics-dimension-repository_network_root_nwo" content="socketio/socket.io-client" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="progress-pjax-loader width-full js-pjax-loader-bar Progress position-fixed">
    <span style="background-color: #79b8ff;width: 0%;" class="Progress-item progress-pjax-loader-bar "></span>
</span>      
      



          <header class="Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3" role="banner">
  <div class="Header-item d-none d-md-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-md-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
        <div hidden class="d-none">
</div>
<div class="header-search header-search-current js-header-search-current flex-auto  flex-self-stretch flex-md-self-auto mr-0 mr-md-3 mb-3 mb-md-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to js-header-search-current-jump-to "
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="557977" data-scoped-search-url="/socketio/socket.io-client/search" data-unscoped-search-url="/search" action="/socketio/socket.io-client/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="ZSlerv/3zRUpWQlcQIobeW2TEDNrV1h3okGrIduq0UA/3n/bo8Cqyhy1M0/qdjtZH2isHspfbR7THVqKugeX+A==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
    <a class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
      Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
</a>
  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-md-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" href="/wqqLion">
      <img class="avatar avatar-user" src="https://avatars0.githubusercontent.com/u/52734507?s=40&amp;v=4" width="20" height="20" alt="@wqqLion" />
      wqqLion
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="+GfnCPKRrJ815GjggEkwV3kvQulbgwjaW+sbbvOCdtltwbe9XLmS2RpJwyUGcqzjyzltCeKEcUWRAKdmYqCBBA==" />
      <button type="submit" class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15 d-md-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
    

    <notification-indicator class="js-socket-channel" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NTI3MzQ1MDciLCJ0IjoxNjAwMDQ3OTk3fQ==--c9a98d7f38c7819e1da0e3c948fabf6a1626f15ba35f4c93305775bb16f6db7e">
      <a href="/notifications"
         class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
         aria-label="You have unread notifications"
         data-hotkey="g n"
         data-ga-click="Header, go to notifications, icon:unread"
         data-target="notification-indicator.link">
         <span class="mail-status unread" data-target="notification-indicator.modifier"></span>
         <svg class="octicon octicon-bell" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
      </a>
    </notification-indicator>

  </div>


  <div class="Header-item position-relative d-none d-md-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="socketio/socket.io-client">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/socketio/socket.io-client/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-md-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/wqqLion/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img
  alt="@wqqLion"
  width="20"
  height="20"
  src="https://avatars3.githubusercontent.com/u/52734507?s=60&amp;v=4"
  class="avatar avatar-user " />

      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 10px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px" >
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/wqqLion" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">wqqLion</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context lh-condensed" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container rounded-1 px-2 py-1 mt-2 border"
  data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:10566080,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:52734507,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;}}" data-hydro-click-hmac="12715d87cf22a374962627183c2fb774564b1cdbe194d50dbff2cbf30ec50103">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-flex user-status-emoji-only-header circle">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center lh-condensed-ultra v-align-bottom">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
          </div>
        </div>
        <div class="
          
           user-status-message-wrapper f6 min-width-0"
           style="line-height: 20px;" >
          <div class="css-truncate css-truncate-target width-fit text-gray-dark text-left">
              <span class="text-gray">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=0&amp;compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="RqeS13Z4YdhxVRxScgjP45QW0a4XP3nGMfL2vnXDobURGRKRikdPa5hQp73a3K95qlZWIfpvvxrj/lf5p4gPlA==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="btn btn-sm v-align-baseline" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-09-14T10:16:37+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-09-14T10:46:37+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-09-14T13:46:37+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-09-14T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-09-20T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/wqqLion" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="40660da6ce32a51d506fbedabaa82b6aa097e1dc71fd0219545d1e5e09522da0" >Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/wqqLion?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="aa8e7e0d8eb435d84dcde718141f31a6356e741d13096a667cda98254dbfa376" >Your repositories</a>



    <a role="menuitem" class="dropdown-item" href="/wqqLion?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="912b4b1d6c9ab92bdec6998b96e4bd7d19640e5684a2b5a987841e1960b00171" >Your projects</a>


    <a role="menuitem" class="dropdown-item" href="/wqqLion?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="8928d50fe8a11abc851dabdb13b80f511a8398f8d285237a01fa52a0fa6af11f" >Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="439429142b66266c7d6393463bbf4cf7ff5eacd3ac81c83bdf56bd2f524242f4" >Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      <a role="menuitem" class="dropdown-item" href="/settings/billing" data-ga-click="Header, go to billing, text:upgrade" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;UPGRADE&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="85f8524030921f31aa917fb231b4e5ef92efbbbc0bda905ebdf6694745aef16a" >Upgrade</a>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/wqqLion/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}"
    data-feature-preview-close-hmac="c5255b586a7d00b048269d82dcb3127672039c369f2aa8e25a68dc11e246043c"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}"
    data-hydro-click-hmac="8dd33fdf892f0395004f72a1a549282c1aff97cef7d4798c521eca6a613cddf8"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://docs.github.com" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="70d08d4c4aade6afecd7743de0284ba59b336e5f768f8e36e87baaf972955c9b" >Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="3f5e699275728d8afc6941b95b664714645a849d8e2a2483c6d4b4392f38246e" >Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="aX7aKSCJ0ueYpQ3cVocBgN1mrmI4ubOryE+ZNjcbLBP82IqcjqHsobcIphnQvJ00b3CBgoG+yjQCpCU+pjnbzg==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="dd339b4ca2b345df87bbd5c931d44ebd170b04870932e7f8eefe1bbfcef027be"  role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_27ed" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1600047997122" class="form-control" /><input type="hidden" name="timestamp_secret" value="bc9051bc95fec7d4bcb1229b213ae74442c10722e1faf31dccf074baaf932c74" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

          

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  {{ className }}">
  <div class=" px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    
      <div>{{ message }}</div>

  </div>
</div>
  </template>
</div>


  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>



  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

    


    






  


  <div class="bg-gray-light pt-3 hide-full-screen mb-5">

      <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

        <div class="flex-auto min-width-0 width-fit mr-3">
            <h1 class=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/socketio/hovercard" href="/socketio">socketio</a>
  </span>
  <span class="mx-1 flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/socketio/socket.io-client">socket.io-client</a>
  </strong>
  
</h1>


        </div>

          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
          <form data-remote="true" class="d-flex js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="R0ej/Ya7aTvP7okFApLqHiecZUeEDU5bc8TpXn4b8Zckik6RWVXSQY/0Uo8alrBbouZHpHlYIJsgzkC0Q+XZxQ==" />      <input type="hidden" name="repository_id" value="557977">

      <details class="details-reset details-overlay select-menu hx_rsm">
        <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:557977,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="a0ebb887fdb857391873a1db1f474611e093a7dcd60ac6693f7606005906bb34" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              Watch
          </span>
          <span class="dropdown-caret"></span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-bell-slash" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/socketio/socket.io-client/watchers"
          aria-label="304 users are watching this repository">
          304
        </a>
</form>
  </li>

  <li>
        <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/socketio/socket.io-client/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="jvQ1oF+HVDO9LVqXEbUdAAFkUVK/KbQmfqJ3qoOVQaPyPYjtLo2OOyn6B2166rP9mtzlhYpTbzTDNa363uH+6A==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar socketio/socket.io-client" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:557977,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="6c5f029f506fe02132a7892a670cc925bdd48e284d887e145b69c5494b308284" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/socketio/socket.io-client/stargazers"
           aria-label="8577 users starred this repository">
           8.6k
        </a>
</form>
    <form class="unstarred js-social-form" action="/socketio/socket.io-client/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="FsW/0IPXbWlvLANBUa/wOw2K3i7SblPYOk9Q0/Wd3oE57LmBRCRcuAX3Ar++iAjJlKCQ51zOsy37AvNuZEYJwQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star socketio/socket.io-client" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:557977,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="080307ebc8a7710787634bffb8f00e4ed5e886d887a77c2184563c0be6110bd8" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
        Star
</button>        <a class="social-count js-social-count" href="/socketio/socket.io-client/stargazers"
           aria-label="8577 users starred this repository">
          8.6k
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/socketio/socket.io-client/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="9+a9JXADx6Z7hBIGwdThRMaANL7qSjQr8fmyhmB7re6t5IW3vNYgoE5BtWmd86+KQTD7+NkefiUTqX+6CFQFBA==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:557977,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="467864584ce406aa6bee89c59fb9632d4ef237473fa4e2dd7ccc304ee1d72c12" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of socketio/socket.io-client to your account" aria-label="Fork your own copy of socketio/socket.io-client to your account">              <svg class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
              Fork
</button></form>
      <a href="/socketio/socket.io-client/network/members" class="social-count"
         aria-label="2829 users forked this repository">
        2.8k
      </a>
  </li>
</ul>

      </div>
        
<nav aria-label="Repository" data-pjax="#js-repo-pjax-container" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 bg-gray-light">
  <ul class="UnderlineNav-body list-style-none ">
          <li class="d-flex">
        <a class="js-selected-navigation-item selected UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="code-tab" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /socketio/socket.io-client" href="/socketio/socket.io-client">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
            <span data-content="Code">Code</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="issues-tab" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-selected-links="repo_issues repo_labels repo_milestones /socketio/socket.io-client/issues" href="/socketio/socket.io-client/issues">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
            <span data-content="Issues">Issues</span>
              <span title="206" class="Counter ">206</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks /socketio/socket.io-client/pulls" href="/socketio/socket.io-client/pulls">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
            <span data-content="Pull requests">Pull requests</span>
              <span title="17" class="Counter ">17</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="actions-tab" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-selected-links="repo_actions /socketio/socket.io-client/actions" href="/socketio/socket.io-client/actions">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>
            <span data-content="Actions">Actions</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="projects-tab" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-selected-links="repo_projects new_repo_project repo_project /socketio/socket.io-client/projects" href="/socketio/socket.io-client/projects">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
            <span data-content="Projects">Projects</span>
              <span title="0" hidden="hidden" class="Counter ">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="security-tab" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-selected-links="security overview alerts policy token_scanning code_scanning /socketio/socket.io-client/security" href="/socketio/socket.io-client/security">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>
            <span data-content="Security">Security</span>
              <include-fragment src="/socketio/socket.io-client/security/overall-count" accept="text/fragment+html"></include-fragment>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="insights-tab" data-ga-click="Repository, Navigation click, Insights tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /socketio/socket.io-client/pulse" href="/socketio/socket.io-client/pulse">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>
            <span data-content="Insights">Insights</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>

</ul>        <div class="position-absolute right-0 pr-3 pr-md-4 pr-lg-5 js-responsive-underlinenav-overflow" style="visibility:hidden;">
      <details class="details-overlay details-reset position-relative">
  <summary role="button">
    <div class="UnderlineNav-item mr-0 border-0">
            <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <span class="sr-only">More</span>
          </div>
</summary>  <div>
    <details-menu role="menu" class="dropdown-menu dropdown-menu-sw ">
  
            <ul>
                <li data-menu-item="code-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client" href="/socketio/socket.io-client">
                    Code
</a>                </li>
                <li data-menu-item="issues-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/issues" href="/socketio/socket.io-client/issues">
                    Issues
</a>                </li>
                <li data-menu-item="pull-requests-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/pulls" href="/socketio/socket.io-client/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="actions-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/actions" href="/socketio/socket.io-client/actions">
                    Actions
</a>                </li>
                <li data-menu-item="projects-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/projects" href="/socketio/socket.io-client/projects">
                    Projects
</a>                </li>
                <li data-menu-item="security-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/security" href="/socketio/socket.io-client/security">
                    Security
</a>                </li>
                <li data-menu-item="insights-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /socketio/socket.io-client/pulse" href="/socketio/socket.io-client/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu>
</div></details>    </div>

</nav>
  </div>

<div class="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5">
  <div class="repository-content " >

    
      
  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/socketio/socket.io-client/blob/661f1e7fac2488b6d3d206f96bb59073c4c98b1c/dist/socket.io.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:e0f5005bb52ec9755345ee903ddfe78c -->
    

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
      
<div class="position-relative">
  <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
    <summary class="btn css-truncate"
            data-hotkey="w"
            title="Switch branches or tags">
      <svg text="gray" height="16" class="octicon octicon-git-branch text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
      <span class="css-truncate-target" data-menu-button>master</span>
      <span class="dropdown-caret"></span>
    </summary>

    <details-menu class="SelectMenu SelectMenu--hasFilter" src="/socketio/socket.io-client/refs/master/dist/socket.io.js?source_action=show&amp;source_controller=blob" preload>
      <div class="SelectMenu-modal">
        <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
          <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 24 24" version="1.1" width="32" aria-hidden="true"><path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path><path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path></svg>
        </include-fragment>
      </div>
    </details-menu>
  </details>

</div>

      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal mx-0 mx-md-3 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/socketio/socket.io-client"><span>socket.io-client</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/socketio/socket.io-client/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">socket.io.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:557977,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="c52d0ae77de8659706b1901f2cf51d0df003095836a87aba4a9de81cb708aee1">
      <svg class="octicon octicon-code" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
          <div class="SelectMenu-blankslate">
            <p class="mb-0 text-gray">
              No definitions found in this file.
            </p>
          </div>
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation not available for this commit
          <svg class="octicon octicon-dot-fill text-light-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>
      <a href="/socketio/socket.io-client/find/master"
            class="js-pjax-capture-input btn mr-2 d-none d-md-block"
            data-pjax
            data-hotkey="t">
        Go to file
      </a>

      <details id="blob-more-options-details" class="details-overlay details-reset position-relative">
  <summary role="button">
    <svg aria-label="More options" height="16" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" role="img"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
</summary>  <div>
    <ul class="dropdown-menu dropdown-menu-sw">
            <li class="d-block d-md-none">
              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:557977,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}" data-hydro-click-hmac="9fab753ee4940436cb37510f2635601ef447f1a082f5caa9e6befadd63f70501" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/socketio/socket.io-client/find/master">
                <span class="flex-auto">Go to file</span>
                <span class="text-small text-gray" aria-hidden="true">T</span>
</a>            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-line-details-dialog" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to line</span>
                  <span class="text-small text-gray" aria-hidden="true">L</span>
                </span>
              </button>
            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-symbol-select-menu" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to definition</span>
                  <span class="text-small text-gray" aria-hidden="true">R</span>
                </span>
              </button>
            </li>
            <li class="dropdown-divider" role="none"></li>
            <li>
              <clipboard-copy value="dist/socket.io.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details">
                Copy path
              </clipboard-copy>
            </li>
          </ul>
</div></details>    </div>



    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      
  <div class="Box-header Box-header--blue Details js-details-container">
      <div class="d-flex flex-items-center">
        <span class="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/darrachequesne/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/darrachequesne"><img class="avatar avatar-user" src="https://avatars2.githubusercontent.com/u/13031701?s=48&amp;v=4" width="24" height="24" alt="@darrachequesne" /></a>
        </span>
        <div class="flex-1 d-flex flex-items-center ml-3 min-width-0">
          <div class="css-truncate css-truncate-overflow">
            <a class="text-bold link-gray-dark" rel="contributor" data-hovercard-type="user" data-hovercard-url="/users/darrachequesne/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/darrachequesne">darrachequesne</a>

              <span>
                <a data-pjax="true" title="[chore] Release 2.3.0

Diff: https://github.com/socketio/socket.io-client/compare/2.2.0...2.3.0" class="link-gray" href="/socketio/socket.io-client/commit/661f1e7fac2488b6d3d206f96bb59073c4c98b1c">[chore] Release 2.3.0</a>
              </span>
          </div>

            <span class="hidden-text-expander ml-1 flex-shrink-0">
              <button type="button" class="ellipsis-expander js-details-target" aria-expanded="false">&hellip;</button>
            </span>

          <span class="ml-2">
            <include-fragment accept="text/fragment+html" src="/socketio/socket.io-client/commit/661f1e7fac2488b6d3d206f96bb59073c4c98b1c/rollup?direction=e" class="d-inline"></include-fragment>
          </span>
        </div>
        <div class="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end text-gray no-wrap">
          <span class="d-none d-md-inline">
            <span>Latest commit</span>
            <a class="text-small text-mono link-gray" href="/socketio/socket.io-client/commit/661f1e7fac2488b6d3d206f96bb59073c4c98b1c" data-pjax>661f1e7</a>
            <span itemprop="dateModified"><relative-time datetime="2019-09-20T10:22:41Z" class="no-wrap">Sep 20, 2019</relative-time></span>
          </span>

          <a data-pjax href="/socketio/socket.io-client/commits/master/dist/socket.io.js" class="ml-3 no-wrap link-gray-dark no-underline">
            <svg text="gray" height="16" class="octicon octicon-history text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>
            <span class="d-none d-sm-inline">
              <strong>History</strong>
            </span>
          </a>
        </div>
      </div>
        <div class="Details-content--hidden ml-5 mt-2"><pre class="mt-2 f6 ws-pre-wrap">Diff: <a class="commit-link" href="https://github.com/socketio/socket.io-client/compare/2.2.0...2.3.0"><tt>2.2.0...2.3.0</tt></a></pre></div>

  </div>

  <div class="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap" >
    <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-3" id="blob_contributors_box">
      <summary class="link-gray-dark">
        <svg text="gray" height="16" class="octicon octicon-people text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
        <strong>9</strong>
        
        contributors
      </summary>
      <details-dialog
        class="Box Box--overlay d-flex flex-column anim-fade-in fast"
        aria-label="Users who have contributed to this file"
        src="/socketio/socket.io-client/contributors-list/master/dist/socket.io.js" preload>
        <div class="Box-header">
          <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title">
            Users who have contributed to this file
          </h3>
        </div>
        <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
      </details-dialog>
    </details>
      <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/rauchg/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=rauchg">
      <img class="avatar mr-2 avatar-user" src="https://avatars0.githubusercontent.com/u/13041?s=48&amp;v=4" width="24" height="24" alt="@rauchg" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/3rd-Eden/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=3rd-Eden">
      <img class="avatar mr-2 avatar-user" src="https://avatars1.githubusercontent.com/u/28071?s=48&amp;v=4" width="24" height="24" alt="@3rd-Eden" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/darrachequesne/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=darrachequesne">
      <img class="avatar mr-2 avatar-user" src="https://avatars2.githubusercontent.com/u/13031701?s=48&amp;v=4" width="24" height="24" alt="@darrachequesne" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/einaros/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=einaros">
      <img class="avatar mr-2 avatar-user" src="https://avatars2.githubusercontent.com/u/394360?s=48&amp;v=4" width="24" height="24" alt="@einaros" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/ycarmel/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=ycarmel">
      <img class="avatar mr-2 avatar-user" src="https://avatars1.githubusercontent.com/u/1690830?s=48&amp;v=4" width="24" height="24" alt="@ycarmel" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/mreinsch/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=mreinsch">
      <img class="avatar mr-2 avatar-user" src="https://avatars0.githubusercontent.com/u/33982?s=48&amp;v=4" width="24" height="24" alt="@mreinsch" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/jdahlq/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=jdahlq">
      <img class="avatar mr-2 avatar-user" src="https://avatars0.githubusercontent.com/u/1686569?s=48&amp;v=4" width="24" height="24" alt="@jdahlq" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/fat/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=fat">
      <img class="avatar mr-2 avatar-user" src="https://avatars3.githubusercontent.com/u/169705?s=48&amp;v=4" width="24" height="24" alt="@fat" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/dvv/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/socketio/socket.io-client/commits/master/dist/socket.io.js?author=dvv">
      <img class="avatar mr-2 avatar-user" src="https://avatars1.githubusercontent.com/u/211335?s=48&amp;v=4" width="24" height="24" alt="@dvv" /> 
</a>
</span>

  </div>
    </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      9 lines (9 sloc)
      <span class="file-info-divider"></span>
    67.1 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a href="/socketio/socket.io-client/raw/master/dist/socket.io.js" id="raw-url" role="button" class="btn btn-sm BtnGroup-item ">Raw</a>
        <a href="/socketio/socket.io-client/blame/master/dist/socket.io.js" data-hotkey="b" role="button" class="btn js-update-url-with-hash btn-sm BtnGroup-item ">Blame</a>
    </div>

    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="https://desktop.github.com"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/socketio/socket.io-client/edit/master/dist/socket.io.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="5MmJ3PtQemjMk7objZbO5Oj3biZZ4jhm1+pWCJTM+SB2VMk7ZuRMBbCJ0pEkn7vYoS0VAYjQfWZqI6D4yZKkdw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/socketio/socket.io-client/delete/master/dist/socket.io.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DJd6iklDWWmwBFe+mxl7MEGGb3YVaVXrTuoC02rzlFsee8o1+qMPldxlFWvmodK/PukvF5loizJ6MXg5ELqURg==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
            </button>
</form>    </div>
  </div>
</div>



      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript  gist-border-0">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*!</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"> * Socket.IO v2.3.0</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"> * (c) 2014-2019 Guillermo Rauch</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"> * Released under the MIT License.</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"> */</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">!function(t,e){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=e():&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],e):&quot;object&quot;==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p=&quot;&quot;,e(0)}([function(t,e,n){function r(t,e){&quot;object&quot;==typeof t&amp;&amp;(e=t,t=void 0),e=e||{};var n,r=o(t),i=r.source,u=r.id,p=r.path,h=c[u]&amp;&amp;p in c[u].nsps,f=e.forceNew||e[&quot;force new connection&quot;]||!1===e.multiplex||h;return f?(a(&quot;ignoring socket cache for %s&quot;,i),n=s(i,e)):(c[u]||(a(&quot;new io instance for %s&quot;,i),c[u]=s(i,e)),n=c[u]),r.query&amp;&amp;!e.query&amp;&amp;(e.query=r.query),n.socket(r.path,e)}var o=n(1),i=n(7),s=n(15),a=n(3)(&quot;socket.io-client&quot;);t.exports=e=r;var c=e.managers={};e.protocol=i.protocol,e.connect=r,e.Manager=n(15),e.Socket=n(39)},function(t,e,n){function r(t,e){var n=t;e=e||&quot;undefined&quot;!=typeof location&amp;&amp;location,null==t&amp;&amp;(t=e.protocol+&quot;//&quot;+e.host),&quot;string&quot;==typeof t&amp;&amp;(&quot;/&quot;===t.charAt(0)&amp;&amp;(t=&quot;/&quot;===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i(&quot;protocol-less url %s&quot;,t),t=&quot;undefined&quot;!=typeof e?e.protocol+&quot;//&quot;+t:&quot;https://&quot;+t),i(&quot;parse %s&quot;,t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port=&quot;80&quot;:/^(http|ws)s$/.test(n.protocol)&amp;&amp;(n.port=&quot;443&quot;)),n.path=n.path||&quot;/&quot;;var r=n.host.indexOf(&quot;:&quot;)!==-1,s=r?&quot;[&quot;+n.host+&quot;]&quot;:n.host;return n.id=n.protocol+&quot;://&quot;+s+&quot;:&quot;+n.port,n.href=n.protocol+&quot;://&quot;+s+(e&amp;&amp;e.port===n.port?&quot;&quot;:&quot;:&quot;+n.port),n}var o=n(2),i=n(3)(&quot;socket.io-client:url&quot;);t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];t.exports=function(t){var e=t,o=t.indexOf(&quot;[&quot;),i=t.indexOf(&quot;]&quot;);o!=-1&amp;&amp;i!=-1&amp;&amp;(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,&quot;;&quot;)+t.substring(i,t.length));for(var s=n.exec(t||&quot;&quot;),a={},c=14;c--;)a[r[c]]=s[c]||&quot;&quot;;return o!=-1&amp;&amp;i!=-1&amp;&amp;(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,&quot;:&quot;),a.authority=a.authority.replace(&quot;[&quot;,&quot;&quot;).replace(&quot;]&quot;,&quot;&quot;).replace(/;/g,&quot;:&quot;),a.ipv6uri=!0),a}},function(t,e,n){(function(r){&quot;use strict&quot;;function o(){return!(&quot;undefined&quot;==typeof window||!window.process||&quot;renderer&quot;!==window.process.type&amp;&amp;!window.process.__nwjs)||(&quot;undefined&quot;==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&amp;&amp;(&quot;undefined&quot;!=typeof document&amp;&amp;document.documentElement&amp;&amp;document.documentElement.style&amp;&amp;document.documentElement.style.WebkitAppearance||&quot;undefined&quot;!=typeof window&amp;&amp;window.console&amp;&amp;(window.console.firebug||window.console.exception&amp;&amp;window.console.table)||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&amp;&amp;parseInt(RegExp.$1,10)&gt;=31||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){if(e[0]=(this.useColors?&quot;%c&quot;:&quot;&quot;)+this.namespace+(this.useColors?&quot; %c&quot;:&quot; &quot;)+e[0]+(this.useColors?&quot;%c &quot;:&quot; &quot;)+&quot;+&quot;+t.exports.humanize(this.diff),this.useColors){var n=&quot;color: &quot;+this.color;e.splice(1,0,n,&quot;color: inherit&quot;);var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(t){&quot;%%&quot;!==t&amp;&amp;(r++,&quot;%c&quot;===t&amp;&amp;(o=r))}),e.splice(o,0,n)}}function s(){var t;return&quot;object&quot;===(&quot;undefined&quot;==typeof console?&quot;undefined&quot;:p(console))&amp;&amp;console.log&amp;&amp;(t=console).log.apply(t,arguments)}function a(t){try{t?e.storage.setItem(&quot;debug&quot;,t):e.storage.removeItem(&quot;debug&quot;)}catch(n){}}function c(){var t=void 0;try{t=e.storage.getItem(&quot;debug&quot;)}catch(n){}return!t&amp;&amp;&quot;undefined&quot;!=typeof r&amp;&amp;&quot;env&quot;in r&amp;&amp;(t=r.env.DEBUG),t}function u(){try{return localStorage}catch(t){}}var p=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t};e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=u(),e.colors=[&quot;#0000CC&quot;,&quot;#0000FF&quot;,&quot;#0033CC&quot;,&quot;#0033FF&quot;,&quot;#0066CC&quot;,&quot;#0066FF&quot;,&quot;#0099CC&quot;,&quot;#0099FF&quot;,&quot;#00CC00&quot;,&quot;#00CC33&quot;,&quot;#00CC66&quot;,&quot;#00CC99&quot;,&quot;#00CCCC&quot;,&quot;#00CCFF&quot;,&quot;#3300CC&quot;,&quot;#3300FF&quot;,&quot;#3333CC&quot;,&quot;#3333FF&quot;,&quot;#3366CC&quot;,&quot;#3366FF&quot;,&quot;#3399CC&quot;,&quot;#3399FF&quot;,&quot;#33CC00&quot;,&quot;#33CC33&quot;,&quot;#33CC66&quot;,&quot;#33CC99&quot;,&quot;#33CCCC&quot;,&quot;#33CCFF&quot;,&quot;#6600CC&quot;,&quot;#6600FF&quot;,&quot;#6633CC&quot;,&quot;#6633FF&quot;,&quot;#66CC00&quot;,&quot;#66CC33&quot;,&quot;#9900CC&quot;,&quot;#9900FF&quot;,&quot;#9933CC&quot;,&quot;#9933FF&quot;,&quot;#99CC00&quot;,&quot;#99CC33&quot;,&quot;#CC0000&quot;,&quot;#CC0033&quot;,&quot;#CC0066&quot;,&quot;#CC0099&quot;,&quot;#CC00CC&quot;,&quot;#CC00FF&quot;,&quot;#CC3300&quot;,&quot;#CC3333&quot;,&quot;#CC3366&quot;,&quot;#CC3399&quot;,&quot;#CC33CC&quot;,&quot;#CC33FF&quot;,&quot;#CC6600&quot;,&quot;#CC6633&quot;,&quot;#CC9900&quot;,&quot;#CC9933&quot;,&quot;#CCCC00&quot;,&quot;#CCCC33&quot;,&quot;#FF0000&quot;,&quot;#FF0033&quot;,&quot;#FF0066&quot;,&quot;#FF0099&quot;,&quot;#FF00CC&quot;,&quot;#FF00FF&quot;,&quot;#FF3300&quot;,&quot;#FF3333&quot;,&quot;#FF3366&quot;,&quot;#FF3399&quot;,&quot;#FF33CC&quot;,&quot;#FF33FF&quot;,&quot;#FF6600&quot;,&quot;#FF6633&quot;,&quot;#FF9900&quot;,&quot;#FF9933&quot;,&quot;#FFCC00&quot;,&quot;#FFCC33&quot;],t.exports=n(5)(e);var h=t.exports.formatters;h.j=function(t){try{return JSON.stringify(t)}catch(e){return&quot;[UnexpectedJSONParseError]: &quot;+e.message}}}).call(e,n(4))},function(t,e){function n(){throw new Error(&quot;setTimeout has not been defined&quot;)}function r(){throw new Error(&quot;clearTimeout has not been defined&quot;)}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&amp;&amp;setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&amp;&amp;clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&amp;&amp;l&amp;&amp;(y=!1,l.length?d=l.concat(d):m=-1,d.length&amp;&amp;a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m&lt;e;)l&amp;&amp;l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,h,f=t.exports={};!function(){try{p=&quot;function&quot;==typeof setTimeout?setTimeout:n}catch(t){p=n}try{h=&quot;function&quot;==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length&gt;1)for(var n=1;n&lt;arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title=&quot;browser&quot;,f.browser=!0,f.env={},f.argv=[],f.version=&quot;&quot;,f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error(&quot;process.binding is not supported&quot;)},f.cwd=function(){return&quot;/&quot;},f.chdir=function(t){throw new Error(&quot;process.chdir is not supported&quot;)},f.umask=function(){return 0}},function(t,e,n){&quot;use strict&quot;;function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e&lt;t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t){function e(t){for(var e=0,n=0;n&lt;t.length;n++)e=(e&lt;&lt;5)-e+t.charCodeAt(n),e|=0;return o.colors[Math.abs(e)%o.colors.length]}function o(t){function n(){for(var t=arguments.length,e=Array(t),i=0;i&lt;t;i++)e[i]=arguments[i];if(n.enabled){var s=n,a=Number(new Date),c=a-(r||a);s.diff=c,s.prev=r,s.curr=a,r=a,e[0]=o.coerce(e[0]),&quot;string&quot;!=typeof e[0]&amp;&amp;e.unshift(&quot;%O&quot;);var u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,function(t,n){if(&quot;%%&quot;===t)return t;u++;var r=o.formatters[n];if(&quot;function&quot;==typeof r){var i=e[u];t=r.call(s,i),e.splice(u,1),u--}return t}),o.formatArgs.call(s,e);var p=s.log||o.log;p.apply(s,e)}}var r=void 0;return n.namespace=t,n.enabled=o.enabled(t),n.useColors=o.useColors(),n.color=e(t),n.destroy=i,n.extend=s,&quot;function&quot;==typeof o.init&amp;&amp;o.init(n),o.instances.push(n),n}function i(){var t=o.instances.indexOf(this);return t!==-1&amp;&amp;(o.instances.splice(t,1),!0)}function s(t,e){var n=o(this.namespace+(&quot;undefined&quot;==typeof e?&quot;:&quot;:e)+t);return n.log=this.log,n}function a(t){o.save(t),o.names=[],o.skips=[];var e=void 0,n=(&quot;string&quot;==typeof t?t:&quot;&quot;).split(/[\s,]+/),r=n.length;for(e=0;e&lt;r;e++)n[e]&amp;&amp;(t=n[e].replace(/\*/g,&quot;.*?&quot;),&quot;-&quot;===t[0]?o.skips.push(new RegExp(&quot;^&quot;+t.substr(1)+&quot;$&quot;)):o.names.push(new RegExp(&quot;^&quot;+t+&quot;$&quot;)));for(e=0;e&lt;o.instances.length;e++){var i=o.instances[e];i.enabled=o.enabled(i.namespace)}}function c(){var t=[].concat(r(o.names.map(p)),r(o.skips.map(p).map(function(t){return&quot;-&quot;+t}))).join(&quot;,&quot;);return o.enable(&quot;&quot;),t}function u(t){if(&quot;*&quot;===t[t.length-1])return!0;var e=void 0,n=void 0;for(e=0,n=o.skips.length;e&lt;n;e++)if(o.skips[e].test(t))return!1;for(e=0,n=o.names.length;e&lt;n;e++)if(o.names[e].test(t))return!0;return!1}function p(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,&quot;*&quot;)}function h(t){return t instanceof Error?t.stack||t.message:t}return o.debug=o,o[&quot;default&quot;]=o,o.coerce=h,o.disable=c,o.enable=a,o.enabled=u,o.humanize=n(6),Object.keys(t).forEach(function(e){o[e]=t[e]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=e,o.enable(o.load()),o}t.exports=o},function(t,e){function n(t){if(t=String(t),!(t.length&gt;100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||&quot;ms&quot;).toLowerCase();switch(r){case&quot;years&quot;:case&quot;year&quot;:case&quot;yrs&quot;:case&quot;yr&quot;:case&quot;y&quot;:return n*h;case&quot;weeks&quot;:case&quot;week&quot;:case&quot;w&quot;:return n*p;case&quot;days&quot;:case&quot;day&quot;:case&quot;d&quot;:return n*u;case&quot;hours&quot;:case&quot;hour&quot;:case&quot;hrs&quot;:case&quot;hr&quot;:case&quot;h&quot;:return n*c;case&quot;minutes&quot;:case&quot;minute&quot;:case&quot;mins&quot;:case&quot;min&quot;:case&quot;m&quot;:return n*a;case&quot;seconds&quot;:case&quot;second&quot;:case&quot;secs&quot;:case&quot;sec&quot;:case&quot;s&quot;:return n*s;case&quot;milliseconds&quot;:case&quot;millisecond&quot;:case&quot;msecs&quot;:case&quot;msec&quot;:case&quot;ms&quot;:return n;default:return}}}}function r(t){var e=Math.abs(t);return e&gt;=u?Math.round(t/u)+&quot;d&quot;:e&gt;=c?Math.round(t/c)+&quot;h&quot;:e&gt;=a?Math.round(t/a)+&quot;m&quot;:e&gt;=s?Math.round(t/s)+&quot;s&quot;:t+&quot;ms&quot;}function o(t){var e=Math.abs(t);return e&gt;=u?i(t,e,u,&quot;day&quot;):e&gt;=c?i(t,e,c,&quot;hour&quot;):e&gt;=a?i(t,e,a,&quot;minute&quot;):e&gt;=s?i(t,e,s,&quot;second&quot;):t+&quot; ms&quot;}function i(t,e,n,r){var o=e&gt;=1.5*n;return Math.round(t/n)+&quot; &quot;+r+(o?&quot;s&quot;:&quot;&quot;)}var s=1e3,a=60*s,c=60*a,u=24*c,p=7*u,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if(&quot;string&quot;===i&amp;&amp;t.length&gt;0)return n(t);if(&quot;number&quot;===i&amp;&amp;isFinite(t))return e[&quot;long&quot;]?o(t):r(t);throw new Error(&quot;val is not a non-empty string or a valid number. val=&quot;+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=&quot;&quot;+t.type;if(e.BINARY_EVENT!==t.type&amp;&amp;e.BINARY_ACK!==t.type||(n+=t.attachments+&quot;-&quot;),t.nsp&amp;&amp;&quot;/&quot;!==t.nsp&amp;&amp;(n+=t.nsp+&quot;,&quot;),null!=t.id&amp;&amp;(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f(&quot;encoded %j as %s&quot;,t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h(&quot;unknown packet type &quot;+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o=&quot;&quot;;&quot;-&quot;!==t.charAt(++n)&amp;&amp;(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||&quot;-&quot;!==t.charAt(n))throw new Error(&quot;Illegal attachments&quot;);r.attachments=Number(o)}if(&quot;/&quot;===t.charAt(n+1))for(r.nsp=&quot;&quot;;++n;){var i=t.charAt(n);if(&quot;,&quot;===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp=&quot;/&quot;;var s=t.charAt(n+1);if(&quot;&quot;!==s&amp;&amp;Number(s)==s){for(r.id=&quot;&quot;;++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=u(t.substr(n)),c=a!==!1&amp;&amp;(r.type===e.ERROR||y(a));if(!c)return h(&quot;invalid payload&quot;);r.data=a}return f(&quot;decoded %s as %j&quot;,t,r),r}function u(t){try{return JSON.parse(t)}catch(e){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:&quot;parser error: &quot;+t}}var f=n(8)(&quot;socket.io-parser&quot;),l=n(11),d=n(12),y=n(13),m=n(14);e.protocol=4,e.types=[&quot;CONNECT&quot;,&quot;DISCONNECT&quot;,&quot;EVENT&quot;,&quot;ACK&quot;,&quot;ERROR&quot;,&quot;BINARY_EVENT&quot;,&quot;BINARY_ACK&quot;],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+&#39;&quot;encode error&quot;&#39;;r.prototype.encode=function(t,n){if(f(&quot;encoding packet %j&quot;,t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if(&quot;string&quot;==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&amp;&amp;this.emit(&quot;decoded&quot;,n)):this.emit(&quot;decoded&quot;,n);else{if(!m(t)&amp;&amp;!t.base64)throw new Error(&quot;Unknown type: &quot;+t);if(!this.reconstructor)throw new Error(&quot;got binary data when not reconstructing a packet&quot;);n=this.reconstructor.takeBinaryData(t),n&amp;&amp;(this.reconstructor=null,this.emit(&quot;decoded&quot;,n))}},a.prototype.destroy=function(){this.reconstructor&amp;&amp;this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){(function(r){&quot;use strict&quot;;function o(){return!(&quot;undefined&quot;==typeof window||!window.process||&quot;renderer&quot;!==window.process.type)||(&quot;undefined&quot;==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&amp;&amp;(&quot;undefined&quot;!=typeof document&amp;&amp;document.documentElement&amp;&amp;document.documentElement.style&amp;&amp;document.documentElement.style.WebkitAppearance||&quot;undefined&quot;!=typeof window&amp;&amp;window.console&amp;&amp;(window.console.firebug||window.console.exception&amp;&amp;window.console.table)||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&amp;&amp;parseInt(RegExp.$1,10)&gt;=31||&quot;undefined&quot;!=typeof navigator&amp;&amp;navigator.userAgent&amp;&amp;navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?&quot;%c&quot;:&quot;&quot;)+this.namespace+(n?&quot; %c&quot;:&quot; &quot;)+t[0]+(n?&quot;%c &quot;:&quot; &quot;)+&quot;+&quot;+e.humanize(this.diff),n){var r=&quot;color: &quot;+this.color;t.splice(1,0,r,&quot;color: inherit&quot;);var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){&quot;%%&quot;!==t&amp;&amp;(o++,&quot;%c&quot;===t&amp;&amp;(i=o))}),t.splice(i,0,r)}}function s(){return&quot;object&quot;===(&quot;undefined&quot;==typeof console?&quot;undefined&quot;:p(console))&amp;&amp;console.log&amp;&amp;Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem(&quot;debug&quot;):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&amp;&amp;&quot;undefined&quot;!=typeof r&amp;&amp;&quot;env&quot;in r&amp;&amp;(t=r.env.DEBUG),t}function u(){try{return window.localStorage}catch(t){}}var p=&quot;function&quot;==typeof Symbol&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&amp;&amp;&quot;function&quot;==typeof Symbol&amp;&amp;t.constructor===Symbol&amp;&amp;t!==Symbol.prototype?&quot;symbol&quot;:typeof t};e=t.exports=n(9),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=&quot;undefined&quot;!=typeof chrome&amp;&amp;&quot;undefined&quot;!=typeof chrome.storage?chrome.storage.local:u(),e.colors=[&quot;#0000CC&quot;,&quot;#0000FF&quot;,&quot;#0033CC&quot;,&quot;#0033FF&quot;,&quot;#0066CC&quot;,&quot;#0066FF&quot;,&quot;#0099CC&quot;,&quot;#0099FF&quot;,&quot;#00CC00&quot;,&quot;#00CC33&quot;,&quot;#00CC66&quot;,&quot;#00CC99&quot;,&quot;#00CCCC&quot;,&quot;#00CCFF&quot;,&quot;#3300CC&quot;,&quot;#3300FF&quot;,&quot;#3333CC&quot;,&quot;#3333FF&quot;,&quot;#3366CC&quot;,&quot;#3366FF&quot;,&quot;#3399CC&quot;,&quot;#3399FF&quot;,&quot;#33CC00&quot;,&quot;#33CC33&quot;,&quot;#33CC66&quot;,&quot;#33CC99&quot;,&quot;#33CCCC&quot;,&quot;#33CCFF&quot;,&quot;#6600CC&quot;,&quot;#6600FF&quot;,&quot;#6633CC&quot;,&quot;#6633FF&quot;,&quot;#66CC00&quot;,&quot;#66CC33&quot;,&quot;#9900CC&quot;,&quot;#9900FF&quot;,&quot;#9933CC&quot;,&quot;#9933FF&quot;,&quot;#99CC00&quot;,&quot;#99CC33&quot;,&quot;#CC0000&quot;,&quot;#CC0033&quot;,&quot;#CC0066&quot;,&quot;#CC0099&quot;,&quot;#CC00CC&quot;,&quot;#CC00FF&quot;,&quot;#CC3300&quot;,&quot;#CC3333&quot;,&quot;#CC3366&quot;,&quot;#CC3399&quot;,&quot;#CC33CC&quot;,&quot;#CC33FF&quot;,&quot;#CC6600&quot;,&quot;#CC6633&quot;,&quot;#CC9900&quot;,&quot;#CC9933&quot;,&quot;#CCCC00&quot;,&quot;#CCCC33&quot;,&quot;#FF0000&quot;,&quot;#FF0033&quot;,&quot;#FF0066&quot;,&quot;#FF0099&quot;,&quot;#FF00CC&quot;,&quot;#FF00FF&quot;,&quot;#FF3300&quot;,&quot;#FF3333&quot;,&quot;#FF3366&quot;,&quot;#FF3399&quot;,&quot;#FF33CC&quot;,&quot;#FF33FF&quot;,&quot;#FF6600&quot;,&quot;#FF6633&quot;,&quot;#FF9900&quot;,&quot;#FF9933&quot;,&quot;#FFCC00&quot;,&quot;#FFCC33&quot;],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return&quot;[UnexpectedJSONParseError]: &quot;+e.message}},e.enable(c())}).call(e,n(4))},function(t,e,n){&quot;use strict&quot;;function r(t){var n,r=0;for(n in t)r=(r&lt;&lt;5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a&lt;s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),&quot;string&quot;!=typeof s[0]&amp;&amp;s.unshift(&quot;%O&quot;);var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if(&quot;%%&quot;===n)return n;c++;var o=e.formatters[r];if(&quot;function&quot;==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var u=n.log||e.log||console.log.bind(console);u.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,&quot;function&quot;==typeof e.init&amp;&amp;e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&amp;&amp;(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=(&quot;string&quot;==typeof t?t:&quot;&quot;).split(/[\s,]+/),o=r.length;for(n=0;n&lt;o;n++)r[n]&amp;&amp;(t=r[n].replace(/\*/g,&quot;.*?&quot;),&quot;-&quot;===t[0]?e.skips.push(new RegExp(&quot;^&quot;+t.substr(1)+&quot;$&quot;)):e.names.push(new RegExp(&quot;^&quot;+t+&quot;$&quot;)));for(n=0;n&lt;e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable(&quot;&quot;)}function c(t){if(&quot;*&quot;===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n&lt;r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n&lt;r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o[&quot;default&quot;]=o,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(10),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length&gt;100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||&quot;ms&quot;).toLowerCase();switch(r){case&quot;years&quot;:case&quot;year&quot;:case&quot;yrs&quot;:case&quot;yr&quot;:case&quot;y&quot;:return n*p;case&quot;days&quot;:case&quot;day&quot;:case&quot;d&quot;:return n*u;case&quot;hours&quot;:case&quot;hour&quot;:case&quot;hrs&quot;:case&quot;hr&quot;:case&quot;h&quot;:return n*c;case&quot;minutes&quot;:case&quot;minute&quot;:case&quot;mins&quot;:case&quot;min&quot;:case&quot;m&quot;:return n*a;case&quot;seconds&quot;:case&quot;second&quot;:case&quot;secs&quot;:case&quot;sec&quot;:case&quot;s&quot;:return n*s;case&quot;milliseconds&quot;:case&quot;millisecond&quot;:case&quot;msecs&quot;:case&quot;msec&quot;:case&quot;ms&quot;:return n;default:return}}}}function r(t){return t&gt;=u?Math.round(t/u)+&quot;d&quot;:t&gt;=c?Math.round(t/c)+&quot;h&quot;:t&gt;=a?Math.round(t/a)+&quot;m&quot;:t&gt;=s?Math.round(t/s)+&quot;s&quot;:t+&quot;ms&quot;}function o(t){return i(t,u,&quot;day&quot;)||i(t,c,&quot;hour&quot;)||i(t,a,&quot;minute&quot;)||i(t,s,&quot;second&quot;)||t+&quot; ms&quot;}function i(t,e,n){if(!(t&lt;e))return t&lt;1.5*e?Math.floor(t/e)+&quot; &quot;+n:Math.ceil(t/e)+&quot; &quot;+n+&quot;s&quot;}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if(&quot;string&quot;===i&amp;&amp;t.length&gt;0)return n(t);if(&quot;number&quot;===i&amp;&amp;isNaN(t)===!1)return e[&quot;long&quot;]?o(t):r(t);throw new Error(&quot;val is not a non-empty string or a valid number. val=&quot;+JSON.stringify(t))}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[&quot;$&quot;+t]=this._callbacks[&quot;$&quot;+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[&quot;$&quot;+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[&quot;$&quot;+t],this;for(var r,o=0;o&lt;n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[&quot;$&quot;+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r&lt;o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[&quot;$&quot;+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a&lt;t.length;a++)o[a]=r(t[a],e);return o}if(&quot;object&quot;==typeof t&amp;&amp;!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&amp;&amp;t._placeholder)return e[t.num];if(i(t))for(var n=0;n&lt;t.length;n++)t[n]=o(t[n],e);else if(&quot;object&quot;==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(13),s=n(14),a=Object.prototype.toString,c=&quot;function&quot;==typeof Blob||&quot;undefined&quot;!=typeof Blob&amp;&amp;&quot;[object BlobConstructor]&quot;===a.call(Blob),u=&quot;function&quot;==typeof File||&quot;undefined&quot;!=typeof File&amp;&amp;&quot;[object FileConstructor]&quot;===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,p){if(!t)return t;if(c&amp;&amp;t instanceof Blob||u&amp;&amp;t instanceof File){r++;var h=new FileReader;h.onload=function(){p?p[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f&lt;t.length;f++)n(t[f],f,t);else if(&quot;object&quot;==typeof t&amp;&amp;!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return&quot;[object Array]&quot;==n.call(t)}},function(t,e){function n(t){return r&amp;&amp;Buffer.isBuffer(t)||o&amp;&amp;(t instanceof ArrayBuffer||i(t))}t.exports=n;var r=&quot;function&quot;==typeof Buffer&amp;&amp;&quot;function&quot;==typeof Buffer.isBuffer,o=&quot;function&quot;==typeof ArrayBuffer,i=function(t){return&quot;function&quot;==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){function r(t,e){if(!(this instanceof r))return new r(t,e);t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(e=t,t=void 0),e=e||{},e.path=e.path||&quot;/socket.io&quot;,this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState=&quot;closed&quot;,this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||a;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&amp;&amp;this.open()}var o=n(16),i=n(39),s=n(11),a=n(7),c=n(41),u=n(42),p=n(3)(&quot;socket.io-client:manager&quot;),h=n(38),f=n(43),l=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&amp;&amp;this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&amp;&amp;(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return(&quot;/&quot;===t?&quot;&quot;:t+&quot;#&quot;)+this.engine.id},s(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&amp;&amp;this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&amp;&amp;this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&amp;&amp;this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&amp;&amp;this._reconnection&amp;&amp;0===this.backoff.attempts&amp;&amp;this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(p(&quot;readyState %s&quot;,this.readyState),~this.readyState.indexOf(&quot;open&quot;))return this;p(&quot;opening %s&quot;,this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,r=this;this.readyState=&quot;opening&quot;,this.skipReconnect=!1;var i=c(n,&quot;open&quot;,function(){r.onopen(),t&amp;&amp;t()}),s=c(n,&quot;error&quot;,function(e){if(p(&quot;connect_error&quot;),r.cleanup(),r.readyState=&quot;closed&quot;,r.emitAll(&quot;connect_error&quot;,e),t){var n=new Error(&quot;Connection error&quot;);n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p(&quot;connect attempt will timeout after %d&quot;,a);var u=setTimeout(function(){p(&quot;connect attempt timed out after %d&quot;,a),i.destroy(),n.close(),n.emit(&quot;error&quot;,&quot;timeout&quot;),r.emitAll(&quot;connect_timeout&quot;,a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},r.prototype.onopen=function(){p(&quot;open&quot;),this.cleanup(),this.readyState=&quot;open&quot;,this.emit(&quot;open&quot;);var t=this.engine;this.subs.push(c(t,&quot;data&quot;,u(this,&quot;ondata&quot;))),this.subs.push(c(t,&quot;ping&quot;,u(this,&quot;onping&quot;))),this.subs.push(c(t,&quot;pong&quot;,u(this,&quot;onpong&quot;))),this.subs.push(c(t,&quot;error&quot;,u(this,&quot;onerror&quot;))),this.subs.push(c(t,&quot;close&quot;,u(this,&quot;onclose&quot;))),this.subs.push(c(this.decoder,&quot;decoded&quot;,u(this,&quot;ondecoded&quot;)))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll(&quot;ping&quot;)},r.prototype.onpong=function(){this.emitAll(&quot;pong&quot;,new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit(&quot;packet&quot;,t)},r.prototype.onerror=function(t){p(&quot;error&quot;,t),this.emitAll(&quot;error&quot;,t)},r.prototype.socket=function(t,e){function n(){~h(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new i(this,t,e),this.nsps[t]=r;var o=this;r.on(&quot;connecting&quot;,n),r.on(&quot;connect&quot;,function(){r.id=o.generateId(t)}),this.autoConnect&amp;&amp;n()}return r},r.prototype.destroy=function(t){var e=h(this.connecting,t);~e&amp;&amp;this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){p(&quot;writing packet %j&quot;,t);var e=this;t.query&amp;&amp;0===t.type&amp;&amp;(t.nsp+=&quot;?&quot;+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r&lt;n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length&gt;0&amp;&amp;!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){p(&quot;cleanup&quot;);for(var t=this.subs.length,e=0;e&lt;t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){p(&quot;disconnect&quot;),this.skipReconnect=!0,this.reconnecting=!1,&quot;opening&quot;===this.readyState&amp;&amp;this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.engine&amp;&amp;this.engine.close()},r.prototype.onclose=function(t){p(&quot;onclose&quot;),this.cleanup(),this.backoff.reset(),this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;,t),this._reconnection&amp;&amp;!this.skipReconnect&amp;&amp;this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts&gt;=this._reconnectionAttempts)p(&quot;reconnect failed&quot;),this.backoff.reset(),this.emitAll(&quot;reconnect_failed&quot;),this.reconnecting=!1;else{var e=this.backoff.duration();p(&quot;will wait %dms before reconnect attempt&quot;,e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p(&quot;attempting reconnect&quot;),t.emitAll(&quot;reconnect_attempt&quot;,t.backoff.attempts),t.emitAll(&quot;reconnecting&quot;,t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p(&quot;reconnect attempt error&quot;),t.reconnecting=!1,t.reconnect(),t.emitAll(&quot;reconnect_error&quot;,e.data)):(p(&quot;reconnect success&quot;),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll(&quot;reconnect&quot;,t)}},function(t,e,n){t.exports=n(17),t.exports.parser=n(24)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure=&quot;https&quot;===t.protocol||&quot;wss&quot;===t.protocol,e.port=t.port,t.query&amp;&amp;(e.query=t.query)):e.host&amp;&amp;(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:&quot;undefined&quot;!=typeof location&amp;&amp;&quot;https:&quot;===location.protocol,e.hostname&amp;&amp;!e.port&amp;&amp;(e.port=this.secure?&quot;443&quot;:&quot;80&quot;),this.agent=e.agent||!1,this.hostname=e.hostname||(&quot;undefined&quot;!=typeof location?location.hostname:&quot;localhost&quot;),this.port=e.port||(&quot;undefined&quot;!=typeof location&amp;&amp;location.port?location.port:this.secure?443:80),this.query=e.query||{},&quot;string&quot;==typeof this.query&amp;&amp;(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||&quot;/engine.io&quot;).replace(/\/$/,&quot;&quot;)+&quot;/&quot;,this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||&quot;t&quot;,this.timestampRequests=e.timestampRequests,this.transports=e.transports||[&quot;polling&quot;,&quot;websocket&quot;],this.transportOptions=e.transportOptions||{},this.readyState=&quot;&quot;,this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&amp;&amp;(e.perMessageDeflate||{}),!0===this.perMessageDeflate&amp;&amp;(this.perMessageDeflate={}),this.perMessageDeflate&amp;&amp;null==this.perMessageDeflate.threshold&amp;&amp;(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative=&quot;undefined&quot;!=typeof navigator&amp;&amp;&quot;string&quot;==typeof navigator.product&amp;&amp;&quot;reactnative&quot;===navigator.product.toLowerCase(),(&quot;undefined&quot;==typeof self||this.isReactNative)&amp;&amp;(e.extraHeaders&amp;&amp;Object.keys(e.extraHeaders).length&gt;0&amp;&amp;(this.extraHeaders=e.extraHeaders),e.localAddress&amp;&amp;(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&amp;&amp;(e[n]=t[n]);return e}var i=n(18),s=n(11),a=n(3)(&quot;engine.io-client:socket&quot;),c=n(38),u=n(24),p=n(2),h=n(32);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=u.protocol,r.Socket=r,r.Transport=n(23),r.transports=n(18),r.parser=n(24),r.prototype.createTransport=function(t){a(&#39;creating transport &quot;%s&quot;&#39;,t);var e=o(this.query);e.EIO=u.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&amp;&amp;(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,withCredentials:n.withCredentials||this.withCredentials,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&amp;&amp;r.priorWebsocketSuccess&amp;&amp;this.transports.indexOf(&quot;websocket&quot;)!==-1)t=&quot;websocket&quot;;else{</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit(&quot;error&quot;,&quot;No transports available&quot;)},0)}t=this.transports[0]}this.readyState=&quot;opening&quot;;try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a(&quot;setting transport %s&quot;,t.name);var e=this;this.transport&amp;&amp;(a(&quot;clearing existing transport %s&quot;,this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on(&quot;drain&quot;,function(){e.onDrain()}).on(&quot;packet&quot;,function(t){e.onPacket(t)}).on(&quot;error&quot;,function(t){e.onError(t)}).on(&quot;close&quot;,function(){e.onClose(&quot;transport close&quot;)})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&amp;&amp;f.transport.supportsBinary;h=h||e}h||(a(&#39;probe transport &quot;%s&quot; opened&#39;,t),p.send([{type:&quot;ping&quot;,data:&quot;probe&quot;}]),p.once(&quot;packet&quot;,function(e){if(!h)if(&quot;pong&quot;===e.type&amp;&amp;&quot;probe&quot;===e.data){if(a(&#39;probe transport &quot;%s&quot; pong&#39;,t),f.upgrading=!0,f.emit(&quot;upgrading&quot;,p),!p)return;r.priorWebsocketSuccess=&quot;websocket&quot;===p.name,a(&#39;pausing current transport &quot;%s&quot;&#39;,f.transport.name),f.transport.pause(function(){h||&quot;closed&quot;!==f.readyState&amp;&amp;(a(&quot;changing transport and sending upgrade packet&quot;),u(),f.setTransport(p),p.send([{type:&quot;upgrade&quot;}]),f.emit(&quot;upgrade&quot;,p),p=null,f.upgrading=!1,f.flush())})}else{a(&#39;probe transport &quot;%s&quot; failed&#39;,t);var n=new Error(&quot;probe error&quot;);n.transport=p.name,f.emit(&quot;upgradeError&quot;,n)}}))}function n(){h||(h=!0,u(),p.close(),p=null)}function o(e){var r=new Error(&quot;probe error: &quot;+e);r.transport=p.name,n(),a(&#39;probe transport &quot;%s&quot; failed because of error: %s&#39;,t,e),f.emit(&quot;upgradeError&quot;,r)}function i(){o(&quot;transport closed&quot;)}function s(){o(&quot;socket closed&quot;)}function c(t){p&amp;&amp;t.name!==p.name&amp;&amp;(a(&#39;&quot;%s&quot; works - aborting &quot;%s&quot;&#39;,t.name,p.name),n())}function u(){p.removeListener(&quot;open&quot;,e),p.removeListener(&quot;error&quot;,o),p.removeListener(&quot;close&quot;,i),f.removeListener(&quot;close&quot;,s),f.removeListener(&quot;upgrading&quot;,c)}a(&#39;probing transport &quot;%s&quot;&#39;,t);var p=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,p.once(&quot;open&quot;,e),p.once(&quot;error&quot;,o),p.once(&quot;close&quot;,i),this.once(&quot;close&quot;,s),this.once(&quot;upgrading&quot;,c),p.open()},r.prototype.onOpen=function(){if(a(&quot;socket open&quot;),this.readyState=&quot;open&quot;,r.priorWebsocketSuccess=&quot;websocket&quot;===this.transport.name,this.emit(&quot;open&quot;),this.flush(),&quot;open&quot;===this.readyState&amp;&amp;this.upgrade&amp;&amp;this.transport.pause){a(&quot;starting upgrade probes&quot;);for(var t=0,e=this.upgrades.length;t&lt;e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState)switch(a(&#39;socket receive: type &quot;%s&quot;, data &quot;%s&quot;&#39;,t.type,t.data),this.emit(&quot;packet&quot;,t),this.emit(&quot;heartbeat&quot;),t.type){case&quot;open&quot;:this.onHandshake(JSON.parse(t.data));break;case&quot;pong&quot;:this.setPing(),this.emit(&quot;pong&quot;);break;case&quot;error&quot;:var e=new Error(&quot;server error&quot;);e.code=t.data,this.onError(e);break;case&quot;message&quot;:this.emit(&quot;data&quot;,t.data),this.emit(&quot;message&quot;,t.data)}else a(&#39;packet received with socket readyState &quot;%s&quot;&#39;,this.readyState)},r.prototype.onHandshake=function(t){this.emit(&quot;handshake&quot;,t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),&quot;closed&quot;!==this.readyState&amp;&amp;(this.setPing(),this.removeListener(&quot;heartbeat&quot;,this.onHeartbeat),this.on(&quot;heartbeat&quot;,this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){&quot;closed&quot;!==e.readyState&amp;&amp;e.onClose(&quot;ping timeout&quot;)},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a(&quot;writing ping packet - expecting pong within %sms&quot;,t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket(&quot;ping&quot;,function(){t.emit(&quot;ping&quot;)})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit(&quot;drain&quot;):this.flush()},r.prototype.flush=function(){&quot;closed&quot;!==this.readyState&amp;&amp;this.transport.writable&amp;&amp;!this.upgrading&amp;&amp;this.writeBuffer.length&amp;&amp;(a(&quot;flushing %d packets in socket&quot;,this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit(&quot;flush&quot;))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket(&quot;message&quot;,t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if(&quot;function&quot;==typeof e&amp;&amp;(r=e,e=void 0),&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null),&quot;closing&quot;!==this.readyState&amp;&amp;&quot;closed&quot;!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit(&quot;packetCreate&quot;,o),this.writeBuffer.push(o),r&amp;&amp;this.once(&quot;flush&quot;,r),this.flush()}},r.prototype.close=function(){function t(){r.onClose(&quot;forced close&quot;),a(&quot;socket closing - telling transport to close&quot;),r.transport.close()}function e(){r.removeListener(&quot;upgrade&quot;,e),r.removeListener(&quot;upgradeError&quot;,e),t()}function n(){r.once(&quot;upgrade&quot;,e),r.once(&quot;upgradeError&quot;,e)}if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState){this.readyState=&quot;closing&quot;;var r=this;this.writeBuffer.length?this.once(&quot;drain&quot;,function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a(&quot;socket error %j&quot;,t),r.priorWebsocketSuccess=!1,this.emit(&quot;error&quot;,t),this.onClose(&quot;transport error&quot;,t)},r.prototype.onClose=function(t,e){if(&quot;opening&quot;===this.readyState||&quot;open&quot;===this.readyState||&quot;closing&quot;===this.readyState){a(&#39;socket close with reason: &quot;%s&quot;&#39;,t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners(&quot;close&quot;),this.transport.close(),this.transport.removeAllListeners(),this.readyState=&quot;closed&quot;,this.id=null,this.emit(&quot;close&quot;,t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n&lt;r;n++)~c(this.transports,t[n])&amp;&amp;e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;if(&quot;undefined&quot;!=typeof location){var c=&quot;https:&quot;===location.protocol,u=location.port;u||(u=c?443:80),n=t.hostname!==location.hostname||u!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),&quot;open&quot;in e&amp;&amp;!t.forceJSONP)return new i(t);if(!a)throw new Error(&quot;JSONP disabled&quot;);return new s(t)}var o=n(19),i=n(21),s=n(35),a=n(36);e.polling=r,e.websocket=a},function(t,e,n){var r=n(20);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if(&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;(!e||r))return new XMLHttpRequest}catch(i){}try{if(&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!n&amp;&amp;o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[[&quot;Active&quot;].concat(&quot;Object&quot;).join(&quot;X&quot;)])(&quot;Microsoft.XMLHTTP&quot;)}catch(i){}}},function(t,e){try{t.exports=&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;&quot;withCredentials&quot;in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,&quot;undefined&quot;!=typeof location){var e=&quot;https:&quot;===location.protocol,n=location.port;n||(n=e?443:80),this.xd=&quot;undefined&quot;!=typeof location&amp;&amp;t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||&quot;GET&quot;,this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&amp;&amp;i.requests[t].abort()}var a=n(19),c=n(22),u=n(11),p=n(33),h=n(3)(&quot;engine.io-client:polling-xhr&quot;);if(t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n=&quot;string&quot;!=typeof t&amp;&amp;void 0!==t,r=this.request({method:&quot;POST&quot;,data:t,isBinary:n}),o=this;r.on(&quot;success&quot;,e),r.on(&quot;error&quot;,function(t){o.onError(&quot;xhr post error&quot;,t)}),this.sendXhr=r},o.prototype.doPoll=function(){h(&quot;xhr poll&quot;);var t=this.request(),e=this;t.on(&quot;data&quot;,function(t){e.onData(t)}),t.on(&quot;error&quot;,function(t){e.onError(&quot;xhr poll error&quot;,t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h(&quot;xhr open %s: %s&quot;,this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&amp;&amp;e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&amp;&amp;e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if(&quot;POST&quot;===this.method)try{this.isBinary?e.setRequestHeader(&quot;Content-type&quot;,&quot;application/octet-stream&quot;):e.setRequestHeader(&quot;Content-type&quot;,&quot;text/plain;charset=UTF-8&quot;)}catch(o){}try{e.setRequestHeader(&quot;Accept&quot;,&quot;*/*&quot;)}catch(o){}&quot;withCredentials&quot;in e&amp;&amp;(e.withCredentials=this.withCredentials),this.requestTimeout&amp;&amp;(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader(&quot;Content-Type&quot;);(n.supportsBinary&amp;&amp;&quot;application/octet-stream&quot;===t||&quot;application/octet-stream; charset=UTF-8&quot;===t)&amp;&amp;(e.responseType=&quot;arraybuffer&quot;)}catch(r){}4===e.readyState&amp;&amp;(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError(&quot;number&quot;==typeof e.status?e.status:0)},0))},h(&quot;xhr data %s&quot;,this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}&quot;undefined&quot;!=typeof document&amp;&amp;(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit(&quot;success&quot;),this.cleanup()},i.prototype.onData=function(t){this.emit(&quot;data&quot;,t),this.onSuccess()},i.prototype.onError=function(t){this.emit(&quot;error&quot;,t),this.cleanup(!0)},i.prototype.cleanup=function(t){if(&quot;undefined&quot;!=typeof this.xhr&amp;&amp;null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}&quot;undefined&quot;!=typeof document&amp;&amp;delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader(&quot;Content-Type&quot;)}catch(n){}t=&quot;application/octet-stream&quot;===e||&quot;application/octet-stream; charset=UTF-8&quot;===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&amp;&amp;this.onData(t)},i.prototype.hasXDR=function(){return&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!this.xs&amp;&amp;this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},&quot;undefined&quot;!=typeof document)if(&quot;function&quot;==typeof attachEvent)attachEvent(&quot;onunload&quot;,s);else if(&quot;function&quot;==typeof addEventListener){var f=&quot;onpagehide&quot;in self?&quot;pagehide&quot;:&quot;unload&quot;;addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&amp;&amp;t.forceBase64;p&amp;&amp;!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(23),i=n(32),s=n(24),a=n(33),c=n(34),u=n(3)(&quot;engine.io-client:polling&quot;);t.exports=r;var p=function(){var t=n(19),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name=&quot;polling&quot;,r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){u(&quot;paused&quot;),n.readyState=&quot;paused&quot;,t()}var n=this;if(this.readyState=&quot;pausing&quot;,this.polling||!this.writable){var r=0;this.polling&amp;&amp;(u(&quot;we are currently polling - waiting to pause&quot;),r++,this.once(&quot;pollComplete&quot;,function(){u(&quot;pre-pause polling complete&quot;),--r||e()})),this.writable||(u(&quot;we are currently writing - waiting to pause&quot;),r++,this.once(&quot;drain&quot;,function(){u(&quot;pre-pause writing complete&quot;),--r||e()}))}else e()},r.prototype.poll=function(){u(&quot;polling&quot;),this.polling=!0,this.doPoll(),this.emit(&quot;poll&quot;)},r.prototype.onData=function(t){var e=this;u(&quot;polling got data %s&quot;,t);var n=function(t,n,r){return&quot;opening&quot;===e.readyState&amp;&amp;e.onOpen(),&quot;close&quot;===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),&quot;closed&quot;!==this.readyState&amp;&amp;(this.polling=!1,this.emit(&quot;pollComplete&quot;),&quot;open&quot;===this.readyState?this.poll():u(&#39;ignoring poll - transport state &quot;%s&quot;&#39;,this.readyState))},r.prototype.doClose=function(){function t(){u(&quot;writing close packet&quot;),e.write([{type:&quot;close&quot;}])}var e=this;&quot;open&quot;===this.readyState?(u(&quot;transport open - closing&quot;),t()):(u(&quot;transport not open - deferring close&quot;),this.once(&quot;open&quot;,t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit(&quot;drain&quot;)};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;https&quot;:&quot;http&quot;,n=&quot;&quot;;!1!==this.timestampRequests&amp;&amp;(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&amp;&amp;(&quot;https&quot;===e&amp;&amp;443!==Number(this.port)||&quot;http&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(n=&quot;:&quot;+this.port),t.length&amp;&amp;(t=&quot;?&quot;+t);var r=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(r?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState=&quot;&quot;,this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(24),i=n(11);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type=&quot;TransportError&quot;,n.description=e,this.emit(&quot;error&quot;,n),this},r.prototype.open=function(){return&quot;closed&quot;!==this.readyState&amp;&amp;&quot;&quot;!==this.readyState||(this.readyState=&quot;opening&quot;,this.doOpen()),this},r.prototype.close=function(){return&quot;opening&quot;!==this.readyState&amp;&amp;&quot;open&quot;!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if(&quot;open&quot;!==this.readyState)throw new Error(&quot;Transport not open&quot;);this.write(t)},r.prototype.onOpen=function(){this.readyState=&quot;open&quot;,this.writable=!0,this.emit(&quot;open&quot;)},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit(&quot;packet&quot;,t)},r.prototype.onClose=function(){this.readyState=&quot;closed&quot;,this.emit(&quot;close&quot;)}},function(t,e,n){function r(t,n){var r=&quot;b&quot;+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a&lt;i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s&lt;t.length;s++)i(s,t[s],o)}var u,p=n(25),h=n(26),f=n(27),l=n(28),d=n(29);&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;(u=n(30));var y=&quot;undefined&quot;!=typeof navigator&amp;&amp;/Android/i.test(navigator.userAgent),m=&quot;undefined&quot;!=typeof navigator&amp;&amp;/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),C={type:&quot;error&quot;,data:&quot;parser error&quot;},w=n(31);e.encodePacket=function(t,e,n,i){&quot;function&quot;==typeof e&amp;&amp;(i=e,e=!1),&quot;function&quot;==typeof n&amp;&amp;(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if(&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;a instanceof ArrayBuffer)return o(t,e,i);if(&quot;undefined&quot;!=typeof w&amp;&amp;a instanceof w)return s(t,e,i);if(a&amp;&amp;a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&amp;&amp;(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(&quot;&quot;+c)},e.encodeBase64Packet=function(t,n){var r=&quot;b&quot;+e.packets[t.type];if(&quot;undefined&quot;!=typeof w&amp;&amp;t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(&quot;,&quot;)[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),u=0;u&lt;a.length;u++)c[u]=a[u];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return C;if(&quot;string&quot;==typeof t){if(&quot;b&quot;===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&amp;&amp;(t=a(t),t===!1))return C;var o=t.charAt(0);return Number(o)==o&amp;&amp;b[o]?t.length&gt;1?{type:b[o],data:t.substring(1)}:{type:b[o]}:C}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&amp;&amp;&quot;blob&quot;===n&amp;&amp;(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!u)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=u.decode(t.substr(1));return&quot;blob&quot;===e&amp;&amp;w&amp;&amp;(r=new w([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+&quot;:&quot;+t}function i(t,r){e.encodePacket(t,!!s&amp;&amp;n,!1,function(t){r(null,o(t))})}&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);var s=h(t);return n&amp;&amp;s?w&amp;&amp;!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(&quot;&quot;))}):r(&quot;0:&quot;)},e.decodePayload=function(t,n,r){if(&quot;string&quot;!=typeof t)return e.decodePayloadAsBinary(t,n,r);&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);var o;if(&quot;&quot;===t)return r(C,0,1);for(var i,s,a=&quot;&quot;,c=0,u=t.length;c&lt;u;c++){var p=t.charAt(c);if(&quot;:&quot;===p){if(&quot;&quot;===a||a!=(i=Number(a)))return r(C,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(C,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),C.type===o.type&amp;&amp;C.data===o.data)return r(C,0,1);var h=r(o,c+i,u);if(!1===h)return}c+=i,a=&quot;&quot;}else a+=p}return&quot;&quot;!==a?r(C,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n=&quot;string&quot;==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e=&quot;string&quot;==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s&lt;t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s&lt;a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s&lt;r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,&quot;string&quot;==typeof t){for(var r=new Uint8Array(t.length),o=0;o&lt;t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o&lt;s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new w(e))})},e.decodePayloadAsBinary=function(t,n,r){&quot;function&quot;==typeof n&amp;&amp;(r=n,n=null);for(var o=t,i=[];o.byteLength&gt;0;){for(var s=new Uint8Array(o),a=0===s[0],c=&quot;&quot;,u=1;255!==s[u];u++){if(c.length&gt;310)return r(C,0,1);c+=s[u]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(h){var l=new Uint8Array(p);p=&quot;&quot;;for(var u=0;u&lt;l.length;u++)p+=String.fromCharCode(l[u])}i.push(p),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&amp;&amp;e.push(r);return e}},function(t,e,n){function r(t){if(!t||&quot;object&quot;!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e&lt;n;e++)if(r(t[e]))return!0;return!1}if(&quot;function&quot;==typeof Buffer&amp;&amp;Buffer.isBuffer&amp;&amp;Buffer.isBuffer(t)||&quot;function&quot;==typeof ArrayBuffer&amp;&amp;t instanceof ArrayBuffer||s&amp;&amp;t instanceof Blob||a&amp;&amp;t instanceof File)return!0;if(t.toJSON&amp;&amp;&quot;function&quot;==typeof t.toJSON&amp;&amp;1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&amp;&amp;r(t[i]))return!0;return!1}var o=n(13),i=Object.prototype.toString,s=&quot;function&quot;==typeof Blob||&quot;undefined&quot;!=typeof Blob&amp;&amp;&quot;[object BlobConstructor]&quot;===i.call(Blob),a=&quot;function&quot;==typeof File||&quot;undefined&quot;!=typeof File&amp;&amp;&quot;[object FileConstructor]&quot;===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e&lt;0&amp;&amp;(e+=r),n&lt;0&amp;&amp;(n+=r),n&gt;r&amp;&amp;(n=r),e&gt;=r||e&gt;=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s&lt;n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count&lt;=0)throw new Error(&quot;after called too many times&quot;);--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o&lt;i;)e=t.charCodeAt(o++),e&gt;=55296&amp;&amp;e&lt;=56319&amp;&amp;o&lt;i?(n=t.charCodeAt(o++),56320==(64512&amp;n)?r.push(((1023&amp;e)&lt;&lt;10)+(1023&amp;n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o=&quot;&quot;;++r&lt;n;)e=t[r],e&gt;65535&amp;&amp;(e-=65536,o+=d(e&gt;&gt;&gt;10&amp;1023|55296),e=56320|1023&amp;e),o+=d(e);return o}function o(t,e){if(t&gt;=55296&amp;&amp;t&lt;=57343){if(e)throw Error(&quot;Lone surrogate U+&quot;+t.toString(16).toUpperCase()+&quot; is not a scalar value&quot;);return!1}return!0}function i(t,e){return d(t&gt;&gt;e&amp;63|128)}function s(t,e){if(0==(4294967168&amp;t))return d(t);var n=&quot;&quot;;return 0==(4294965248&amp;t)?n=d(t&gt;&gt;6&amp;31|192):0==(4294901760&amp;t)?(o(t,e)||(t=65533),n=d(t&gt;&gt;12&amp;15|224),n+=i(t,6)):0==(4292870144&amp;t)&amp;&amp;(n=d(t&gt;&gt;18&amp;7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&amp;t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,u=&quot;&quot;;++c&lt;a;)r=i[c],u+=s(r,o);return u}function c(){if(l&gt;=f)throw Error(&quot;Invalid byte index&quot;);var t=255&amp;h[l];if(l++,128==(192&amp;t))return 63&amp;t;throw Error(&quot;Invalid continuation byte&quot;)}function u(t){var e,n,r,i,s;if(l&gt;f)throw Error(&quot;Invalid byte index&quot;);if(l==f)return!1;if(e=255&amp;h[l],l++,0==(128&amp;e))return e;if(192==(224&amp;e)){if(n=c(),s=(31&amp;e)&lt;&lt;6|n,s&gt;=128)return s;throw Error(&quot;Invalid continuation byte&quot;)}if(224==(240&amp;e)){if(n=c(),r=c(),s=(15&amp;e)&lt;&lt;12|n&lt;&lt;6|r,s&gt;=2048)return o(s,t)?s:65533;throw Error(&quot;Invalid continuation byte&quot;)}if(240==(248&amp;e)&amp;&amp;(n=c(),r=c(),i=c(),s=(7&amp;e)&lt;&lt;18|n&lt;&lt;12|r&lt;&lt;6|i,s&gt;=65536&amp;&amp;s&lt;=1114111))return s;throw Error(&quot;Invalid UTF-8 detected&quot;)}function p(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=u(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">var h,f,l,d=String.fromCharCode;t.exports={version:&quot;2.1.2&quot;,encode:a,decode:p}},function(t,e){!function(){&quot;use strict&quot;;for(var t=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;,n=new Uint8Array(256),r=0;r&lt;t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i=&quot;&quot;;for(n=0;n&lt;o;n+=3)i+=t[r[n]&gt;&gt;2],i+=t[(3&amp;r[n])&lt;&lt;4|r[n+1]&gt;&gt;4],i+=t[(15&amp;r[n+1])&lt;&lt;2|r[n+2]&gt;&gt;6],i+=t[63&amp;r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+&quot;=&quot;:o%3===1&amp;&amp;(i=i.substring(0,i.length-2)+&quot;==&quot;),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,u=0;&quot;=&quot;===t[t.length-1]&amp;&amp;(a--,&quot;=&quot;===t[t.length-2]&amp;&amp;a--);var p=new ArrayBuffer(a),h=new Uint8Array(p);for(e=0;e&lt;c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[u++]=r&lt;&lt;2|o&gt;&gt;4,h[u++]=(15&amp;o)&lt;&lt;4|i&gt;&gt;2,h[u++]=(3&amp;i)&lt;&lt;6|63&amp;s;return p}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i=&quot;undefined&quot;!=typeof i?i:&quot;undefined&quot;!=typeof WebKitBlobBuilder?WebKitBlobBuilder:&quot;undefined&quot;!=typeof MSBlobBuilder?MSBlobBuilder:&quot;undefined&quot;!=typeof MozBlobBuilder&amp;&amp;MozBlobBuilder,s=function(){try{var t=new Blob([&quot;hi&quot;]);return 2===t.size}catch(e){return!1}}(),a=s&amp;&amp;function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&amp;&amp;i.prototype.append&amp;&amp;i.prototype.getBlob;&quot;undefined&quot;!=typeof Blob&amp;&amp;(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e=&quot;&quot;;for(var n in t)t.hasOwnProperty(n)&amp;&amp;(e.length&amp;&amp;(e+=&quot;&amp;&quot;),e+=encodeURIComponent(n)+&quot;=&quot;+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split(&quot;&amp;&quot;),r=0,o=n.length;r&lt;o;r++){var i=n[r].split(&quot;=&quot;);e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){&quot;use strict&quot;;function n(t){var e=&quot;&quot;;do e=s[t%a]+e,t=Math.floor(t/a);while(t&gt;0);return e}function r(t){var e=0;for(p=0;p&lt;t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=n(+new Date);return t!==i?(u=0,i=t):t+&quot;.&quot;+n(u++)}for(var i,s=&quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_&quot;.split(&quot;&quot;),a=64,c={},u=0,p=0;p&lt;a;p++)c[s[p]]=p;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return&quot;undefined&quot;!=typeof self?self:&quot;undefined&quot;!=typeof window?window:&quot;undefined&quot;!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,&quot;function&quot;==typeof addEventListener&amp;&amp;addEventListener(&quot;beforeunload&quot;,function(){n.script&amp;&amp;(n.script.onerror=r)},!1)}var s=n(22),a=n(33);t.exports=i;var c,u=/\n/g,p=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),this.form&amp;&amp;(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement(&quot;script&quot;);this.script&amp;&amp;(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError(&quot;jsonp poll error&quot;,e)};var n=document.getElementsByTagName(&quot;script&quot;)[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r=&quot;undefined&quot;!=typeof navigator&amp;&amp;/gecko/i.test(navigator.userAgent);r&amp;&amp;setTimeout(function(){var t=document.createElement(&quot;iframe&quot;);document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError(&quot;jsonp polling iframe removal error&quot;,t)}try{var e=&#39;&lt;iframe src=&quot;javascript:0&quot; name=&quot;&#39;+o.iframeId+&#39;&quot;&gt;&#39;;i=document.createElement(e)}catch(t){i=document.createElement(&quot;iframe&quot;),i.name=o.iframeId,i.src=&quot;javascript:0&quot;}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement(&quot;form&quot;),a=document.createElement(&quot;textarea&quot;),c=this.iframeId=&quot;eio_iframe_&quot;+this.index;s.className=&quot;socketio&quot;,s.style.position=&quot;absolute&quot;,s.style.top=&quot;-1000px&quot;,s.style.left=&quot;-1000px&quot;,s.target=c,s.method=&quot;POST&quot;,s.setAttribute(&quot;accept-charset&quot;,&quot;utf-8&quot;),a.name=&quot;d&quot;,s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,&quot;\\\n&quot;),this.area.value=t.replace(u,&quot;\\n&quot;);try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){&quot;complete&quot;===o.iframe.readyState&amp;&amp;n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&amp;&amp;t.forceBase64;e&amp;&amp;(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&amp;&amp;!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(23),a=n(24),c=n(32),u=n(33),p=n(34),h=n(3)(&quot;engine.io-client:websocket&quot;);if(&quot;undefined&quot;!=typeof WebSocket?o=WebSocket:&quot;undefined&quot;!=typeof self&amp;&amp;(o=self.WebSocket||self.MozWebSocket),&quot;undefined&quot;==typeof window)try{i=n(37)}catch(f){}var l=o||i;t.exports=r,u(r,s),r.prototype.name=&quot;websocket&quot;,r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&amp;&amp;(n.headers=this.extraHeaders),this.localAddress&amp;&amp;(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&amp;&amp;!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit(&quot;error&quot;,r)}void 0===this.ws.binaryType&amp;&amp;(this.supportsBinary=!1),this.ws.supports&amp;&amp;this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType=&quot;nodebuffer&quot;):this.ws.binaryType=&quot;arraybuffer&quot;,this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError(&quot;websocket error&quot;,e)}},r.prototype.write=function(t){function e(){n.emit(&quot;flush&quot;),setTimeout(function(){n.writable=!0,n.emit(&quot;drain&quot;)},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o&lt;i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&amp;&amp;(i.compress=t.options.compress),n.perMessageDeflate){var s=&quot;string&quot;==typeof o?Buffer.byteLength(o):o.length;s&lt;n.perMessageDeflate.threshold&amp;&amp;(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h(&quot;websocket closed before onclose event&quot;)}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){&quot;undefined&quot;!=typeof this.ws&amp;&amp;this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?&quot;wss&quot;:&quot;ws&quot;,n=&quot;&quot;;this.port&amp;&amp;(&quot;wss&quot;===e&amp;&amp;443!==Number(this.port)||&quot;ws&quot;===e&amp;&amp;80!==Number(this.port))&amp;&amp;(n=&quot;:&quot;+this.port),this.timestampRequests&amp;&amp;(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&amp;&amp;(t=&quot;?&quot;+t);var r=this.hostname.indexOf(&quot;:&quot;)!==-1;return e+&quot;://&quot;+(r?&quot;[&quot;+this.hostname+&quot;]&quot;:this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||&quot;__initialize&quot;in l&amp;&amp;this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r&lt;t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&amp;&amp;n.query&amp;&amp;(this.query=n.query),this.io.autoConnect&amp;&amp;this.open()}var o=n(7),i=n(11),s=n(40),a=n(41),c=n(42),u=n(3)(&quot;socket.io-client:socket&quot;),p=n(32),h=n(26);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=i.prototype.emit;i(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,&quot;open&quot;,c(this,&quot;onopen&quot;)),a(t,&quot;packet&quot;,c(this,&quot;onpacket&quot;)),a(t,&quot;close&quot;,c(this,&quot;onclose&quot;))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),&quot;open&quot;===this.io.readyState&amp;&amp;this.onopen(),this.emit(&quot;connecting&quot;),this)},r.prototype.send=function(){var t=s(arguments);return t.unshift(&quot;message&quot;),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=s(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?o.BINARY_EVENT:o.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,&quot;function&quot;==typeof e[e.length-1]&amp;&amp;(u(&quot;emitting packet with ack id %d&quot;,this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u(&quot;transport is open - connecting&quot;),&quot;/&quot;!==this.nsp)if(this.query){var t=&quot;object&quot;==typeof this.query?p.encode(this.query):this.query;u(&quot;sending connect packet with query %s&quot;,t),this.packet({type:o.CONNECT,query:t})}else this.packet({type:o.CONNECT})},r.prototype.onclose=function(t){u(&quot;close (%s)&quot;,t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit(&quot;disconnect&quot;,t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===o.ERROR&amp;&amp;&quot;/&quot;===t.nsp;if(e||n)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit(&quot;error&quot;,t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u(&quot;emitting event %j&quot;,e),null!=t.id&amp;&amp;(u(&quot;attaching ack callback to event&quot;),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=s(arguments);u(&quot;sending ack %j&quot;,r),e.packet({type:h(r)?o.BINARY_ACK:o.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];&quot;function&quot;==typeof e?(u(&quot;calling ack %s with %j&quot;,t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u(&quot;bad ack %s&quot;,t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit(&quot;connect&quot;),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t&lt;this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t&lt;this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u(&quot;server disconnect (%s)&quot;,this.nsp),this.destroy(),this.onclose(&quot;io server disconnect&quot;)},r.prototype.destroy=function(){if(this.subs){for(var t=0;t&lt;this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&amp;&amp;(u(&quot;performing disconnect (%s)&quot;,this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&amp;&amp;this.onclose(&quot;io client disconnect&quot;),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r&lt;t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if(&quot;string&quot;==typeof e&amp;&amp;(e=t[e]),&quot;function&quot;!=typeof e)throw new Error(&quot;bind() requires a function&quot;);var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter&gt;0&amp;&amp;t.jitter&lt;=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&amp;Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=socket.io.js.map</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/socketio/socket.io-client/blame/661f1e7fac2488b6d3d206f96bb59073c4c98b1c/dist/socket.io.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/socketio/socket.io-client/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  


  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/socketio/socket.io-client/find-definition"
     data-tagsearch-ref="master"
     data-tagsearch-path="dist/socket.io.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:557977,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/socketio/socket.io-client/blob/master/dist/socket.io.js&quot;,&quot;user_id&quot;:52734507}}"
     data-hydro-click-hmac="a04df8ac200a1784411bcb417d9ae41d2c453cb7d0fca95ac7ea8c4b88003230">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>




  </div>
</div>

    </main>
  </div>

  </div>

        
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://docs.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-bn/3rKJzBl2H64K38R8KaVcT26vKK7BJQC59lwYc+9fjlHzmy0fwh+hzBtsgTdhIi13dxjzNKWhdSN8WTM9qUw==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-6e7ff7ac.js"></script>
    <script crossorigin="anonymous" integrity="sha512-CxjaMepCmi+z0LTeztU2S8qGD25LyHD6j9t0RSPevy63trFWJVwUM6ipAVLgtpMBBgZ53wq8JPkSeQ6ruaZL2w==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-0b18da31.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-qNG6dHHR6Fjppk1MAW2Wi83aW43n9UnpdlyCTMs4Th8tZCnzXmrNdicussOgdWWz+fBEGFggfQT4LnbTDugm8g==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-a8d1ba74.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-MwOFiWexKpAMFmQ1R8v6hGSRpL7x83omQEqm1bArRTfitE/iwmdz68FuRq+tICbWGAlPx1pii5sNwhKne1M7bw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-33038589.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-1dM4oK6pDsTBrlDwOjYXiv6LcMB4imnsvYLE/+k/AdFLIoUA33MkhUGC8s6abCBwySqj6RcVVSV63lAvlkGIWQ==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-bootstrap-d5d338a0.js"></script>
    
      <script crossorigin="anonymous" async="async" integrity="sha512-44qssMj+fXq3KdFy9Xwq1xbyF9+0lUDA4T8YID97FKD+j18CEaDsPGutuPP3frQFBwcikEViAK+3cFq5MzmQCg==" type="application/javascript" data-module-id="./contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/contributions-spider-graph-e38aacb0.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-EOcKJC66ZRh9HbNcX4OaUtWMBVt6SEC3qOFS0QOam5vJQ1OD1sdHNk/Pns/CboOmqzrtBDObn7Cj06879tEsog==" type="application/javascript" data-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-10e70a24.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-Ih1K+uJKIIjmm3N1q1OppWuDEGnElhMbAhGxf9n48DoxomSE7OPAGXNMQ5LB8WalcKjOQZJVUFOX7QrHy2URkA==" type="application/javascript" data-module-id="./jump-to.js" data-src="https://github.githubassets.com/assets/jump-to-221d4afa.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-HzWUeLy0p20M4Lc3+EerTwy/VaH3vMuKLvhFJr0PsJfKXnsD9oy5SfashhxStUirglhYZUB4fLYQRM1uzrFyNg==" type="application/javascript" data-module-id="./profile-pins-element.js" data-src="https://github.githubassets.com/assets/profile-pins-element-1f359478.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-qECv/jhsvLFN77eGNu0cjMR2+zvAlLyhQVTnmayJc5OLZoxMLjQZxZW1hK/dhcYro6Wec/aiF21HYf2N5OilYQ==" type="application/javascript" data-module-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-a840affe.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-vK7rRnsAi4qcmC2HqCfPyEBZgIMWb6Azyb1PJxgL1FtEFMydK//dsnuLdVx+RaPGg71Z58ossFXqkLWgMevvdw==" type="application/javascript" data-module-id="./sortable-behavior.js" data-src="https://github.githubassets.com/assets/sortable-behavior-bcaeeb46.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-mHqsE5aQq7fAmmLd0epHBJK8rn8DOVnjW2YQOT8wvsN1oLrypw0cDFmwXPDwbMghHyo4kKiOtVJ/kEsEzwwibw==" type="application/javascript" data-module-id="./tweetsodium.js" data-src="https://github.githubassets.com/assets/tweetsodium-987aac13.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-+QfOLG8ES1hxkJ+lK3yX/qtYw+eNEa/t8M/3m/q/A9gu+9SJzObmbDEQLv2hiDBYx3OFx9G1a7DrxQtD5cdhEQ==" type="application/javascript" data-module-id="./user-status-submit.js" data-src="https://github.githubassets.com/assets/user-status-submit-f907ce2c.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-xHEP9r2UXQWzkpa1OgHb5mbRzyiMdyQ0YVkxYjr5Xy/lAveQ1elRngSfvFGupKyIQxoMLnvG15ZC4jeus7TAAQ==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-bootstrap-c4710ff6.js"></script>
<script crossorigin="anonymous" async="async" integrity="sha512-fLmwfnkET+1RjTY2z0N13tAGGa2GjZACBr/GBIERRJuQIEKkKDIU5cniUOFbznA814vRvr91uB9UsLk3ujnZjw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-7cb9b07e.js"></script>
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

