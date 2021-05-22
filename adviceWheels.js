
let productNumbersAdvice = document.querySelector('.productNumbersAdvice');
let totalCostAdvice = document.querySelector('.totalCostAdvice');


let productNumbers = localStorage.getItem('cartNubers');
productNumbers = parseInt(productNumbers);
productNumbers = productNumbers || 0;

productNumbersAdvice.textContent = `(${productNumbers})`;


let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);
cartCost = cartCost || 0;
totalCostAdvice.textContent = `₾ ${cartCost}`;

const clearCartBtn = document.getElementById('clearCartBtn')
clearCartBtn.addEventListener('click', () => {
  localStorage.clear('.totalCost')
  productNumbersAdvice.textContent = `(${0})`;
  totalCostAdvice.textContent = `₾ ${0}`;

})


