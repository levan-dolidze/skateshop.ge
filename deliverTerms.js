
let productNumbersPartners = document.querySelector('.productNumbersPartners');
let totalCostPartners = document.querySelector('.totalCostPartners');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersPartners.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostPartners.textContent = `₾ ${cartCost}`;


const clearCartBtn = document.getElementById('clearCartBtn')
clearCartBtn.addEventListener('click', () => {
  localStorage.clear('.totalCost')
  productNumbersPartners.textContent = `(${0})`;
  totalCostPartners.textContent = `₾ ${0}`;

})
