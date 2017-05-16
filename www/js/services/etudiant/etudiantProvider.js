'use strict';

var serveur = "localhost";
var port = "3000";
app
  .service('cdtProvider',function ($http) {
    this.getCours=function(callback) {
      var url ="http://"+serveur+":"+port+"/cours";
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
    this.ecrireCDT=function(cdt,callback){
        var url="http://"+serveur+":"+port+"/cahierdetexte";
        var req = {
          method: 'POST',
          url: url,
          cache: false,
          headers: {
            'Accept': 'Application/json',
            'Cache-Controle': 'no-cache',
          },
          data: {
            'horaire':cdt.horaire,
            'id_classe': cdt.id_classe,
            'id_cours':cdt.cours,
            'activite':cdt.activite,
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
