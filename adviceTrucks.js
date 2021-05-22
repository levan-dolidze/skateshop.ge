
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

let tableTrucksDataLess = [
    { brand: 'Independent ', size: '129 Low', typeO: 'Low', height: '48 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '129 Mid', typeO: 'Mid', height: '52 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '129 Standard', typeO: 'High', height: '55 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '139 Low', typeO: 'Low', height: '48 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125' },
    { brand: '', size: '139 Low', typeO: 'Low', height: '48 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125' },
    { brand: '', size: '139 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '139 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '144 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.625″ (143 mm)', axleWidth: '8.25″ (209 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '144 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.625″ (143 mm)', axleWidth: '8.25″ (209 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '149 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '149 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '159 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '159 Standard', typeO: 'High', height: '55 mm', hangWidth: '6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '169 Standard', typeO: 'High', height: '55 mm', hangWidth: '6.5″ (160 mm)', axleWidth: '9.125″ (232 mm)', SuggestDeckWidth: '9″ – 9.25″' },
    { brand: '', size: '215 Standard', typeO: 'High', height: '55 mm', hangWidth: '7.36″ (187 mm)', axleWidth: '10″ (254 mm)', SuggestDeckWidth: '9.75″ – 10.25″' },
    { brand: ' Venture', size: '5.0 Low', typeO: 'Low', height: '48mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.5″ – 7.75″' },
    { brand: '', size: '5.0 High', typeO: 'High', height: '53,5 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.5″ – 7.75″ <span onclick ="seeMoreList()" class="seeMore">  მეტის ჩვენება <i class="fas fa-chevron-left"></i> </span> ' }
  
  ]
  let tableTrucksDataMore = [
    { brand: 'Independent ', size: '129 Low', typeO: 'Low', height: '48 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '129 Mid', typeO: 'Mid', height: '52 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '129 Standard', typeO: 'High', height: '55 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '139 Low', typeO: 'Low', height: '48 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125' },
    { brand: '', size: '139 Low', typeO: 'Low', height: '48 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125' },
    { brand: '', size: '139 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '139 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '144 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.625″ (143 mm)', axleWidth: '8.25″ (209 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '144 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.625″ (143 mm)', axleWidth: '8.25″ (209 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '149 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '149 Standard', typeO: 'High', height: '55 mm', hangWidth: '5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '159 Mid', typeO: 'Mid', height: '52 mm', hangWidth: '6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '159 Standard', typeO: 'High', height: '55 mm', hangWidth: '6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '169 Standard', typeO: 'High', height: '55 mm', hangWidth: '6.5″ (160 mm)', axleWidth: '9.125″ (232 mm)', SuggestDeckWidth: '9″ – 9.25″' },
    { brand: '', size: '215 Standard', typeO: 'High', height: '55 mm', hangWidth: '7.36″ (187 mm)', axleWidth: '10″ (254 mm)', SuggestDeckWidth: '9.75″ – 10.25″' },
    { brand: ' Venture', size: '5.0 Low', typeO: 'Low', height: '48mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.5″ – 7.75″' },
    { brand: '', size: '5.0 High', typeO: 'High', height: '53,5 mm ', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.5″ – 7.75″' },
    { brand: '', size: '5.25 Low', typeO: 'Low', height: '48mm ', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '5.25 High', typeO: 'High', height: '53,5 mm ', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '5.8 High', typeO: 'High', height: '53,5 mm ', hangWidth: '5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: 'Thunder', size: '143 High', typeO: 'Mid', height: '50 mm', hangWidth: '4.5″ (115 mm)', axleWidth: '7.125″ (181 mm)', SuggestDeckWidth: '6.875″ – 7.375″' },
    { brand: '', size: '145 Low', typeO: 'Low', height: '47 mm', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '145 High', typeO: 'Mid', height: '50 mm', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75' },
    { brand: '', size: '145 Team High', typeO: 'High', height: '53,5 mm', hangWidth: '5.0″ (128 mm)', axleWidth: '7.625″ (194 mm)', SuggestDeckWidth: '7.375″ – 7.75″' },
    { brand: '', size: '147 High', typeO: 'Mid', height: '50 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '147 Team High', typeO: 'High', height: '53,5 mm', hangWidth: '5.39″ (137 mm)', axleWidth: '8″ (203 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '148 High', typeO: 'Mid', height: '50 mm', hangWidth: '	5.67″ (144 mm)', axleWidth: '8.25″ (210 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '148 Team High', typeO: 'High', height: '53,5 mm', hangWidth: '	5.67″ (144 mm)', axleWidth: '8.25″ (210 mm)', SuggestDeckWidth: '8.125″ – 8.375″' },
    { brand: '', size: '149 High', typeO: 'Mid', height: '52 mm', hangWidth: '	5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '149 Team High', typeO: 'High', height: '53,5 mm', hangWidth: '	5.9″ (150 mm)', axleWidth: '8.5″ (216 mm)', SuggestDeckWidth: '8.375″ – 8.625″' },
    { brand: '', size: '151 High', typeO: 'Mid', height: '52 mm', hangWidth: '	6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '151 Team High', typeO: 'High', height: '53,5 mm', hangWidth: '6.15″ (156 mm)', axleWidth: '8.75″ (222 mm)', SuggestDeckWidth: '8.625″ – 8.875″' },
    { brand: '', size: '161 High', typeO: 'High', height: '53,5 mm', hangWidth: '6.5″ (165 mm)', axleWidth: '9.125″ (232 mm)', SuggestDeckWidth: '9″ – 9.25″' },
    { brand: 'Destructo', size: '5.25 Low', typeO: 'Mid', height: '50 mm', hangWidth: '5.25″ (133 mm)', axleWidth: '8″ (202 mm)', SuggestDeckWidth: '7.875″ – 8.125″' },
    { brand: '', size: '5.25 Mid', typeO: 'High', height: '56 mm', hangWidth: '5.25″ (133 mm)', axleWidth: '8″ (202 mm)', SuggestDeckWidth: '7.875″ – 8.125″ <span onclick ="seeLessList()" class="seeMore"> ნაკლების ჩვენება <i class="fas fa-chevron-down"></i> </span>  ' }
  
  ]
  

window.onload = () => {
  loadTableData(tableTrucksDataLess);
//   loadTableDataDeck(tableDataLess);
}

function loadTableData(tableTrucksDataLess) {
  const wikitbody = document.getElementById('wikitbody')
  let dataHtml = '';
  for (let person of tableTrucksDataLess) {
    dataHtml += ` <tr><td>${person.brand}</td><td>${person.size}</td><td>${person.typeO} </td><td>${person.height}</td><td>${person.hangWidth}</td><td>${person.axleWidth}</td><td>${person.SuggestDeckWidth}</td></tr>`

  }

  wikitbody.innerHTML = dataHtml;

}


function seeMoreList() {
  loadTableData(tableTrucksDataMore)
}

function seeLessList() {
  loadTableData(tableTrucksDataLess)
  window.scrollBy(0, -800);
}




const wikiTableWheelsSize = document.querySelector('.wikiTableWheelsSize')
let tableWheelsSize = [
  { TruckType: 'Low', TruckHeight: '46 mm', Example: 'Tensor 5.25 Low', RecMaxWheelSize: '51 mm' },
  { TruckType: '', TruckHeight: '	47 mm', Example: 'Thunder 145 Low', RecMaxWheelSize: '52 mm' },
  { TruckType: '', TruckHeight: '	48 mm', Example: 'Independent 139 Low', RecMaxWheelSize: '52 mm' },
  { TruckType: 'Mid', TruckHeight: '	50 mm', Example: 'Thunder 148 High', RecMaxWheelSize: '56 mm' },
  { TruckType: '', TruckHeight: '	52 mm', Example: 'Ace 44 Classic 5.75″', RecMaxWheelSize: '60 mm' },
  { TruckType: 'High', TruckHeight: '	53,5 mm', Example: 'Venture 5.25 High', RecMaxWheelSize: '62 mm' },
  { TruckType: '', TruckHeight: '	55 mm', Example: 'Independent 144 Standard', RecMaxWheelSize: '63 mm' },
  { TruckType: '56 mm', TruckHeight: '56 mm	', Example: 'Destructo 5.25 Mid', RecMaxWheelSize: '64 mm' }


]


function loadTableDataWheelsSize(tableWheelsSize) {
    const wikitbodyWheelsSize = document.getElementById('wikitbodyWheelsSize')
    let dataHtmlWheelsSize = '';
    for (let person of tableWheelsSize) {
      dataHtmlWheelsSize += ` <tr><td>${person.TruckType}</td><td>${person.TruckHeight}</td><td>${person.Example}</td><td>${person.RecMaxWheelSize}</td></tr>`
  
    }
  
    wikitbodyWheelsSize.innerHTML = dataHtmlWheelsSize;
  
  }
  
  
  
  function WheelsSize() {
    loadTableDataWheelsSize(tableWheelsSize)
  
  }
  WheelsSize()