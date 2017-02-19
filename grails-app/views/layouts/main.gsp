<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><g:layoutTitle default="itims"/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="${assetPath(src: 'deerwalklogo.png')}" type="image/x-icon">
    <link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
    <link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
    <asset:stylesheet src="application.css"/>
    <asset:javascript src="application.js"/>
    <link href="${resource(dir: 'media/css',file: 'jquery.dataTables.min.css')}" rel="stylesheet"  type="text/css">
    <link href="${resource(dir: 'bootstrap/css',file: 'bootstrap.min.css')}" rel="stylesheet"  type="text/css">
    <script src="${resource(dir: 'media/js',file: 'jquery.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'media/js',file: 'jquery.dataTables.min.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'bootstrap/js',file: 'bootstrap.min.js')}" type="text/javascript"></script>
    <g:layoutHead/>
</head>
<body class="container">
<div id="grailsLogo" role="banner" style="height: 50px;background: #28648e">
    <img src="${assetPath(src: 'deerwalklogo.png')}" style="width: 135px;float: left;">
    <g:link controller="home" action="index" style="float: left;color:white">Home</g:link>
    <sec:ifLoggedIn>
        <g:link style="float: right;color: #ffffff" controller="logout" action="index">Logout</g:link>
        <p style="float: right;color: #ffffff;display: inline-block">Welcome ${sec.loggedInUserInfo(field: 'username').capitalize()}</p>
    </sec:ifLoggedIn>
</div>
<hr>
<g:layoutBody/>
<div class="footer" role="contentinfo"
     style="color: #ffffff;background: #28648e; text-align: center">&copy itims 2016</div>
<div id="spinner" class="spinner" style="display:none;"><g:message code="spinner.alt" default="Loading&hellip;"/></div>

</body>
</html>
