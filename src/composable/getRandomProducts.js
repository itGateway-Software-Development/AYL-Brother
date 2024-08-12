import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getRandomProducts = () => {
  const randomProducts = ref([]);
  const err = ref("");

  let loadRandom = async () => {
    try {
      let response = await axios.get(api.randomproduct);
      randomProducts.value = response.data.products;
      // console.log(response);
    } catch (err) {
      err.value = err.message;
    }
  };

  return { randomProducts, err, loadRandom };
};

export default getRandomProducts;
