import React, { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../service/ProductService";

const NewProduct = () => {
 let navigate = useNavigate();
 let params = useParams();
 let id = params.id;
  let [product, setProduct] = useState({
    code:"",
  });

 const fetchProduct = (id) => {
   ProductService.get(id)
     .then((res) => {
       setProduct(res.data.data);
       console.log(res.data.data);
     })
     .catch((e) => console.log(e));
 };

 useEffect(() => {
   fetchProduct(id);
 }, []);

 const handleInputChange = (event) => {
   const { name, value } = event.target;
   setProduct({ ...product, [name]: value });
 };
 const saveProduct = (e) => {
   e.preventDefault();
   ProductService.updateProduct(id, product)
     .then((res) => {
       swal({
         icon: "success",
         text: "แก้ไขข้อมูลเเล้วจ้าาา",
         title: "ผลการดำเนินการ",
       });
       navigate("/ProductAdmin");
     })
     .catch((e) =>
       swal({
         icon: "error",
         text: "Edit failed",
         title: "Result",
       })
     );
 };

  return (
    <MainLayout>
      <center>
        <div className="container mt-4 mb-4">
          <h3>
            <b>Edit Product</b>
          </h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={saveProduct}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Code
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    id="code"
                    placeholder="00000"
                    onChange={handleInputChange}
                    value={product.code}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Name
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="ชื่อสินค้า"
                    onChange={handleInputChange}
                    value={product.name}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Price
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="2500"
                    onChange={handleInputChange}
                    value={product.price}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Category
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    id="category"
                    placeholder="รถเข็นปูน"
                    onChange={handleInputChange}
                    value={product.category}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Model
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    id="model"
                    placeholder="Model"
                    onChange={handleInputChange}
                    value={product.model}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  images
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    id="image"
                    onChange={handleInputChange}
                    value={product.images}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Category
                </label>
                <div className="col-8">
                  <select
                    type="select"
                    className="form-select"
                    name="category"
                    id="category"
                    placeholder="รถเข็นปูน"
                    onChange={handleInputChange}
                    value={product.category}
                  >
                    <option>เลือกประเภทสินค้า</option>
                    <option>รถเข็นปูน</option>
                    <option>รถเข็นของ</option>
                    <option>รถเข็นน้ำ</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Brand
                </label>
                <div className="col-8">
                  <select
                    type="select"
                    className="form-select"
                    name="brand"
                    id="brand"
                    placeholder="ตรา"
                    onChange={handleInputChange}
                    value={product.brand}
                  >
                    <option>เลือกเเบรนด์สินค้า</option>
                    <option>เป็ดการช่าง</option>
                    <option>PTN</option>
                    <option>หางปลาวาฬ</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Color
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="color"
                    id="color"
                    placeholder="สีฟ้า"
                    onChange={handleInputChange}
                    value={product.color}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Size
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="size"
                    id="size"
                    placeholder="125x30x50 ซม."
                    onChange={handleInputChange}
                    value={product.size}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Unit
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="unit"
                    id="unit"
                    placeholder="คัน"
                    onChange={handleInputChange}
                    value={product.unit}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Detail
                </label>
                <div className="col-8">
                  <textarea
                    type="textarea"
                    className="form-control"
                    name="detail"
                    id="detail"
                    placeholder="รายละเอียดเพิ่มเติม"
                    onChange={handleInputChange}
                    value={product.detail}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </center>
    </MainLayout>
  );
};

export default NewProduct;
