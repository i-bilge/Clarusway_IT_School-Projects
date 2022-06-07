const productDivs = document.querySelectorAll(".product");

productDivs.forEach((productDiv) => {
  productDiv.addEventListener("click", (event) => {
    const productQuantity =
      event.target.parentElement.parentElement.querySelector(
        "#product-quantity"
      );
    const targetedElementClassName = event.target.className;

    if (targetedElementClassName === "fas fa-plus") {
      // add
      productQuantity.innerText++;
      calculateProductTotal(productQuantity);
      calculateCartTotal();
    } else if (targetedElementClassName === "fas fa-minus") {
      //substract
      productQuantity.innerText--;
      if (productQuantity.innerText === "0") {
        if (confirm("Product will be removed!")) {
          productQuantity.parentElement.parentElement.parentElement.remove();
        } else {
          productQuantity.innerText++;
        }
      }

      calculateProductTotal(productQuantity);
      calculateCartTotal();
    } else if (targetedElementClassName === "remove-product") {
      //remove
      if (confirm("Product will be removed!")) {
        productQuantity.parentElement.parentElement.parentElement.remove();
        calculateProductTotal(productQuantity);
        calculateCartTotal();
      } else return;
    }
  });
});

const calculateProductTotal = (productQuantity) => {
  const productInfo = productQuantity.parentElement.parentElement;
  const productPrice = productInfo.querySelector("strong").innerText;
  let productTotal = productInfo.querySelector(".product-line-price");
  const totalPrice = productPrice * productQuantity.innerText;
  productTotal.innerText = totalPrice.toFixed(2);
};

const calculateCartTotal = () => {
  const productTotalPrices = document.querySelectorAll(".product-line-price"); // it is an array
  let subTotal = 0;
  productTotalPrices.forEach((productTotal) => {
    subTotal += Number(productTotal.innerText);
  });
  document.getElementById("subtotal-p").innerText = subTotal.toFixed(2);

  const taxPrice = subTotal * 0.18;
  document.getElementById("tax-p").innerText = taxPrice.toFixed(2);

  const cartTotal =
    subTotal + taxPrice + (subTotal > 0 && subTotal < 200 ? 15 : 0);
  document.getElementById("shipping-p").innerText =
    subTotal > 0 && subTotal < 200 ? 15 : 0;
  document.getElementById("card-total-p").innerText = cartTotal.toFixed(2);
};
