import http from "../http-common.js";

const getAll = () => {
  return http.get("/user");
};

const get = (id) => {
  return http.get("/user/" + id);
};

const create = (user) => {
  return http.post("/user", user);
};

const deleteUser = (id) => {
  return http.delete("/user/" + id);
};

const updateUser = (id, user) => {
  return http.put("/user/" + id, user);
};

const UserService = {
  getAll,
  get,
  create,
  deleteUser,
  updateUser,
};

export default UserService;
