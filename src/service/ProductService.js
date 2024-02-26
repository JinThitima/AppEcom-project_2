import http from "../http-common.js";

const getAll = () => {
  return http.get("/product");
};

const get = (id) => {
  return http.get("/product/" + id);
};

const create = (product) => {
  return http.post("/product", product);
};

const deleteProduct = (id) => {
  return http.delete("/product/" + id);
};

const updateProduct = (id, product) => {
  return http.put("/product/" + id, product);
};

const ProductService = {
  getAll,
  get,
  create,
  deleteProduct,
  updateProduct,
};

export default ProductService;