import React from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
function Product() {
  return (
    <MainLayout>
      <center>
        <div className="container mt-4 mb-4">
          <h3>
            <b>ระบบจัดการหลังบ้าน</b>
          </h3>
          <hr />
          <img src="../images/banner1.gif" alt="" style={{ width: "60%" }} />
        </div>
        <center>
          <table class="table" style={{ width: "100%", textAlign: "center" }}>
            <tbody style={{ width: "100%", textAlign: "center" }}>
              <tr>
                <td style={{ width: "33.33%", textAlign: "center" }}>
                  <Card
                    style={{ width: "20rem" }}
                    className="alert alert-primary"
                  >
                    <Card.Body>
                      <Card.Title>Product</Card.Title>0
                      <Card.Subtitle mb="2" text="muted">
                        ระบบจัดการสินค้า
                      </Card.Subtitle>
                      <br />
                      <NavLink
                        to={"/ProductAdmin/"}
                        className="btn btn-success"
                      >
                        All Product
                      </NavLink>{" "}
                      <NavLink to={"/product/new"} className="btn btn-primary">
                        Add Product
                      </NavLink>{" "}
                    </Card.Body>
                  </Card>
                </td>
                <td style={{ width: "33.33%", textAlign: "center" }}>
                  <Card
                    style={{ width: "20rem" }}
                    className="alert alert-warning"
                  >
                    <Card.Body>
                      <Card.Title>USER</Card.Title>
                      <Card.Subtitle mb="2" text="muted">
                        ระบบจัดการผู้ใช้งาน
                      </Card.Subtitle>
                      <br />
                      <NavLink to={"/UserAdmin/"} className="btn btn-success">
                        All User
                      </NavLink>{" "}
                      <NavLink to={"/user/new"} className="btn btn-primary">
                        Add User
                      </NavLink>{" "}
                    </Card.Body>
                  </Card>
                </td>
                <td style={{ width: "33.33%", textAlign: "center" }}>
                  {" "}
                  <Card
                    style={{ width: "20rem" }}
                    className="alert alert-danger"
                  >
                    <Card.Body>
                      <Card.Title>Quotation</Card.Title>
                      <Card.Subtitle mb="2" text="muted">
                        ระบบจัดการใบเสนอราคา
                      </Card.Subtitle>
                      <br />
                      <NavLink
                        to={"/QuotationAdmin/"}
                        className="btn btn-success"
                      >
                        All Quotation
                      </NavLink>{" "}
                    </Card.Body>
                  </Card>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </center>
    </MainLayout>
  );
}

export default Product;
