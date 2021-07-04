const completeList = document.querySelector('.completeList');

const price = "ფასი";

const statement30 = new Completes('Complete', "./productFotoAll/complete001.png", "deck:8.0x31.75/wheel:52mm/trucks:139", "", 549, "არჩევა", 0, "complete001");
const statement31 = new Completes('Complete', "./productFotoAll/complete002.png", "deck:8.125x31.75/wheel:53mm/trucks:139", "", 549, "არჩევა", 0, "complete002");
const statement32 = new Completes('Complete', "./productFotoAll/complete003.png", "deck:8.125x31.75/wheel:52mm/trucks:139", "", 549, "არჩევა", 0, "complete003");
const statement33 = new Completes('Complete', "./productFotoAll/complete004.png", "deck:8.125x31.75/wheel:53mm/trucks:139", "", 549, "არჩევა", 0, "complete004");
const statement34 = new Completes('Complete', "./productFotoAll/complete005.png", "deck:8.0x 31.5/wheel:51mm/trucks:139", "", 549, "არჩევა", 0, "complete005");
const statement35 = new Completes('Complete', "./productFotoAll/complete006.png", "deck:8.125x31.75/wheel:53mm/trucks:139", "", 549, "არჩევა", 0, "complete006");
const statement36 = new Completes('Complete', "./productFotoAll/complete007.png", "deck: 8.125x31.75/wheel:53mm/trucks:139", "", 549, "არჩევა", 0, "complete007");
// const statement37 = new Completes('Complete', "./productFotoAll/complete008.png", "deck:8.125x31.75/wheel:53mm/trucks:139", "", 549, "არჩევა", 0, "complete008");
// const statement38 = new Completes('Complete', "./productFotoAll/complete009.png", "deck:8.0x31.25/wheel:53mm/trucks:139", "", 475, "არჩევა", 0, "complete009");
const statement39 = new Completes('Complete', "./productFotoAll/complete010.png", "deck:7.75x31.25/wheel:53mm/trucks:139", "", 475, "არჩევა", 0, "complete010");

const statementsArrayComplete = [statement30, statement31,statement32,statement33,statement34,statement35,statement36,statement39];


const appendStatementComplete = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg" onclick ="navigation ()"onmousemove ="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>
  
    </div>`


  completeList.innerHTML += statementTemplate



}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatementsComplete = (statements) => {
  for (const statement of statements) {
    appendStatementComplete(statement);


  }
}


appendAllStatementsComplete(statementsArrayComplete);

function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    completeList.innerHTML=''
   
  const sortLowToHigh = statementsArrayComplete.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatementsComplete(sortLowToHigh)
  addToCartPerfomanceCompletes()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  completeList.innerHTML=''
  const sortLowToHigh = statementsArrayComplete.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatementsComplete(sortLowToHigh)
  addToCartPerfomanceCompletes()
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

function addToCartPerfomanceCompletes () {


const addToCartBtn = document.querySelectorAll('.addToCartBtn');

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', () => {


    cartNumbersComplete(statementsArrayComplete[i])
    totalCostCopleteFunction(statementsArrayComplete[i])
    addUserToTableComplete(statementsArrayComplete[i])


  })
}
}
addToCartPerfomanceCompletes()
function onloadCartNumbersComplete() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersComplete").textContent = `(${productNumbers})`;
    document.querySelector(".orderTh").textContent = productNumbers;

  }
}


function cartNumbersComplete(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersComplete").textContent = `(${productNumbers + 1})`


  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersComplete").textContent = `(${1})`;

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


function onloadCartCostComplete() {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost) {

    document.querySelector(".totalCostComplete").textContent = `₾${cartCost}`;

  }
}



const orderTbody = document.querySelector('.orderTable tbody');




const addUserToTableComplete = (product) => {
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


function totalCostCopleteFunction(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    document.querySelector(".totalCostComplete").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    document.querySelector(".totalCostComplete ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersComplete = document.querySelector('.productNumbersComplete');
let totalCostComplete = document.querySelector('.totalCostComplete');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersComplete.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostComplete.textContent = `₾ ${cartCost}`;

function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersWheels.textContent = `(${0})`;
    totalCostComplete.textContent = `₾ ${0}`;

  })
}

clearCart()
onloadCartCostComplete();
onloadCartNumbersComplete();