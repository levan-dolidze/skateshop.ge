let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'BAKER',
        tag:'001small',
        price:249 ,
        inCart:0,
        code:"001"
    },
    
    {
        name:'BAKER ',
        tag:'002small',
        price:249 ,
        inCart:0,
        code:"002"
    },
    {
        name:'BAKER Howan',
        tag:'003small',
        price:249 ,
        inCart:0,
        code:"003"
    },
    {
        name:'BAKER Raynolds',
        tag:'004small',
        price:249 ,
        inCart:0,
        code:"004"
    },
    {
        name:'FLIP Tommy Penny',
        tag:'005small',
        price:249 ,
        inCart:0,
        code:"005"
    },
    {
        name:'FLIP ',
        tag:'006small',
        price:249 ,
        inCart:0,
        code:"006",
    },
    {
        name:'FLIP ',
        tag:'007small',
        price:249 ,
        inCart:0,
        code:"007"
    },
    {
        name:'FLIP ',
        tag:'008small',
        price:249 ,
        inCart:0,
        code:"008"
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
            document.querySelector('.cart span').textContent=0
            document.querySelector('.cart #totalSpan',).textContent=0;
            localStorage.clear()
           
        }
      
    })
}
clearItems()



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
  </h4 class="basketTotal"> GEL ${cartCost}

  `

  
}

}
    onLoadCartNumbers();
    onLoadCartTotal();
    displayCart();
    clearItems();