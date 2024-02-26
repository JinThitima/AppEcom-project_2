import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import ProductAdmin from "./components/ProductAdmin";
import UserAdmin from "./components/UserAdmin";
import NewUser from "./components/NewUser";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import Quotation from "./components/Quotation";
import QuotationEdit from "./components/QuotationEdit";
import QuotationDel from "./components/QuotationDel";
import QuotationAdmin from "./components/QuotationAdmin";
import UserDoment from "./components/UserDoment";
import OrderDoment from "./components/OrderDoment";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/new" element={<NewProduct />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product/edit/:id" element={<EditProduct />} />
      <Route path="/product/delete/:id" element={<DeleteProduct />} />
      <Route path="/ProductAdmin" element={<ProductAdmin />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Quotation" element={<Quotation />} />
      <Route path="/UserAdmin" element={<UserAdmin />} />
      <Route path="/user/:id" element={<UserDoment />} />
      <Route path="/user/new" element={<NewUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
      <Route path="/QuotationAdmin" element={<QuotationAdmin />} />
      <Route path="/order/:id" element={<OrderDoment />} />
      <Route path="/Quotation/edit/:id" element={<QuotationEdit />} />
      <Route path="/Quotation/delete/:id" element={<QuotationDel />} />
    </Routes>
  );
}
export default App;
