import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const NewProduct=() => {
  let navigate = useNavigate();
  let [product, setProduct] = useState({});

   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setProduct({ ...product, [name]: value });
   };
  const saveProduct = (e) => {
    e.preventDefault();
    console.log(product);
     ProductService.create(product)
       .then((res) => {
         swal({
           icon: "success",
           text: "เพิ่มข้อมูลเเล้วจ้าาา",
           title: "ผลการดำเนินการ",
         });
         navigate("/ProductAdmin");
       })
       .catch((e) => console.log(e));
  };
  
  return (
    <MainLayout>
      <center>
        <div className="container mt-4 mb-4">
          <h3>
            <b>Add Product</b>
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
                  Model
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    id="model"
                    placeholder="รุ่น"
                    onChange={handleInputChange}
                  />
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
                    placeholder="สีของสินค้า"
                    onChange={handleInputChange}
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
                    placeholder="หน่วยสินค้า"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Images
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="images"
                    id="images"
                    placeholder="img.png"
                    onChange={handleInputChange}
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
}

export default NewProduct;
