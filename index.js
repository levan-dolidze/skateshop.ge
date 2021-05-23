const productList = document.querySelector(".productList");
const searchBtn = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");

const price = "ფასი";
const statement1 = new Statement('Element Wine Leaf 92 deck', "./productFotoAll/elementLeaf.jpg", "size: 8.125x31.75", "", 250, "არჩევა", 0, "elementLeaf");
const statement2 = new Statement('Element julian davidson deck', "./productFotoAll/elementJulianDavidson.png", "size: 8.0x31.75", "", 250, "არჩევა", 0, "elementJulianDavidson");
const statement3 = new Statement('Baker Figgy Brand Name Blue Deck ', "./productFotoAll/bakerFiggy.jpg", " size: 8.125x31.75", "", 250, "არჩევა", 0, "bakerFiggy");
const statement4 = new Statement('Baker Tyson Peterson  name deck', "./productFotoAll/bakerTyson.jpg", "size: 8.125x31.75", "", 250, "არჩევა", 0, "bakerTyson");
const statement5 = new Statement('Baker Brand Logo deck', "./productFotoAll/bakerBrandLogoRed.jpg", "size: 8.125x31.75", "", 250, "არჩევა", 0, "bakerBrandLogoRed");
const statement6= new Statement('Baker Skateboards Green Deck', "./productFotoAll/bakerReynoldsGreen.jpg", "size: 8.125x31.75", "", 250, "არჩევა", 0, "bakerReynoldsGreen");
const statement7= new Statement('Tom Penny Deck', "./productFotoAll/tomPennyFlip.png", "size: 8.0x 31.5", "", 250, "არჩევა", 0, "tomPennyFlip");
const statement8= new Statement('Baker deck', "./productFotoAll/bakerBlueDark.png", "size: 8.125x31.75", "", 250, "არჩევა", 0, "bakerBlueDark");
const statement9= new Statement('Flip  <span class="saleProduct">sale 30% </span> ', "./productFotoAll/flieBlueDark.png", "size: 8.0x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flieBlueDarkSale");
const statement10= new Statement('Flip  <span class="saleProduct">sale 30% </span>', "./productFotoAll/flipBlue.png", "size: 7.75x31.25", "<span class='oldPriceSale'>250</span>", 175, "არჩევა", 0, "flipBlueSale");
const statement11= new Statement('Independent Hollow Forged', "./productFotoAll/101large.jpg", "Hollow size: 139 Standard", "", 179, "არჩევა", 0, "IndependentTrucksRed");
const statement12= new Statement('Independent Thrasher Trucks', "./productFotoAll/100large.jpg", "Hollow size: 139 Standard", "", 179, "არჩევა", 0, "IndependentTrucksThrasher");
const statement13= new Statement('Independent Hollow Forged ', "./productFotoAll/102large.jpg", "size:139 Stage 11 matte black ", "", 179, "არჩევა", 0, "IndependentTrucksBlack");
const statement14= new Statement('Spitfire Formula Four ', "./productFotoAll/200large.jpg", "size:53mm ", "", 119, "არჩევა", 0, "spitfireBlue53");
const statement15= new Statement('Spitfire Formula Four ', "./productFotoAll/202large.jpg", "Lacey Baker size:51mm ", "", 119, "არჩევა", 0, "spitfireBaker51");
const statement16= new Statement('Spitfire Formula Four ', "./productFotoAll/203large.jpg", "red size:53mm ", "", 119, "არჩევა", 0, "spitfirered53");
const statement17= new Statement('Spitfire Formula Four ', "./productFotoAll/204large.jpg", " size:52mm ", "", 119, "არჩევა", 0, "spitfireBlue52");
const statement18= new Statement('Spitfire Formula Four ', "./productFotoAll/205large.png", " size:52mm ", "", 119, "არჩევა", 0, "spitfireColorfull52");




const statementsArray = [statement1, statement2, statement3, statement4,statement5,statement6,statement7,statement8,statement9,statement10,statement11,statement12,statement13,statement14,statement15,statement16,statement17,statement18];


const appendStatement = (statement) => {
  const statementTemplate = `
    <div class="statement">
    <p class="statementTitle"> ${statement.title}</p>
    <div class="statementImg" onmousemove ="zoomFunction()" ontouchmove="zoomFunction()" onmouseleave ="zoomFunctionleave()"  (${statement.image})" style="background-image: url(${statement.image}); "> </div>
    <p class="description">${statement.description}  </p>
    <p class="productPrice">${statement.oldPrice} ${statement.price}  ₾ </p>
    <button type="button" class="addToCartBtn btn-warning">${statement.button} </button>


    </div>`


  productList.innerHTML += statementTemplate
  // imageTest.style.backgroundImage = `url(${statement.image})`;


}

{/* <img class="statementImg" src=${statement.image} alt="" onmousemove ="test2()" (${statement.image})"> */ }

const appendAllStatements = (statements) => {
  for (const statement of statements) {
    appendStatement(statement);


  }
}

 
function getSelectOptions(){
  if(document.getElementById('sortProducts').value ==="lowToHigh") {
  
    productList.innerHTML=''
   
  const sortLowToHigh = statementsArray.sort((a,b)=>{

if(a.price>b.price){
  return 1;
} else if(a.price<b.price){
  return -1
} else{
  return 0
}

  })
  
  appendAllStatements(sortLowToHigh)
  addToCartPerfomance()
}
else if (document.getElementById('sortProducts').value ==="HighToLow"){
  productList.innerHTML=''
  const sortLowToHigh = statementsArray.sort((a,b)=>{

if(a.price>b.price){
  return -1;
} else if(a.price<b.price){
  return 1
} else{
  return 0
}

  })
  
  appendAllStatements(sortLowToHigh)
  addToCartPerfomance()
}

}





//searching function
function searchFunctionOnKeyPress() {


  searchInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
      productList.innerHTML = '';
      window.scrollBy(0, 800);
    }
    if (searchInput.value === '') {
      appendAllStatements(statementsArray)
      addToCartPerfomance()
      return;
    }
 const filtredArray = statementsArray.filter((statement) => {

      return statement.title.toLowerCase().includes(searchInput.value) || statement.title.toLocaleUpperCase().includes(searchInput.value);



    });
   
    appendAllStatements(filtredArray);
  
    addToCartPerfomanceFiltred(filtredArray)


  });

}

searchFunctionOnKeyPress()

function searchFunctionOnClick() {

  searchBtn.addEventListener('click', () => {
    productList.innerHTML = '';
    window.scrollBy(0, 800);
    if (searchInput.value === '') {
      appendAllStatements(statementsArray)
      addToCartPerfomance()
      return;
    }

    const filtredArray = statementsArray.filter((statement) => {

      return statement.title.toLowerCase().includes(searchInput.value) || statement.title.toLocaleUpperCase().includes(searchInput.value);

    });

    appendAllStatements(filtredArray);
    
  
    addToCartPerfomanceFiltred(filtredArray)


  });

  appendAllStatements(statementsArray);

}
searchFunctionOnClick()





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
    item.addEventListener('mouseleave', function () {
      item.style.backgroundPosition = "center";

    });
  })
}

// item.addEventListener('mouseleave',function(){
//   item.style.backgroundPosition="center";
//   item.style.width ="300px";
//   item.style.height="250px";

//   });
// item.addEventListener('click',function(){
//   item.style.backgroundPosition="center";
//   item.style.width ="300px";
//   item.style.height="400px";

//    });






// function navigation (){
//   window.location.replace("contactUs.html");
// }
function addToCartPerfomanceFiltred(data) {


  const addToCartBtn = document.querySelectorAll('.addToCartBtn');

  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', () => {

      //  localStorage.setItem("levan"+i, JSON.stringify(statementsArray[i]));
      //   const  test = JSON.parse(localStorage.getItem("levan"+i));

      cartNubers(data[i])
      totalCost(data[i])
      addUserToTable(data[i])


    })
  }
}
addToCartPerfomanceFiltred()
// add to cart function 
function addToCartPerfomance() {


  const addToCartBtn = document.querySelectorAll('.addToCartBtn');

  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', () => {

      //  localStorage.setItem("levan"+i, JSON.stringify(statementsArray[i]));
      //   const  test = JSON.parse(localStorage.getItem("levan"+i));

      cartNubers(statementsArray[i])
      totalCost(statementsArray[i])
      addUserToTable(statementsArray[i])


    })
  }
}
addToCartPerfomance()
function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNubers');
  if (productNumbers) {
    document.querySelector(".productNumbersIndex").textContent = `(${productNumbers})`;
    // document.querySelector(".orderTh").textContent=productNumbers; when add items to table - table display step 4 

  }
}


function cartNubers(product) {

  let productNumbers = localStorage.getItem('cartNubers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNubers', productNumbers + 1)
    document.querySelector(".productNumbersIndex").textContent = `(${productNumbers + 1})`
    // document.querySelector(".orderTh").textContent =productNumbers+1 when add items to table - table display step 5  

  } else {
    localStorage.setItem('cartNubers', 1)
    document.querySelector(".productNumbersIndex").textContent = `(${1})`;
    // document.querySelector(".orderTh").textContent=1;when add items to table - table display step 6
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


function onloadCartCost() {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost) {
    // document.querySelector(".orderTable .orderThQuantity").textContent=cartCost;when add items to table - table display step 7  
    document.querySelector(".totalCostIndex").textContent = `₾${cartCost}`;

  }
}



// const orderTbody=document.querySelector('.orderTable tbody'); when add items to table - table display step 2  
// const orderTable =document.querySelector('.orderTable');when add items to table - table display step 3  



const addUserToTable = (product) => {
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
  productTitle.textContent = product.title;

  let productQuantity = document.createElement('td');
  // productQuantity.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOauC9pxePcgoqTQL-cnuhUL4qMnOnkMLRw&usqp=CAU" )
  // productQuantity.style.width="30px";
  // productQuantity.style.padding="5px";
  productQuantity.textContent = cartItems[product.tag].inCart
  productQuantity.addEventListener('click', function () {
    productQuantity.textContent = cartItems[product.tag].inCart++
    productPrice.textContent = cartItems[product.tag].price * cartItems[product.tag].inCart

  });


  let productPrice = document.createElement('td');

  productPrice.textContent = cartItems[product.tag].price


  // let productAmount=document.createElement('td');
  // productAmount.textContent=1

  // row.append(productImage, productTitle, productQuantity, productPrice);
  // orderTbody.appendChild(row);

}


function totalCost(product) {

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    // document.querySelector(".orderTable .orderThQuantity ").textContent=cartCost+product.price;when add items to table - table display step 8  
    document.querySelector(".totalCostIndex").textContent = `₾ ${product.price + cartCost}`;

  } else {
    localStorage.setItem("totalCost", product.price);
    // document.querySelector(".orderTable .orderThQuantity").textContent=product.price;when add items to table - table display step 9
    document.querySelector(".totalCostIndex ").textContent = `₾ ${product.price}`;

  }

}


let productNumbersIndex = document.querySelector('.productNumbersIndex');
let totalCostIndex = document.querySelector('.totalCostIndex');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersIndex.textContent = `(${productNumbers})`;

let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostIndex.textContent = `₾ ${cartCost}`;


function clearCart() {


  const clearCartBtn = document.getElementById('clearCartBtn')
  clearCartBtn.addEventListener('click', () => {
    localStorage.clear('.totalCost')
    productNumbersIndex.textContent = `(${0})`;
    totalCostIndex.textContent = `₾ ${0}`;

  })
}


clearCart();
onloadCartCost();
onloadCartNumbers();
