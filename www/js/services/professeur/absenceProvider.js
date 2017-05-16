'use strict';

var serveur = "localhost";
var port = "3000";
//Recuperer la liste d'une classe
app.service('absenceProvider',function ($http) {
  this.getListClasse =function (classe,callback) {
  var url ="http://"+serveur+":"+port+"/classe/"+classe;
  var req ={
    method: 'GET',
    url: url,
    cache :false,
    headers: {
      'Accept':'Application/json',
      'Cache-Controle':'no-cache',
    }
  };
  $http(req)
    .success(function(response) {
      callback(response);
    })
    .error(function (response) {
      callback(response);
    })
}
//Ajouter une absence sur la base de donnée
  this.ajouterAbsence = function(etudiant,cours,callback){
    var url="http://"+server+":"+port+"/absence"
    var req={
      method:'POST',
      url:url,
      cache:false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache',
      },
      data:{
        'nom_etu':etudiant.nom,
        'prenom_etu':etudiant.prenom,
        'classe_etu':etudiant.classe,
        'nom_cours':cours
      }
    };
    $http(req)
      .success(function(response) {
        callback(response);
      })
      .error(function (response) {
        callback(response);
      })
  }
});
