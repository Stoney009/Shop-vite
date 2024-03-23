import { renderCategory } from "../App/category";
import { renderProduct } from "../App/product";
import { categories, products } from "./data";

const initialRender = () => {
  renderCategory(categories);
  renderProduct(products);
};
export default initialRender;
