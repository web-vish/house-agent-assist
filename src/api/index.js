import axios from "axios";

const APIInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});

export const getProperties = async (queryParams) => {
  let queries = "";
  if (queryParams == "active") {
    queries = "status=active";
  }
  if (queryParams == "inactive") {
    queries = "status=inactive";
  }
  try {
    const results = await APIInstance.get(`/properties?${queries}`);
    return results.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const modifyProperties = async ({ id, data }) => {
  console.log("propId, data", id, data);
  try {
    const result = await APIInstance.put(`/properties/${id}`, {
      ...data,
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
