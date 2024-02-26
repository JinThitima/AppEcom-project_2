import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import ProductService from "../service/ProductService";

const Product = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = () => {
    ProductService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">Product All</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Product
          </NavLink>
        </div>
      </div>
      {product.map((menu) => (
        <ProductCard menu={menu} />
      ))}
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>
                <img
                  src={"../images/" + props.menu.images}
                  alt=""
                  style={{ width: "70%" }}
                />
              </td>
              <td style={{ width: "20%" }}>{props.menu.name}</td>
              <td style={{ width: "20%" }}>{props.menu.model}</td>
              <td style={{ width: "10%" }}>{props.menu.brand}</td>
              <td style={{ width: "10%" }}>{props.menu.price}</td>
              <td style={{ width: "10%" }}>
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              </td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/product/edit/" + props.menu._id}
                  className="btn btn-warning"
                >
                  Edit
                </NavLink>
              </td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/product/delete/" + props.menu._id}
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

export default Product;
