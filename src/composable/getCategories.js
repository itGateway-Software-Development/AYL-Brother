import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getCategories = () => {
  let categories = ref([]);
  let series = ref([]);
  let err = ref("");

  let getData = async () => {
    try {
      let response = await axios.get(api.categories);
      categories.value = response.data.categories;
    } catch (error) {
      err.value = error.message;
      console.log(err.value);
    }
  };
  return { categories, err, getData };
};

export default getCategories;
