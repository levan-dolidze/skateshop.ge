
const trucksList = document.querySelector(".trucksList");

const price = "ფასი";
const statement50= new Statement('Independent Hollow Forged', "./productFotoAll/101large.jpg", "Hollow size: 139 Standard", "", 179, "არჩევა", 0, "IndependentTrucksRed");
const statement51= new Statement('Independent Thrasher Trucks', "./productFotoAll/100large.jpg", "Hollow size: 139 Standard", "", 179, "არჩევა", 0, "IndependentTrucksThrasher");
const statement52= new Statement('Independent Hollow Forged ', "./productFotoAll/102large.jpg", "size:139 Stage 11 matte black ", "", 179, "არჩევა", 0, "IndependentTrucksBlack");
const statementsArrayTrucks = [statement50, statement51, statement52];

// const inCart = document.querySelector('.inCart');
const appendStatementTrucks = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg"  ontouchmove="zoomFunction()" onmousemove ="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>


    </div>`


  trucksList.innerHTML += statementTemplate
  // imageTest.style.backgroundImage = `url(${statement.image})`;


}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatementsTrucks = (statements) => {
  for (const statement of statements) {
    appendStatementTrucks(statement);


  }
}



appendAllStatementsTrucks(statementsArrayTrucks);

function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    trucksList.innerHTML=''
   
  const sortLowToHigh = statementsArrayTrucks.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatementsTrucks(sortLowToHigh)
  addToCartPerfomanceTrucks()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  trucksList.innerHTML=''
  const sortLowToHigh = statementsArrayTrucks.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatementsTrucks(sortLowToHigh)
  addToCartPerfomanceTrucks ()
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

function addToCartPerfomanceTrucks () {


const addToCartBtn = document.querySelectorAll('.addToCartBtn');

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', () => {


    cartNubersTrucks(statementsArrayTrucks[i])
    totalCostTrucksFunction(statementsArrayTrucks[i])
    addUserToTableTrucks(statementsArrayTrucks[i])


  })
}
}
addToCartPerfomanceTrucks()
function onloadCartNumbersTrucks() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersTrucks").textContent = `(${productNumbers})`;
    document.querySelector(".orderTh").textContent = productNumbers;

  }
}


function cartNubersTrucks(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersTrucks").textContent = `(${productNumbers + 1})`


  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersTrucks").textContent = `(${1})`;

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


function onloadCartCostTrucks() {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost) {

    document.querySelector(".totalCostTrucks").textContent = `₾${cartCost}`;

  }
}



const orderTbody = document.querySelector('.orderTable tbody');
const orderTable = document.querySelector('.orderTable');



const addUserToTableTrucks = (product) => {
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



  // let productAmount=document.createElement('td');
  // productAmount.textContent=1

  row.append(productImage, productTitle, productQuantity, productPrice);
  orderTbody.appendChild(row);

}


function totalCostTrucksFunction(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    document.querySelector(".totalCostTrucks").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    document.querySelector(".totalCostTrucks ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersTrucks = document.querySelector('.productNumbersTrucks');
let totalCostTrucks = document.querySelector('.totalCostTrucks');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersTrucks.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostTrucks.textContent = `₾ ${cartCost}`;

function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersTrucks.textContent = `(${0})`;
    totalCostTrucks.textContent = `₾ ${0}`;

  })
}

clearCart();
onloadCartCostTrucks();
onloadCartNumbersTrucks();















