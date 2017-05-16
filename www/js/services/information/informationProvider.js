'use strict';
var serveur = "localhost";
var port = "3000";

app
  .service('infoProvider',function($http) {
    this.poster = function (post,poster, callback) {
      var url = 'http://' + serveur + ':' + port + '/publication'
      var req = {
        method: 'POST',
        url: url,
        cache: false,
        headers: {
          'Accept': 'Application/json',
          'Cache-Controle': 'no-cache',
        },
        data: {
          'titre': post.titre,
          'contenu': post.publication,
          'id_publicateur': post.id_publicateur,
          'portee': post.portee,
          'nom_publicateur': poster.nom,
          'prenom_publicateur':poster.prenom
        }
      };
      $http(req)
        .success(function (response) {
          callback(response);
        })
        .error(function (response) {
          callback(response);
        })
    }
    this.getPosts = function (callback) {
      var url = "http://" + serveur + ":" + port + "/posts";
      var req = {
        method: 'GET',
        url: url,
        cache: false,
        headers: {
          'Accept': 'Application/json',
          'Cache-Controle': 'no-cache',
        }
      };
      $http(req)
        .success(function (response) {
          callback(response);
        })
        .error(function (response) {
          callback(response);
        })
    }
    

  })
  .service('publicationProvider',function($http){
    this.getPost=function (id,callback) {
      var url ="http://"+serveur+":"+port+"/post/"+id;
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
})
  ;
