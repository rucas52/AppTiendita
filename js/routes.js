angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('inicio', {
    url: '/page10',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('menu.productos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productos.html',
        controller: 'productosCtrl'
      }
    }
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.actualizaTusDatos', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actualizaTusDatos.html',
        controller: 'actualizaTusDatosCtrl'
      }
    }
  })

  .state('menu.registrarse', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarse.html',
        controller: 'registrarseCtrl'
      }
    }
  })

  .state('menu.cambiarContraseA', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambiarContraseA.html',
        controller: 'cambiarContraseACtrl'
      }
    }
  })

  .state('menu.ediciNDeProducto', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ediciNDeProducto.html',
        controller: 'ediciNDeProductoCtrl'
      }
    }
  })

  .state('crearProducto', {
    url: '/page13',
    templateUrl: 'templates/crearProducto.html',
    controller: 'crearProductoCtrl'
  })

  .state('menu.detalleDeProducto', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalleDeProducto.html',
        controller: 'detalleDeProductoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page10')

  

});