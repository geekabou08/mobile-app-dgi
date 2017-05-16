'use strict';

app
.controller('infoCtrl',function ($scope,$rootScope,infoProvider,$ionicPopup,$filter) {
  //Recuperation des informations
  var getInfos=function(){
    infoProvider.getPosts(function (response) {
      $scope.posts=$filter('orderBy')(response.posts,'-id');
      //console.log(posts);
    });
  }
  getInfos()


  //Poster une information
  $scope.poster=function(pub){
    var poster={
      'nom':$rootScope.userlogged.nom,
      'prenom':$rootScope.userlogged.prenom
    };
    var envoyer = true;
    if (pub.titre!=null && pub.publication!=null){
      pub.id_publicateur= $rootScope.idLogin;
      if ($rootScope.user.statut=='professeur'){
        pub.portee="public";
      }
      else if($rootScope.user.statut="etudiant" && !$rootScope.userlogged.responsable){
        pub.portee=$rootScope.userlogged.classe;
      }
      else{
        if (pub.portee==null){
          envoyer=false;
          $ionicPopup.alert({
            title: 'Avertissement',
            template: 'Veuillez choisir la destination (portée) du post.'
          });
        }
      }
    }
   else {
      envoyer=false;
      $ionicPopup.alert({
        title: 'Avertissement',
        template: 'Veuillez remplir toutes les informations.'
      });

    }
    if(envoyer){
      infoProvider.poster(pub,poster,function (response) {
        if(response.status == "echec"){
          // ici mettre une notification qu'une erreur est survenue
          $ionicPopup.alert({
            title: 'Notice',
            template: 'Imposible de poster.\n Veuillez reéssayer utlterieurement.'
          });
        }else{
          $ionicPopup.alert({
            title: 'Notice',
            template: 'Publication postée.'
          });
          pub.titre='';
          pub.publication='';
          pub.portee=null;
          pub.id_publicateur='';
          getInfos()
        }
      })
    }
  }
})
.controller('publicationCtrl',function($scope,$stateParams,publicationProvider){
  $scope.idpage=$stateParams.id;
  publicationProvider.getPost($stateParams.id,function(response){
    if (response.status=='succes'){
      var datepub=new Date(response.post.date_publication);
      var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
     var date={
        day:datepub.getDate(),
        month:months[datepub.getMonth()],
        year:datepub.getFullYear()
      };
      $scope.date=date;
      $scope.publication=response.post;
    }
  });
})
;
