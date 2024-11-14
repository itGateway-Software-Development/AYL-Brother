import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getUpdateData = () => {
  const data = ref([]);
  const error = ref("");

  let getData = async (id, token) => {
    console.log(id);
    try {
      let response = await axios.post(api.getUpdateData, {id}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      });
      data.value = response.data.response;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { data, error, getData };
};

export default getUpdateData;
