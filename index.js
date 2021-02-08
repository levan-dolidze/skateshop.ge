const productHeader=document.querySelector(".product-header")
let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'BAKER',
        tag:'001small',
        price:249 ,
        inCart:0,
        code:"001"
    },
    // {
    //     name:'BAKER',
    //     tag:'002small',
    //     price:249,
    //     inCart:0,
    //     code:"002"
    // },
    {
        name:'Rowan BAKER Pro Deck+Griptape ',
        tag:'504small',
        price:230,
        inCart:0,
        code:"504"
    },
    {
        name:'BAKER',
        tag:'004small',
        price:249,
        inCart:0,
        code:"004"
    },
    {
        name:'FLIP',
        tag:'005small',
        price:249,
        inCart:0,
        code:"005"
    },
    {
        name:'flip deck+griptape',
        tag:'501small',
        price:199,
        inCart:0,
        code:"501"
    },
    {
        name:'FLIP',
        tag:'007small',
        price:249,
        inCart:0,
        code:"007"
    },
    {
        name:'flip deck+griptape',
        tag:'500small',
        price:199,
        inCart:0,
        code:"500"
    },
    {
        name:'GIRL',
        tag:'009small',
        price:249,
        inCart:0,
        code:"009"
    }
    

];


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        onLoadCartTotal()
    });
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;

    }
}

let clearButton=document.getElementById("clearButton");
function clearItems (){

    clearButton.addEventListener("click",()=>{
      
        if(clearButton){
        
            document.querySelector('.cart span').textContent=0;
            document.querySelector('.cart #totalSpan').textContent=0;
            // document.querySelector(".product-header").textContent=""
            localStorage.clear()
           
        }
        
    })
}

clearItems ()



function onLoadCartTotal(){
    let totalCost=localStorage.getItem('totalCost');
    if(totalCost){
        document.querySelector('.cart #totalSpan',).textContent=totalCost;

    }
}


// es shveba
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


    // es shvebaa

function totalCost(product){

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
 
          <img src='./images/${item.tag}.jpg'>
          <span>  ${item.name}</span>
          <span> / code-  ${item.code}</span>
          <span> / ფასი -  ${item.price} ₾ </span>
      </div>
     
      <div class='quantity'>
    
      (<i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <ion-icon name='basket'></ion-icon><span > ${item.inCart}</span> )
     /
      <div class='total'>
      GEL${item.inCart * item.price},00

      </div>
      `;
  });


  productContainer.innerHTML+=`
  <div class="basketTotalContainer">
  <h5 class="basketTotalTitle"> 
  ჯამი: </h5 class="basketTotal"> ${cartCost} ₾
  </h5>

  `
 
  clearButton.addEventListener("click",()=>{
    productContainer.innerHTML=''
  })

}

}
    onLoadCartNumbers();
    onLoadCartTotal();
    displayCart();
    clearItems();


    