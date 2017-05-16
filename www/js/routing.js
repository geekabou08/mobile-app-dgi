'use strict';
var cache = false;
app.config(function($stateProvider){
  $stateProvider
  .state('accueil', {
      url: '/',
      cache: cache,
      templateUrl: 'js/views/accueil/index.html',
      controller :'accueilCtrl'
  })
  .state('about', {
    url: '/about',
    cache: cache,
    templateUrl: 'js/views/accueil/apropos.html',
    controller :'aboutCtrl'
  })

    //Partie Professeur
    .state('menuProf', {
    url: '/professeur',
    abstract: true,
    cache:cache,
    templateUrl: 'js/views/professeur/menu.html',
    controller: 'menuprofCtrl'
  })

    .state('menuProf.accueil', {
      url: '/accueilProf',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/professeur/index.html',
          controller :'professeurCtrl'
        }
      }
    })
    .state('menuProf.absence', {
      url: '/absence',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/professeur/absence.html',
          controller :'absenceCtrl'
        }
      }
    })
    .state('menuProf.edt', {
      url: '/edt',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/professeur/saisiredt.html',
          controller :'edtCtrl'
        }
      }
    })
    .state('menuProf.infos', {
      url: '/news',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/infos/post.html',
          controller :'infoCtrl'
        }
      }
    })
    .state('menuProf.info', {
      url: '/post/:id',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/infos/publication.html',
          controller :'publicationCtrl'
        }
      }
    })
    .state('menuProf.cdt', {
    url: '/cahierdetexte',
    cache: cache,
    views:{
      'menuContent': {
        templateUrl: 'js/views/professeur/cdt.html',
        controller : 'cdtProfCtrl'
      }
    }
  })
    .state('menuProf.activite', {
      url: '/cahierdetexte/activite/:id',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/professeur/activite.html',
          controller : 'activiteCtrl'
        }
      }
    })

    //Partie ETUDIANT
    .state('menuEtudiant', {
      url: '/etudiant',
      abstract: true,
      cache:cache,
      templateUrl: 'js/views/etudiant/menu.html',
      controller: 'menuetuCtrl'
    })
    .state('menuEtudiant.accueil', {
      url: '/accueilEtu',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/etudiant/index.html',
          controller :'etudiantCtrl'
        }
      }
    })
    .state('menuEtudiant.infos', {
      url: '/news',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/infos/post.html',
          controller :'infoCtrl'
        }
      }
    })
     .state('menuEtudiant.info', {
      url: '/post/:id',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/infos/publication.html',
          controller :'publicationCtrl'
        }
      }
    })

    .state('menuEtudiant.cdt', {
      url: '/cahierdetexte',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/etudiant/cahierdetexte/accueilcdt.html',
          controller :'cdtCtrl'
        }
      }
    })
    /*.state('menuEtudiant.mesinfos', {
      url: '/mesinfos',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/etudiant/afficheprofil.html',
          controller :'etudiantCtrl'
        }
      }
    })*/
    .state('menuEtudiant.postercdt', {
      url: '/cahierdetexte/poster',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/etudiant/cahierdetexte/cdt.html',
          controller :'cdtCtrl'
        }
      }
    })
    .state('menuEtudiant.lirecdt', {
      url: '/cahierdetexte/lire',
      cache: cache,
      views:{
        'menuContent': {
          templateUrl: 'js/views/etudiant/cahierdetexte/lirecdt.html',
          controller :'cdtCtrl'
        }
      }
    })
});
