import Swal from "sweetalert2";
import {
  cartCount,
  cartItemCount,
  cartItemTemplate,
  cartTotal,
} from "../core/selector";

export const createCart = (product, quantity) => {
  const template = cartItemTemplate.content.cloneNode(true);
  template.querySelector(".cart-item-img").src = product.image;
  template.querySelector(".cart-item-title").innerText = product.title;
  template.querySelector(".cart-item-price").innerText = product.price;
  template.querySelector(".cart-quantity").innerText = quantity;

  return template;
};

export const countCartItem = () => {
  const totalItemInCart = document.querySelectorAll(".cart-item");

  return totalItemInCart.length;
};

export const updateCartItemCount = () => {
  const currentTotal = countCartItem();
  cartItemCount.innerText = currentTotal;
  cartCount.innerText = currentTotal;
};

export const calculateCartCostTotal = () => {
  const total = [...document.querySelectorAll(".cart-item-price")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  return total;
};

export const updateCartTotal = () => {
  const total = calculateCartCostTotal();
  cartTotal.innerText = total.toFixed(3);
};

export const handleCartItemGroup = (e) => {
  if (e.target.classList.contains("cart-item-remove")) {
    const currentCart = e.target.closest(".cart-item");
    console.log(currentCart);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        currentCart.remove();
        updateCartItemCount();
        updateCartTotal();
      }
    });
  }
};
