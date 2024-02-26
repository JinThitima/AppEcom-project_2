import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import OrderService from "../service/OrderService";

const Quotation = () => {
  const [order, setOrder] = useState([]);

  const fetchOrder = () => {
    OrderService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setOrder(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <MainLayout>
      <h1 className="mt-3">ใบเสนอราคา</h1>
      <hr />
      {order.map((menu) => (
        <OrderCard menu={menu} />
      ))}
    </MainLayout>
  );
};
const OrderCard = (props) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <table class="table table-hover" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>
                {props.menu.name + " "}
                {props.menu.lastname}
              </td>
              <td style={{ width: "20%" }}>{props.menu.tel}</td>
              <td style={{ width: "20%" }}>{props.menu.createdAt}</td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/order/" + props.menu._id}
                  className="btn btn-primary"
                >
                  Learn More
                </NavLink>
              </td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/Quotation/delete/" + props.menu._id}
                  className="btn btn-danger"
                >
                  Delete
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Quotation;
