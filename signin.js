

  var firebaseConfig = {
    apiKey: "AIzaSyBAXmha2rwi2Maih59GYu1lhGH5I4Na00c",
    authDomain: "signin-3365a.firebaseapp.com",
    databaseURL: "https://signin-3365a.firebaseio.com",
    projectId: "signin-3365a",
    storageBucket: "signin-3365a.appspot.com",
    messagingSenderId: "554515064041",
    appId: "1:554515064041:web:4bc20cac00678a3be1fc78",
    measurementId: "G-10J5H1W6V9"
  };

  firebase.initializeApp(firebaseConfig);


  const auth=firebase.auth();


  function signUp(){
      var email=document.getElementById('email');
      var password=document.getElementById('password');
      const  promise=auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));
      alert('signed up')
  }


  function signIn(){
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    const  promise=auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
}


function signOut(){
    auth.signOut()
    alert('signed')
}


auth.onAuthStateChanged(function(user){
if(user){
    var email=user.email;
    alert('welcome to skateshop');
    
} 
else{
alert('email or password is not corect')
};

});
