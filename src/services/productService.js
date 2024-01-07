import axios from "axios";

export default class ProductService {
    getProducts() {
      return axios.get("https://dummyjson.com/products")
        .then((response) => {
          console.log(response); 
          return response;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          throw error;
        });
    }
    getProductById(id) {
      return axios.get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          console.log(response); 
          return response;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          throw error;
        });
    }
  }
