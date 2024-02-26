import http from "../http-common.js";

const getAll = () => {
  return http.get("/order");
};

const get = (id) => {
  return http.get("/order/" + id);
};

const create = (order) => {
  let orderData = {
    name: order.name,
    lastname: order.lastname,
    address: order.address,
    tel: order.tel,
    email: order.email,
    items: [
      {
        product: order.product1,
        qty: order.qty1,
        note: order.note1,
      },
      {
        product: order.product2,
        qty: order.qty2,
        note: order.note2,
      },
      {
        product: order.product3,
        qty: order.qty3,
        note: order.note3,
      }
    ],
  };
  return http.post("/order", orderData);
};

const deleteOrder = (id) => {
  return http.delete("/order/" + id);
};

const OrderService = {
    getAll,
    get,
    create,
    deleteOrder,
  //   updateProduct,
};

export default OrderService;
