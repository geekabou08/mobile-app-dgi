'use strict';

var server = "localhost";
var port = "3000";

app.service('accueilProvider',function ($http) {

  this.connexion = function (user,callback) {
    var url ="http://"+server+":"+port+"/connexion";
    var req ={
      method: 'POST',
      url: url,
      cache :false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache',
      },
      data:{'login': user.login,'password':user.password,'statut':user.statut}
    };
    $http(req)
      .success(function(response) {
        callback(response);
      })
      .error(function (response) {
        callback(response);
      })
  };

  });


