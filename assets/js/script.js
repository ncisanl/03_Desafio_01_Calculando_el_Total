basePrice = 400000;
totalPrice = 0;
baseQuantity = 0;

priceSpan = document.querySelector("#basePriceId");
priceSpan.innerHTML = basePrice;

quantitySpan = document.querySelector("#quantityId");
quantitySpan.innerHTML = baseQuantity;

totalPriceSpan = document.querySelector("#totalPriceId");
totalPriceSpan.innerHTML = totalPrice;

const addition = () => {
  let quantityAddition = document.querySelector("#quantityId");
  let contentQuantity = Number(quantityAddition.innerHTML);
  contentQuantity = contentQuantity + 1;
  quantityAddition.innerHTML = contentQuantity;

  let totalPriceAddition = document.querySelector("#totalPriceId");
  let contentTotalPrice = Number(totalPriceAddition.innerHTML);
  contentTotalPrice = contentTotalPrice + basePrice;
  totalPriceAddition.innerHTML = contentTotalPrice;
};

const subtraction = () => {
  let quantitySubtraction = document.querySelector("#quantityId");
  let contentQuantity = Number(quantitySubtraction.innerHTML);

  if (contentQuantity > 0) {
    contentQuantity = contentQuantity - 1;
    quantitySubtraction.innerHTML = contentQuantity;

    let totalPriceSubtraction = document.querySelector("#totalPriceId");
    let contentTotalPrice = Number(totalPriceSubtraction.innerHTML);
    contentTotalPrice = contentTotalPrice - basePrice;
    totalPriceSubtraction.innerHTML = contentTotalPrice;
  }
};
