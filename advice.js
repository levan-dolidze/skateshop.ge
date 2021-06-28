
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



window.onload = () => {
  // loadTableData(tableTrucksDataLess);
  loadTableDataDeck(tableDataLess);
}






const wikiTableDecks = document.querySelector('.wikiTableDecks')


let tableDataLess = [
  { shoesizeUS: 'US 4 ', shoesizeEU: 'EU 36', shoesizeUK: 'UK 3.5', deckwidth: '7.5″ – 7.875″' },
  { shoesizeUS: 'US 4.5 ', shoesizeEU: 'EU 36.5', shoesizeUK: 'UK 3.5', deckwidth: '7.5″ – 7.875″' },
  { shoesizeUS: 'US 5 ', shoesizeEU: 'EU 37.5', shoesizeUK: 'UK 4.5', deckwidth: '48 mm' },
  { shoesizeUS: 'US 5.5', shoesizeEU: 'EU 38', shoesizeUK: 'UK 5', deckwidth: '7.625″ – 8″' },
  { shoesizeUS: 'US 6 ', shoesizeEU: 'EU 38.5', shoesizeUK: 'UK 5.5', deckwidth: '7.75″ – 8″' },
  { shoesizeUS: 'US 6.5 ', shoesizeEU: 'EU 39', shoesizeUK: 'UK 6', deckwidth: '7.75″ – 8.125″' },
  { shoesizeUS: 'US 7', shoesizeEU: 'EU 40', shoesizeUK: 'UK 6', deckwidth: '7.875″ – 8.125″' },
  { shoesizeUS: 'US 7.5 ', shoesizeEU: '	EU 40.5', shoesizeUK: 'UK 6.5', deckwidth: '7.875″ – 8.25″' },
  { shoesizeUS: 'US 8', shoesizeEU: '	EU 41', shoesizeUK: 'UK 7', deckwidth: '8.00″ – 8.25″' },
  { shoesizeUS: 'US 8.5 ', shoesizeEU: '	EU 42', shoesizeUK: 'UK 7.5', deckwidth: '8.00″ – 8.25″<span onclick ="seeMoreListDeck ()" class="seeMore">  მეტის ჩვენება <i class="fas fa-chevron-left"></i> </span> ' },

]
let tableDataMore = [
  { shoesizeUS: 'US 4 ', shoesizeEU: 'EU 36', shoesizeUK: 'UK 3.5', deckwidth: '7.5″ – 7.875″' },
  { shoesizeUS: 'US 4.5 ', shoesizeEU: 'EU 36.5', shoesizeUK: 'UK 3.5', deckwidth: '7.5″ – 7.875″' },
  { shoesizeUS: 'US 5 ', shoesizeEU: 'EU 37.5', shoesizeUK: 'UK 4.5', deckwidth: '48 mm' },
  { shoesizeUS: 'US 5.5', shoesizeEU: 'EU 38', shoesizeUK: 'UK 5', deckwidth: '7.625″ – 8″' },
  { shoesizeUS: 'US 6 ', shoesizeEU: 'EU 38.5', shoesizeUK: 'UK 5.5', deckwidth: '7.75″ – 8″' },
  { shoesizeUS: 'US 6.5 ', shoesizeEU: 'EU 39', shoesizeUK: 'UK 6', deckwidth: '7.75″ – 8.125″' },
  { shoesizeUS: 'US 7', shoesizeEU: 'EU 40', shoesizeUK: 'UK 6', deckwidth: '7.875″ – 8.125″' },
  { shoesizeUS: 'US 7.5 ', shoesizeEU: '	EU 40.5', shoesizeUK: 'UK 6.5', deckwidth: '7.875″ – 8.25″' },
  { shoesizeUS: 'US 8', shoesizeEU: '	EU 41', shoesizeUK: 'UK 7', deckwidth: '8.00″ – 8.25″' },
  { shoesizeUS: 'US 8.5 ', shoesizeEU: '	EU 42', shoesizeUK: 'UK 7.5', deckwidth: '8.00″ – 8.25″' },
  { shoesizeUS: 'US 9', shoesizeEU: '	EU 42.5', shoesizeUK: 'UK 8', deckwidth: '8.00″ – 8.375″' },
  { shoesizeUS: 'US 9.5 ', shoesizeEU: '	EU 43', shoesizeUK: 'UK 8.5', deckwidth: '8.00″ – 8.375″' },
  { shoesizeUS: 'US 10 ', shoesizeEU: '	EU 44', shoesizeUK: 'UK 9', deckwidth: '8.125″ – 8.5″' },
  { shoesizeUS: 'US 10.5 ', shoesizeEU: '	EU 44.5', shoesizeUK: 'UK 9.5', deckwidth: '8.125″ – 8.5″' },
  { shoesizeUS: 'US 11 ', shoesizeEU: '	EU 45', shoesizeUK: 'UK 10', deckwidth: '8.25″ – 8.5″' },
  { shoesizeUS: 'US 11.5', shoesizeEU: '	EU 45.5', shoesizeUK: 'UK 10.5', deckwidth: '8.25″ – 8.625″' },
  { shoesizeUS: 'US 12 ', shoesizeEU: '	EU 46', shoesizeUK: 'UK 11', deckwidth: '8.375″ – 8.625″' },
  { shoesizeUS: 'US 13 ', shoesizeEU: ' EU 47.5', shoesizeUK: 'UK 12', deckwidth: '8.5″ – 8.625″' },
  { shoesizeUS: 'US 14 ', shoesizeEU: '	EU 48.5', shoesizeUK: 'UK 13', deckwidth: '> 8.5″<span onclick ="seeLessListDeck()" class="seeMore"> ნაკლების ჩვენება <i class="fas fa-chevron-down"></i> </span>  ' },

]





function loadTableDataDeck(tableDataLess) {
  const wikitbodyDecks = document.getElementById('wikitbodyDecks')
  let dataHtmlDeck = '';
  for (let person of tableDataLess) {
    dataHtmlDeck += ` <tr><td>${person.shoesizeUS}</td><td>${person.shoesizeEU}</td><td>${person.shoesizeUK} </td><td>${person.deckwidth}</td></tr>`

  }

  wikitbodyDecks.innerHTML = dataHtmlDeck;

}


function seeLessListDeck() {
  loadTableDataDeck(tableDataLess)
  window.scrollBy(0, -400);
}

function seeMoreListDeck() {
  loadTableDataDeck(tableDataMore)

}

const wikiTableByHigh = document.querySelector('.wikiTableByHigh')
let tableByHigh = [
  { deckLength: '28″ – 30.5″', bodyHeight: '< 140 cm' },
  { deckLength: '30.5″ – 31.5″', bodyHeight: '< 150 cm' },
  { deckLength: '31.5″ – 31.875″', bodyHeight: '150 – 175 cm' },
  { deckLength: '31.75″ – 32.00″', bodyHeight: '160 – 185 cm' },
  { deckLength: '31.875″ – 32.25″', bodyHeight: '170 – 195 cm' },
  { deckLength: '32″ – 32.5″', bodyHeight: '180 – 210 cm' },
  { deckLength: '> 32.5″', bodyHeight: '> 190 cm' }


]


function loadTableDataByHigh(tableByHigh) {
  const wikitbodyByHigh = document.getElementById('wikitbodyByHigh')
  let dataHtmlByHigh = '';
  for (let person of tableByHigh) {
    dataHtmlByHigh += ` <tr><td>${person.deckLength}</td><td>${person.bodyHeight}</td></tr>`

  }

  wikitbodyByHigh.innerHTML = dataHtmlByHigh;

}



function seeByHigh() {
  loadTableDataByHigh(tableByHigh)

}
seeByHigh()
