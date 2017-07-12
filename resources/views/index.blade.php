<!DOCTYPE html>
<html ng-app="l0ne">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Satellizer</title>
    <link href="favicon.png" rel="shortcut icon">
    <link href="//fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Open+Sans:400,300,600" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="//cdn.jsdelivr.net/animatecss/3.2.0/animate.css" rel="stylesheet">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

    <link href="{{mix('css/app.css')}}" rel="stylesheet">
    <link href="{{url('css/angular-toastr.css')}}" rel="stylesheet">


</head>
<body>

<div ng-controller="NavbarController" class="navbar navbar-default navbar-static-top">

    <div class="navbar-header">
        <a class="navbar-brand" href="/"><i class="ion-ios7-pulse-strong"></i> l0ne</a>
    </div>
    <ul class="nav navbar-nav">
        <li><a href="/#/">Homepage</a></li>
        <li ng-if="isAuthenticated()"><a href="/#/profile">Profile Settings</a></li>
        <li ng-if="isAuthenticated()"><a href="/#/panel">Panel</a></li>
    </ul>
    <ul ng-if="!isAuthenticated()" class="nav navbar-nav pull-right">
        <li><a href="/#/login">Login</a></li>
        <li><a href="/#/signup">Sign up</a></li>
    </ul>
    <ul ng-if="isAuthenticated()" class="nav navbar-nav pull-right">
        <li><a href="/#/logout">Logout</a></li>
    </ul>
</div>
<ui-view></ui-view>

<script src="{{mix('js/vendor.js')}}"></script>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>