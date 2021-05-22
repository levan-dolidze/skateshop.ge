const wheelsList = document.querySelector('.wheelsList');

const price = "ფასი";
const statement30= new Statement('Spitfire Formula Four ', "./productFotoAll/200large.jpg", "size:53mm ", "", 119, "არჩევა", 0, "spitfireBlue53");
const statement31= new Statement('Spitfire Formula Four ', "./productFotoAll/202large.jpg", "Lacey Baker size:51mm ", "", 119, "არჩევა", 0, "spitfireBaker51");
const statement32= new Statement('Spitfire Formula Four ', "./productFotoAll/203large.jpg", "red size:53mm ", "", 119, "არჩევა", 0, "spitfirered53");
const statement33= new Statement('Spitfire Formula Four ', "./productFotoAll/204large.jpg", " size:52mm ", "", 119, "არჩევა", 0, "spitfireBlue52");
const statement34= new Statement('Spitfire Formula Four ', "./productFotoAll/205large.png", " size:52mm ", "", 119, "არჩევა", 0, "spitfireColorfull52");


const statementsArrayWheels = [statement30, statement31,statement32,statement33,statement34];


const appendStatementWheels = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg"  ontouchmove="zoomFunction()" onmousemove ="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>
  
    </div>`


  wheelsList.innerHTML += statementTemplate



}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatementsWheels = (statements) => {
  for (const statement of statements) {
    appendStatementWheels(statement);


  }
}


appendAllStatementsWheels(statementsArrayWheels);

function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    wheelsList.innerHTML=''
   
  const sortLowToHigh = statementsArrayWheels.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatementsWheels(sortLowToHigh)
  addToCartPerfomanceWheels()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  wheelsList.innerHTML=''
  const sortLowToHigh = statementsArrayWheels.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatementsWheels(sortLowToHigh)
  addToCartPerfomanceWheels()
}




}




//zoom function
function zoomFunction() {
  document.querySelectorAll('.statementImg').forEach(item => {
    item.addEventListener('mousemove', function (e) {
      let width = item.offsetWidth;
      let height = item.offsetHeight;
      let mouseX = e.offsetX;
      let mouseY = e.offsetY;
      let bgPosX = (mouseX / width * 100);
      let bgPosY = (mouseY / height * 100);
      item.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;

    });
    zoomFunctionleave()
  })
}


function zoomFunctionleave() {
  document.querySelectorAll('.statementImg').forEach(item => {
    item.addEventListener('mouseleave', function (e) {
      item.style.backgroundPosition = "center";

    });
  })
}




// add to cart function 

function addToCartPerfomanceWheels() {


const addToCartBtn = document.querySelectorAll('.addToCartBtn');

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', () => {


    cartNubersWheels(statementsArrayWheels[i])
    totalCostwheelsFunction(statementsArrayWheels[i])
    addUserToTableWheels(statementsArrayWheels[i])


  })
}
}
addToCartPerfomanceWheels()
function onloadCartNumbersDecks() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersWheels").textContent = `(${productNumbers})`;
    // document.querySelector(".orderTh").textContent=productNumbers;

  }
}


function cartNubersWheels(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersWheels").textContent = `(${productNumbers + 1})`


  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersWheels").textContent = `(${1})`;

  }
  setItems(product)

}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }


  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

////////////////////////


function onloadCartCostDecks() {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost) {

    document.querySelector(".totalCostWheels").textContent = `₾${cartCost}`;

  }
}



const orderTbody = document.querySelector('.orderTable tbody');




const addUserToTableWheels = (product) => {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)

  let row = document.createElement('tr');
  row.classList.add('borderMaker')

  let productImage = document.createElement('IMG');
  productImage.setAttribute('src', product.image);
  productImage.style.width = "100px";
  productImage.style.height = "100px";
  productImage.style.padding = "5px";

  let productTitle = document.createElement('td');
  productTitle.textContent = product.title

  let productQuantity = document.createElement('td');
  // productQuantity.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOauC9pxePcgoqTQL-cnuhUL4qMnOnkMLRw&usqp=CAU" )
  // productQuantity.style.width="30px";
  // productQuantity.style.padding="5px";
  productQuantity.textContent = cartItems[product.tag].inCart
  productQuantity.addEventListener('click', function () {
    productQuantity.textContent = cartItems[product.tag].inCart++
    productPrice.textContent = cartItems[product.tag].price * cartItems[product.tag].inCart

  })


  let productPrice = document.createElement('td');

  productPrice.textContent = cartItems[product.tag].price





  row.append(productImage, productTitle, productQuantity, productPrice);
  orderTbody.appendChild(row);

}


function totalCostwheelsFunction(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    document.querySelector(".totalCostWheels").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    document.querySelector(".totalCostWheels ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersWheels = document.querySelector('.productNumbersWheels');
let totalCostWheels = document.querySelector('.totalCostWheels');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersWheels.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostWheels.textContent = `₾ ${cartCost}`;

function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersWheels.textContent = `(${0})`;
    totalCostWheels.textContent = `₾ ${0}`;

  })
}

clearCart()
onloadCartCostDecks();
onloadCartNumbersDecks();