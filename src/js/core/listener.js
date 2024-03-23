import { handleCartItemGroup } from "../App/cart";
import { handleCategoryGroup } from "../App/category";
import { handleProductGroup } from "../App/product";
import { cartItemGroup, categoryGroup, productGroup } from "./selector";

const listener = () => {
  categoryGroup.addEventListener("click", handleCategoryGroup);
  productGroup.addEventListener("click", handleProductGroup);
  cartItemGroup.addEventListener("click", handleCartItemGroup);
};
export default listener;
