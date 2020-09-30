var mainApp={};

(function(){
    var firebase=app_fireBase;
    var uid=null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
       uid.user.uid
        } else{
            window.location.replace('login.html');
            uid=null;
        }
      });

      function logOut(){
          firebase.auth().signOut();
          localStorage.clear();
          
      }

mainApp.logOut=logOut;


})();