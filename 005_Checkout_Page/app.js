//here first we are creating the logic for a product. And then we are implementing this locig for all of them wit "forEach" iteration.
//And at the end connecting them with prices

const productDivs = document.querySelectorAll(".product");

productDivs.forEach((productDiv) => {
  productDiv.addEventListener("click", (event) => {
    const productQuantity =
      event.target.parentElement.parentElement.querySelector(
        "#product-quantity"
      );
    const targetedElementClassName = event.target.className;
    //here we are using event.target to get the class name of + and - button to use it

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
      calculateProductTotal(productQuantity); // And here it is for "remove" button
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
// here we are defining the fonction to take elements from Price panel
const calculateProductTotal = (productQuantity) => {
  const productInfo = productQuantity.parentElement.parentElement;
  const productPrice = productInfo.querySelector("strong").innerText;
  let productTotal = productInfo.querySelector(".product-line-price");
  const totalPrice = productPrice * productQuantity.innerText;
  productTotal.innerText = totalPrice.toFixed(2);
};
// And here we are defining the fonction to change Price panel
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
