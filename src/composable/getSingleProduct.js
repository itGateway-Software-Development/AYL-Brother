import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getSingleProduct = () => {
  const product = ref([]);
  const error = ref("");

  let load = async (id) => {
    try {
      let response = await axios.get(api.product + id);

      product.value = response.data.product;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { product, error, load };
};

export default getSingleProduct;
