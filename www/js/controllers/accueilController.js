'use strict';

app
  .controller('accueilCtrl',function ($scope,$rootScope,accueilProvider,$ionicPopup,$timeout,$location) {
    $scope.connexion = function(user){
      accueilProvider.connexion(user,function (response) {
        if(response.status == "echec"){
          // ici mettre une notification qu'une erreur est survenue
          $ionicPopup.alert({
            title: 'Notice',
            template: 'Vérifier votre login et mot de passe'
          });

        }else{
          $rootScope.userlogged = response.user;
          $rootScope.idLogin=response.idLogin
          $rootScope.user=user;
          // faire appres une redirection
          $timeout(function() {
            if(user.statut=="professeur"){
              $rootScope.cours = response.cours;
              $location.path('/professeur/accueilProf');}
            else{
                $location.path('/etudiant/accueilEtu');}
        }
          , 1000);
        }
      })
    }
})
  .controller('aboutCtrl',function () {

  })
