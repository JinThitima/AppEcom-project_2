import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";
import OrderService from "../service/OrderService";
import swal from "sweetalert";

const Quotation = () => {
  let navigate = useNavigate();
  let [order, setOrder] = useState({});
  let [products1, setProducts1] = useState([]);
  let [products2, setProducts2] = useState([]);
  let [products3, setProducts3] = useState([]);

   const fetchProduct = () => {
     ProductService.getAll()
       .then((res) => {
         console.log(res.data.data);
         setProducts1(res.data.data);
         setProducts2(res.data.data);
         setProducts3(res.data.data);
       })
       .catch((e) => {
         console.log(e);
       });
   };

   useEffect(() => {
     fetchProduct();
   }, []);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };
  const saveOrder = (e) => {
    e.preventDefault();
    console.log(order);
    OrderService.create(order)
      .then((res) => {
        swal({
          icon: "success",
          text: "ส่งใบเสนอราคาเรียบร้อย รอ Admin ตอบกลับที่หน้ารีวิวจ้าาา",
          title: "ผลการดำเนินการ",
        });
        navigate("/Quotation");
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainLayout>
      <center>
        <div className="container mt-4 mb-4">
          <h3>
            <b>ขอใบเสนอราคา</b>
          </h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={saveOrder}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ชื่อ
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  นามสกุล
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="lastName"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ที่อยู่
                </label>
                <div className="col-8">
                  <textarea
                    type="textarea"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="ที่อยู่ปัจจุบัน"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Email
                </label>
                <div className="col-8">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="xxxxxx@gmail.com"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  เบอร์โทร
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="tel"
                    id="tel"
                    placeholder="xxx-xxxx-xxxx"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <hr />
              <h3>
                <b>รายการสินค้าที่ขอใบเสนอราคา</b>
              </h3>
              <table class="table table-hover" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "10%" }}>
                      #
                    </th>
                    <th scope="col" style={{ width: "40%" }}>
                      รายการ
                    </th>
                    <th scope="col" style={{ width: "20%" }}>
                      จำนวน
                    </th>
                    <th scope="col" style={{ width: "30%" }}>
                      หมายเหตุ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "10%" }}>1</td>
                    <td style={{ width: "40%" }}>
                      <div className="">
                        <select
                          type="select"
                          className="form-select"
                          name="product1"
                          id="product1"
                          onChange={handleInputChange}
                        >
                          <option>--เลือก--</option>
                          {products1.map((product) => (
                            <option value={product.name}>{product.name}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td style={{ width: "20%" }}>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          name="qty1"
                          id="qty1"
                          placeholder="0"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                    <td style={{ width: "30%" }}>
                      <div className="">
                        <textarea
                          type="textarea"
                          className="form-control"
                          name="note1"
                          id="note1"
                          placeholder="หมายเหตุเพิ่มเติม"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "10%" }}>2</td>
                    <td style={{ width: "40%" }}>
                      <div className="">
                        <select
                          type="select"
                          className="form-select"
                          name="product2"
                          id="product2"
                          onChange={handleInputChange}
                        >
                          <option>--เลือก--</option>
                          {products2.map((product) => (
                            <option value={product.name}>{product.name}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td style={{ width: "20%" }}>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          name="qty2"
                          id="qty2"
                          placeholder="0"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                    <td style={{ width: "30%" }}>
                      <div className="">
                        <textarea
                          type="textarea"
                          className="form-control"
                          name="note2"
                          id="note2"
                          placeholder="หมายเหตุเพิ่มเติม"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "10%" }}>3</td>
                    <td style={{ width: "40%" }}>
                      <div className="">
                        <select
                          type="select"
                          className="form-select"
                          name="product3"
                          id="product3"
                          onChange={handleInputChange}
                        >
                          <option>--เลือก--</option>
                          {products3.map((product) => (
                            <option value={product.name}>{product.name}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td style={{ width: "20%" }}>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          name="qty3"
                          id="qty3"
                          placeholder="0"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                    <td style={{ width: "30%" }}>
                      <div className="">
                        <textarea
                          type="textarea"
                          className="form-control"
                          name="note3"
                          id="note3"
                          placeholder="หมายเหตุเพิ่มเติม"
                          onChange={handleInputChange}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mb-3 row">
                <div className="">
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

export default Quotation;
