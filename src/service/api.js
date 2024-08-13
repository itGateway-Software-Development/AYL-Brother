// const url = "https://admin.romanticunderwear.com/api/v1/";
const url = "http://localhost:8000/api/v1/";

const api = {
  login: url + "login",
  register: url + "register",
  test: url + "test",
  order: url + "order",
  categories: url + "categories",
  products: url + "products",
  product: url + "products/",
  randomproduct: url + "get-random-products",
  searchProducts: url + "search-products"
};

export default api;
