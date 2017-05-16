'use strict';

app
  .controller('professeurCtrl',function () {

  })

  .controller('menuprofCtrl',function ($scope,$rootScope,$ionicModal,$location) {
    if ($rootScope.userlogged.resp_peda) {
      $scope.resp_peda=true;
    }
    $ionicModal.fromTemplateUrl('js/views/professeur/profil.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeProfil = function() {
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
  })
  .controller('absenceCtrl',function ($scope,absenceProvider,$location,$filter) {
    $scope.validerClasse= function (classe) {
      absenceProvider.getListClasse(classe,function (response) {
        if(response.status=='succes'){
          $scope.listeClasse=$filter('orderBy')(response.liste,'nom');
        }
      })
    }
    $scope.absence = function (etudiant,cours) {
      absenceProvider.ajouterAbsence(etudiant,cours,function (response) {
        if(response.status=='succes'){
          var bouton=etudiant.login;
          $scope[bouton]={'name':etudiant.login};

        }
      })
    };
    $scope.finAbsence=function () {
      $scope.listeClasse=null;
      $location.path('/professeur/accueilProf');
    }
  })
  .controller('edtCtrl',function ($scope,edtProvider) {
    var ajouterCours=function (cours,heure) {
      edtProvider.ajouterCours(cours,heure,function (response) {

      });
    }

  })
  .controller('cdtProfCtrl',function ($scope,cdtProfProvider,$filter) {
    $scope.envoyer = function(id){
      cdtProfProvider.getData(id,function (response) {
        if(response.status =='echec'){
          console.log('Pas de donnees enregistree pour ce cours!!!!');
        }
        else{
          $scope.data=$filter('orderBy')(response.data,'-id');
        }
      })
    }
  })
  .controller('activiteCtrl',function($scope,$stateParams,cdtProfProvider,$location,$ionicPopup,$timeout){
    cdtProfProvider.getActivite($stateParams.id,function (response) {
      if(response.status=="succes"){
        console.log(response.activite);
        $scope.activite=response.activite;
        cdtProfProvider.getClasse(response.activite.classe_id,function (response) {
          if(response.status==='succes'){
            $scope.classe=response.classe;
          }
        });
        var datepub=new Date(response.activite.date);
        var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        var date={
          day:datepub.getDate(),
          month:months[datepub.getMonth()],
          year:datepub.getFullYear()
        };
        $scope.date=date;
      }
    })
    $scope.validerActivite=function (id) {
        cdtProfProvider.validerActivite(id,function (response) {
          if(response.status=="succes"){
            $ionicPopup.alert({
              title: 'Message',
              template: response.message
            });
            $timeout(function () {
                $location.path('/professeur/cahierdetexte');
            },1000);

          }
          else{
            $ionicPopup.alert({
            title: 'Erreur',
            template: 'Erreur!!!'
          });
          }
        })
    }
  })
;
