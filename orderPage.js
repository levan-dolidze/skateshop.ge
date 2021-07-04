let orderDisplay = document.querySelector('.orderDisplay');
let orderApply = document.querySelector('.orderApply');
let orderTh = document.querySelector('.orderTh');
let orderThQuantity = document.querySelector('.orderThQuantity');
let fromOrderToHome = document.querySelector('.fromOrderToHome');
const orderTitle=document.querySelector('.orderTitle')
const orderApplyBtn = document.querySelector('.orderApplyBtn');
const clientId = document.getElementById('id');
const nameid = document.getElementById('nameid');
const lastname = document.getElementById('lastname');
const mobileid = document.getElementById('mobileid');
const emailid = document.getElementById('emailid');
const adressId = document.getElementById('adressId')

const formValuesArray = [adressId.value, nameid.value, lastname.value, mobileid.value, emailid.value, adressId.value]



const database = firebase.database();
const rootRef = database.ref('კლიენტი:');

const timeOfOrderObject = new Date()
const timeOfOrder =JSON.stringify(timeOfOrderObject)

function orderDisplayFunction() {

  orderApplyBtn.addEventListener('click', (e) => {
    e.preventDefault();



    if (clientId.value === "" || nameid.value === "" || lastname.value === "" || mobileid.value === ""
      || mobileid.value === "" || adressId.value === "" || emailid.value === "" || localStorage.getItem('productsInCart') === null) {

      // clientId.style.borderColor='red'

      return;


    }


    else {
      rootRef.child(clientId.value).set({
        name_id: nameid.value,
        last_name: lastname.value,
        mobile_id: mobileid.value,
        email_id: emailid.value,
        adress_Id: adressId.value,
        timeOfOrder_id:timeOfOrder


      });
      const body = document.querySelector('body');
      body.style.backgroundColor = 'rgba(0,0,0,.5)';
      orderApply.classList="hideDisplay";
      orderDisplay.classList="editOrderPageBackground";


    }
    
    addOrderToFirebase()
    createMessageBox();
    clearOrderForm();

  });
}


orderApply.addEventListener('focusin', (event) => {
  event.target.style.background = '#F5F6F7';
});

orderApply.addEventListener('focusout', (event) => {
 
if(event.target.value===''){
  event.target.style.background ='';
}else{
  event.target.style.background = '#F5F6F7';
}
});

function clearOrderForm() {
  clientId.value = "";
  nameid.value = "";
  lastname.value = "";
  mobileid.value = "";
  emailid.value = "";
  adressId.value = "";
}
function createMessageBox() {


  let messageBox = document.createElement('div');
  messageBox.classList = 'messageBox';
  messageBox.textContent = nameid.value + ', თქვენი შეკვეთა მიღებულია, შენაძენის მოწოდებამდე წინასწარ დაგიკავშრდებით მითითებულ ნომერზე '
  orderDisplay.innerHTML ="";
  orderDisplay.appendChild(messageBox);
  let btnn = document.createElement('button');
  btnn.classList = "closeButton";
  btnn.textContent = "მთავარზე დაბრუნება";
  messageBox.appendChild(btnn);
  localStorage.clear();
  btnn.addEventListener('click', () => {
    orderDisplay.innerHTML = "";
    window.location.replace("index.html");
  })
}


fromOrderToHome.addEventListener('click', function () {
  window.location.replace("index.html");
})

let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;
orderTh.textContent = `რაოდენობა: (${productNumbers}) `;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
orderThQuantity.textContent = `ჯამი: (${cartCost}) ₾ `;



Object.values(cartItems).map(item => {
  orderDisplay.innerHTML += `
      <td> <img  class="orderApplyImage" src="${item.image}" alt=""></td>
      <td> ${item.title}</td>
      <td>${item.description}</td>
      <td>${item.inCart}</td>
      <td>${item.price}</td>
    
   
    `

})




const rootRef2 = database.ref('პროდუქტი:');
function addOrderToFirebase() {
  Object.values(cartItems).map(item => {
    rootRef2.push(item)


  })
}


function clearOrderDisplay() {

  const clearOrderDisplay = document.querySelector('.clearOrderDisplay')
  clearOrderDisplay.addEventListener('click', () => {
    orderDisplay.innerHTML = ``;
    localStorage.clear();
    orderTitle.textContent="შენი კალათა ცარიელია "
    const orderNow=document.createElement('button');
    orderNow.textContent="ნახე sale"
    orderNow.classList='orderNow'
    orderTitle.append(orderNow)
    orderNow.addEventListener('click',()=>{
      window.location.replace("sale.html");
    })
   

  })
}
clearOrderDisplay()

orderDisplayFunction()

