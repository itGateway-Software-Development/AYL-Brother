import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getProducts = () => {
  const products = ref([]);
  const error = ref("");

  let getProduct = async () => {
    try {
      let response = await axios.get(api.products);
      products.value = response.data.products;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { products, error, getProduct };
};

export default getProducts;
