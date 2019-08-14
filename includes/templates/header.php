<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald|PT+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/colorbox.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />

  <?php
  $archivo = basename($_SERVER['PHP_SELF']);
  $pagina = str_replace(".php","", $archivo);
  if($pagina == 'invitados' || $pagina == 'index'){
    echo '<link rel="stylesheet" href="css/colorbox.css">';
    echo '<script src="js/jquery.waypoints.min.js"></script>';
  } else if($pagina == 'conferencia'){
    echo '<link rel="stylesheet" href="css/lightbox.css">';
  }
  ?> 
  <link rel="stylesheet" href="css/main.css">
  <meta name="theme-color" content="#fafafa">
</head>

<body class="<?php echo $pagina; ?>">
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
  <header class="site-header">
      <div class="hero">
        <div class="contenido-header">
             <nav class="redes-sociales">
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-pinterest"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
             </nav>
             <div class="informacion-evento">
               <div class="clearfix">
                <p class="fecha"><i class="fas fa-calendar-alt"></i> 10-12 AGO</p>
                <p class="ciudad"><i class="fas fa-map-marker-alt"></i> Cali, CO</p>
               </div>
              
               <h1 class="nombre-sitio">GdlWebCamp</h1>
               <p class="slogan">La mejor conferencia de <span>diseño web</span> </p>
             </div><!--informacion-evento-->
             
        </div>

      </div><!--Hero-->


  </header>

  <div class="barra">
    <div class="contenedor clearfix">
      <div class="logo">
        <a href="index.php">
        <img src="img/logo.svg" alt="logo gdlwebcamp">
        </a>
      </div>
      <div  class="menu-movil">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="navegacion-principal clearfix" >
        <a href="conferencia.php">Conferencia</a>
        <a href="calendario.php">Calendario</a>
        <a href="invitados.php">Invitados</a>
        <a href="registro.php">Reservaciones</a>
         
      </nav>

    </div><!--contenedor-->

  </div><!--barra-->