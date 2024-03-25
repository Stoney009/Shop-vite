import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selector";
import { renderProduct } from "./product";

export const createCategory = (categoryName) => {
  const template = categoryTemplate.content.cloneNode(true);
  template.querySelector(".cart-btn").innerText = categoryName;
  return template;
};
export const renderCategory = (categories) => {
  categories.forEach((el) => categoryGroup.append(createCategory(el)));
};

export const handleCategoryGroup = (e) => {
  if (e.target.classList.contains("cart-btn")) {
    const currentCategory = e.target.innerText;
    const currentCategoryBtn = e.target;
    document.querySelector(".cart-btn.active")?.classList.remove("active");
    currentCategoryBtn.classList.add("active");

    renderProduct(
      products.filter(
        (el) => el.category === currentCategory || currentCategory === "All"
      )
    );
  }
};
