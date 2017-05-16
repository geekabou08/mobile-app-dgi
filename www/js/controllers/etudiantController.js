'use strict';
app
  .controller('etudiantCtrl',function () {

  })
  .controller('menuetuCtrl',function ($scope,$rootScope,$ionicModal,$location) {
    if ($rootScope.userlogged.responsable) {
      $scope.responsable=true;
    }
    $ionicModal.fromTemplateUrl('js/views/etudiant/profil.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeProfil = function(modal) {
      $scope.modal.hide();

    };

    // Open the login modal
    $scope.profil = function() {
      $scope.modal.show();
    };
    $scope.deconnexion=function () {
      $rootScope.userlogged=null;
      $rootScope.user=null
      $scope.modal.hide();
      $location.path('/')
    }
    $ionicModal.fromTemplateUrl('js/views/etudiant/afficheprofil.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.mesinfos = modal;
    });
    $scope.afficheinfos = function() {
      $scope.mesinfos.show();
    };
    $ionicModal.fromTemplateUrl('js/views/etudiant/changermdp.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.changermdp = modal;
    });
    $scope.changepwd = function() {
      $scope.changermdp.show();
    };
    $scope.close=function () {
      $scope.mesinfos.hide();
      $scope.changermdp.hide();
    }
  })
  .controller('cdtCtrl',function($scope,cdtProvider,$rootScope,$ionicPopup,$location){
    cdtProvider.getCours(function (response) {
      if(response.status=='succes'){
        $scope.cours=response.data;
      }
    });
    $scope.ecrireCDT=function(cdt){
      console.log(cdt);
      cdt.id_classe=$rootScope.userlogged.classe_id;
      cdtProvider.ecrireCDT(cdt,function (response) {
          if(response.status=='succes'){
            $ionicPopup.alert({
              title: 'Message',
              template: response.message
            });
            cdt=null;
          }
          else{
            $ionicPopup.alert({
              title: 'Message',
              template: "Impossible d'ecrire ce cours"
            });
          }
      })
    }
  })
;
