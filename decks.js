const deckList = document.querySelector('.deckList');
const dropdownItem = document.querySelector('.dropdown-item');
const searchBtnDecks = document.querySelector(".btn-success");
const searchInputDeck = document.querySelector('.searchInputDeck')

const price = "ფასი";
const statement20 = new Statement('Element deck & grip <span class="saleProduct">sale 12% </span> ', "./productFotoAll/elementLeaf.jpg", "size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "elementLeaf");
const statement21= new Statement('Element deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/elementJulianDavidson.png", "size: 8.0x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "elementJulianDavidson");
const statement22 = new Statement('Baker deck & grip <span class="saleProduct">sale 12% </span> ', "./productFotoAll/bakerFiggy.jpg", " size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "bakerFiggy");
const statement23 = new Statement('Baker deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/bakerTyson.jpg", "size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "bakerTyson");
const statement24 = new Statement('Baker deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/bakerBrandLogoRed.jpg", "size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "bakerBrandLogoRed");
const statement25= new Statement('Baker deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/bakerReynoldsGreen.jpg", "size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "bakerReynoldsGreen");
const statement26= new Statement('Flip deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/tomPennyFlip.png", "size: 8.0x 31.5", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "tomPennyFlip");
const statement27= new Statement('Baker deck & grip <span class="saleProduct">sale 12% </span>', "./productFotoAll/bakerBlueDark.png", "size: 8.125x31.75", "<span class='oldPriceSale'>250</span>", 220, "არჩევა", 0, "bakerBlueDark");
const statement28= new Statement('Flip  <span class="saleProduct">sale 30% </span> ', "./productFotoAll/flieBlueDark.png", "size: 8.0x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flieBlueDarkSale");
const statement29= new Statement('Flip  <span class="saleProduct">sale 30% </span>', "./productFotoAll/flipBlue.png", "size: 7.75x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flipBlueSale");


const statementsArrayDecks = [statement20, statement21, statement22, statement23,statement24,statement25,statement26,statement27,statement28,statement29];


const appendStatementDecks = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg" onmousemove ="zoomFunction()"  ontouchmove="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>
  
    </div>`


  deckList.innerHTML += statementTemplate



}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatementsDecks = (statements) => {
  for (const statement of statements) {
    appendStatementDecks(statement);


  }
}


appendAllStatementsDecks(statementsArrayDecks);

function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    deckList.innerHTML=''
   
  const sortLowToHigh = statementsArrayDecks.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatementsDecks(sortLowToHigh)
  addToCartPerfomanceSale()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  deckList.innerHTML=''
  const sortLowToHigh = statementsArrayDecks.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatementsDecks(sortLowToHigh)
  addToCartPerfomanceSale()
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

function addToCartPerfomanceSale() {



const addToCartBtn = document.querySelectorAll('.addToCartBtn');
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', () => {


    cartNubersDeck(statementsArrayDecks[i])
    totalCostDecksFunction(statementsArrayDecks[i])
    addUserToTableDecks(statementsArrayDecks[i])


  })
}
}
addToCartPerfomanceSale()
function onloadCartNumbersDecks() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersDecks").textContent = `(${productNumbers})`;
    document.querySelector(".orderTh").textContent = productNumbers;

  }
}


function cartNubersDeck(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersDecks").textContent = `(${productNumbers + 1})`


  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersDecks").textContent = `(${1})`;

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

    document.querySelector(".totalCostDecks").textContent = `₾${cartCost}`;

  }
}



const orderTbody = document.querySelector('.orderTable tbody');




const addUserToTableDecks = (product) => {
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


function totalCostDecksFunction(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    document.querySelector(".totalCostDecks").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    document.querySelector(".totalCostDecks ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersDecks = document.querySelector('.productNumbersDecks');
let totalCostDecks = document.querySelector('.totalCostDecks');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersDecks.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostDecks.textContent = `₾ ${cartCost}`;

function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersDecks.textContent = `(${0})`;
    totalCostDecks.textContent = `₾ ${0}`;

  })
}

clearCart()
onloadCartCostDecks();
onloadCartNumbersDecks();