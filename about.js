
let productNumbersAbout = document.querySelector('.productNumbersAbout');
let totalCostAbout = document.querySelector('.totalCostAbout');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersAbout.textContent = `(${productNumbers})`;




let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostAbout.textContent = `₾ ${cartCost}`;



const clearCartBtn = document.getElementById('clearCartBtn')
clearCartBtn.addEventListener('click', () => {
  localStorage.clear('.totalCost')
  productNumbersAbout.textContent = `(${0})`;
  totalCostAbout.textContent = `₾ ${0}`;

})

  ;


