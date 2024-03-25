import { products } from "../core/data";
import { cartItemGroup, productGroup, productTemplate } from "../core/selector";
import {
  calculateCartCostTotal,
  countCartItem,
  createCart,
  updateCartItemCount,
  updateCartTotal,
} from "./cart";

export const createProduct = (product) => {
  const template = productTemplate.content.cloneNode(true);
  template
    .querySelector(".product-card")
    .setAttribute("product-id", product.id);
  template.querySelector(".product-img").src = product.image;
  template.querySelector(".product-title").innerText = product.title;
  template.querySelector(".product-description").innerText =
    product.description;
  template.querySelector(
    ".product-rating"
  ).innerText = `(${product.rating.rate} / ${product.rating.count})`;
  template.querySelector(".product-price").innerText = product.price;

  let star = "";
  for (let i = 1; i <= 5; i++) {
    star += `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-4 h-4 ${
      i <= Math.round(product.rating.rate) ? `fill-gray-700` : `fill-gray-400`
    }"
  >
    <path
      fill-rule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clip-rule="evenodd"
    />
  </svg>`;
  }
  template.querySelector(".product-star").innerHTML = star;
  const isExistedInCart = cartItemGroup.querySelector(
    `[cart-product-id='${product.id}']`
  );
  if (isExistedInCart) {
    template
      .querySelector(".product-add-cart-btn")
      .setAttribute("disabled", true);
    template.querySelector(".product-add-cart-btn").innerText = "";
    template.querySelector(".product-add-cart-btn").innerText = "Added";
    template
      .querySelector(".product-add-cart-btn")
      .classList.add("bg-gray-600");
    template.querySelector(".product-add-cart-btn").classList.add("text-white");
  }

  return template;
};

export const renderProduct = (products) => {
  productGroup.innerHTML = "";
  products.forEach((el) => productGroup.append(createProduct(el)));
};

export const handleProductGroup = (e) => {
  if (e.target.classList.contains("product-add-cart-btn")) {
    const currentBtn = e.target;
    const currentProductCard = e.target.closest(".product-card");
    const currentProductCardId = parseInt(
      currentProductCard.getAttribute("product-id")
    );
    const currentProduct = products.find(
      (el) => el.id === currentProductCardId
    );
    console.log(currentProduct);
    cartItemGroup.append(createCart(currentProduct, 1));
    updateCartItemCount();
    updateCartTotal();
    currentBtn.setAttribute("disabled", true);
    currentBtn.innerText = "";
    currentBtn.innerText = "Added";
    currentBtn.classList.add("bg-gray-600");
    currentBtn.classList.add("text-white");
  }
};
