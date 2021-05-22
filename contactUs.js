
let productNumbersContact = document.querySelector('.productNumbersContact');
let totalCostContact = document.querySelector('.totalCostContact');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersContact.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostContact.textContent = `₾ ${cartCost}`;

const clearCartBtn = document.getElementById('clearCartBtn')
clearCartBtn.addEventListener('click', () => {
  localStorage.clear('.totalCost')
  productNumbersContact.textContent = `(${0})`;
  totalCostContact.textContent = `₾ ${0}`;

})
const body = document.querySelector('body');

const database = firebase.database();

const contactDescription = document.getElementById('description');
const contactNameid =document.getElementById('nameid');
const contactLastname =document.getElementById('lastname');
const contactEmail=document.getElementById('emailid');
const mobileId=document.getElementById('mobileId')
const orderApplyBtn=document.querySelector('.orderApplyBtn');




orderApplyBtn.addEventListener('click',(e)=>{
  e.preventDefault();
if(contactDescription.value===' '||contactNameid.value===""||contactLastname.value===""||contactEmail.value===""||mobileId.value===""){
  return
}else{
  database.ref('/user/'+contactNameid.value).set({
    contact_description:contactDescription.value,
    first_name:contactLastname.value,
    contact_Email:contactEmail.value,
    contact_MobileId:mobileId.value

  })
  
const aboutUsMainPage =document.querySelector('.aboutUsMainPage')
aboutUsMainPage.classList="hideHtml"
  body.style.backgroundColor = 'rgba(0,0,0,.5)';


}

createMessageBox()


})

function createMessageBox() {


  let messageBox = document.createElement('div');
  messageBox.classList = 'contactMessageDiv';
  messageBox.textContent = contactNameid.value + ' , მადლობა რომ მოგვწერეთ  '
  const contactUsMain=document.querySelector('.contactUsMain')
  contactUsMain.appendChild(messageBox)
  setTimeout(function(){    window.location.replace("index.html")}, 1000);

}
