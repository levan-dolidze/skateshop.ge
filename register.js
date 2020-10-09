let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'element1',
        tag:'skate1',
        price:15,
        inCart:0
    },
    {
        name:'flip',
        tag:'skate2',
        price:20,
        inCart:0
    },
    {
        name:'element2',
        tag:'skate3',
        price:25,
        inCart:0
    },
    {
        name:'zero',
        tag:'skate4',
        price:30,
        inCart:0
    }

];


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;

    }
}

function cartNumbers(product) {
    
    let productNumbers=localStorage.getItem('cartNumbers');
   
    productNumbers=parseInt(productNumbers);
    if(productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }

    setItems(product);
    }

function setItems(product){
  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems)

if(cartItems !=null){
    if(cartItems[product.tag] ==undefined){
        cartItems={
            ...cartItems,
            [product.tag]:product
        }
    }
    cartItems[product.tag].inCart+=1;
}
else{
    product.inCart=1;

cartItems={
    
    [product.tag]: product
}
}

localStorage.setItem('productsInCart',JSON.stringify (cartItems));

    }

function totalCost(product){
// console.log('the product is',product.price)
let cartCost=localStorage.getItem('totalCost');
console.log('my cart cost is',cartCost);
console.log(typeof cartCost);


if (cartCost!=null){
cartCost=parseInt(cartCost);
localStorage.setItem('totalCost',cartCost+product.price);
} else{
    localStorage.setItem('totalCost',product.price);
}

}

function displayCart(){
let cartItems=localStorage.getItem('productsInCart');
cartItems=JSON.parse(cartItems);
let productContainer=document.querySelector('.products');

let cartCost=localStorage.getItem('totalCost');


console.log(cartItems);
if(cartItems && productContainer){
  productContainer.innerHTML='';
  Object.values(cartItems).map(item=>{
      productContainer.innerHTML+=`
      <div class='product'>
      <i class="fa fa-times-circle" aria-hidden="true"></i>
          <img src='./images/${item.tag}.jpg'>
          <span> ${item.name}</span>
      </div>
      <div class='price'>GEL${item.price},00 </div> 
  
      <div class='quantity'>
      <i class="fa fa-minus-circle" aria-hidden="true"></i>
      
     
      <span>${item.inCart}</span>
      
      <i class="fa fa-plus-circle" aria-hidden="true"></i>
     
      <div class='total'>
      GEL${item.inCart * item.price},00

      </div>
      `;
  });


  productContainer.innerHTML+=`
  <div class="basketTotalContainer">
  <h4 class="basketTotalTitle">
 Total </h4>:
  </h4 class="basketTotal">
GEL ${cartCost}
  `
}

}
    onLoadCartNumbers();
    
    displayCart()



    
  

      var firebaseConfig = {
        apiKey: "AIzaSyCH9AotksOFdjhw81vVg8hedE33MgLWcco",
        authDomain: "register-48c54.firebaseapp.com",
        databaseURL: "https://register-48c54.firebaseio.com",
        projectId: "register-48c54",
        storageBucket: "register-48c54.appspot.com",
        messagingSenderId: "451738023139",
        appId: "1:451738023139:web:a8ed6caed059b4b1b201d6"
      };
     
      firebase.initializeApp(firebaseConfig);
  

const auth=firebase.auth();





firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
   document.getElementById('user_div').style.display='block';
   document.getElementById('login_div').style.display='none';
    } else {
        document.getElementById('user_div').style.display='none';
        document.getElementById('login_div').style.display='block';
    }
  });

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert('error')
    // ...
  });







function signUp(){
  var userEmail =document.getElementById('emailid').value;
  var userPassword=document.getElementById('pwdid').value;
  window.alert(userEmail+userPassword)

}







  function passvalue()
  {
      var firstN=document.getElementById("nameid").value;
      localStorage.setItem("textvalue",firstN);
      return false;
      
  }



