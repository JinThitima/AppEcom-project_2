import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OrderService from "../service/OrderService";

const OrderDoment = () => {
  let params = useParams();
  let id = params.id;
  let [Order, setOrder] = useState({});

  const fetchUser = (id) => {
    OrderService.get(id)
      .then((res) => {
        // console.log(re)
        setOrder(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchUser(id);
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">ข้อมูลผู้ใช้งาน</h1>
      <hr />
      <br />
      <h4>
        <div className="row mt-3">
          <div className="col-md-12 border p-4">
            <p>
              <label htmlFor="" className="lblStyle">
                ชื่อ - นามสกุล:{" "}
              </label>{" "}
              {Order.name + " "}
              {Order.lastname}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                ที่อยู่ปัจจุบัน :{" "}
              </label>{" "}
              {Order.address}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                โทร :{" "}
              </label>{" "}
              {Order.tel}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                Email :{" "}
              </label>{" "}
              {Order.email}
            </p>
          </div>
        </div>
            <h1 className="mt-3">รายการขอใบเสนอราคา</h1>
            <hr />
            {Order.items &&
              Order.items.map((i) => (
                <div className="alert alert-info">
                  <p>รายการ : {i.product}</p>
                  <p>จำนวน : {i.qty}</p>
                  <p>หมายเหตุ : {i.note}</p>
                </div>
              ))}
      </h4>
    </MainLayout>
  );
};

export default OrderDoment;
