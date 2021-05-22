const saleList = document.querySelector(".saleList");



const statement50= new Statement('Flip  <span class="saleProduct">sale 30% </span> ', "./productFotoAll/flieBlueDark.png", "size: 8.0x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flieBlueDarkSale");
const statement51= new Statement('Flip  <span class="saleProduct">sale 30% </span>', "./productFotoAll/flipBlue.png", "size: 7.75x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flipBlueSale");

const statementsArray3 = [statement50,statement51];


const appendStatement2 = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg"  ontouchmove="zoomFunction()"onmousemove ="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>


    </div>`


  saleList.innerHTML += statementTemplate
  // imageTest.style.backgroundImage = `url(${statement.image})`;


}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatements2 = (statements) => {
  for (const statement of statements) {
    appendStatement2(statement);


  }
}



appendAllStatements2(statementsArray3);


function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    saleList.innerHTML=''
   
  const sortLowToHigh = statementsArray3.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatements2(sortLowToHigh)
  addToCartPerfomanceSale()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  saleList.innerHTML=''
  const sortLowToHigh = statementsArray3.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatements2(sortLowToHigh)
  addToCartPerfomanceSale ()
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

function addToCartPerfomanceSale () {


const addToCartBtn = document.querySelectorAll('.addToCartBtn');

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', () => {


    cartNubers2(statementsArray3[i])
    totalCost2(statementsArray3[i])
    addUserToTable2(statementsArray3[i])


  })
}
}
addToCartPerfomanceSale()
function onloadCartNumbers2() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersSale").textContent = `(${productNumbers})`;
    document.querySelector(".orderTh").textContent = productNumbers;

  }
}


function cartNubers2(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersSale").textContent = `(${productNumbers + 1})`
    // document.querySelector(".orderTh").textContent =productNumbers+1

  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersSale").textContent = `(${1})`;
    // document.querySelector(".orderTh").textContent=1;
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


function onloadCartCost2() {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost) {
    // document.querySelector(".orderTable .orderThQuantity").textContent=cartCost;
    document.querySelector(".totalCostSale").textContent = `₾${cartCost}`;

  }
}



const orderTbody = document.querySelector('.orderTable tbody');
const orderTable = document.querySelector('.orderTable');



const addUserToTable2 = (product) => {
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

  // row.append(productImage, productTitle, productQuantity, productPrice);
  // orderTbody.appendChild(row);

}


function totalCost2(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    // document.querySelector(".orderTable .orderThQuantity ").textContent=cartCost+product.price;
    document.querySelector(".totalCostSale").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    // document.querySelector(".orderTable .orderThQuantity").textContent=product.price;
    document.querySelector(".totalCostSale ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersSale = document.querySelector('.productNumbersSale');
let totalCostSale = document.querySelector('.totalCostSale');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersSale.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostSale.textContent = `₾ ${cartCost}`;

function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersSale.textContent = `(${0})`;
    totalCostSale.textContent = `₾ ${0}`;

  })
}

clearCart();
onloadCartCost2();
onloadCartNumbers2();















