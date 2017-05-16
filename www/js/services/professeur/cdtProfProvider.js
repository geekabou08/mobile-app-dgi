'use strict';
var serveur = "localhost";
var port = "3000";

app.service('cdtProfProvider',function ($http) {
  this.getData=function(id,callback){
    var url ="http://"+serveur+":"+port+"/cahierdetexte/cours/"+id;
    var req ={
      method: 'GET',
      url: url,
      cache :false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache'
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

  this.getClasse=function(id,callback) {
    var url = "http://" + serveur + ":" + port + "/classe/infos/" + id;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache'
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
  this.getActivite=function(id,callback){
    var url = "http://" + serveur + ":" + port + "/cahierdetexte/activite/"+id;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache'
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
  this.validerActivite=function (id,callback) {
    var url = "http://" + serveur + ":" + port + "/cahierdetexte/valid/"+id;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache'
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
});
