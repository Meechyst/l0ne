<!DOCTYPE html>
<html ng-app="doto" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>L0ne | Unsocial Network</title>
    <link href="favicon.png" rel="shortcut icon">
    <link href="//fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Open+Sans:400,300,600" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

    <link href="{{url('css/app.2b3eb5b149c10b551042.css')}}" rel="stylesheet">
    <link href="{{url('css/angular-toastr.css')}}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>
<div ui-view="top"></div>
<div class="container">
    <div ui-view="content"></div>
</div>
<script src="{{mix('js/vendor.js')}}"></script>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
