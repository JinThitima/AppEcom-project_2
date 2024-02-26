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
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {product.map((menu) => (
          <ProductCard menu={menu} />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <img
              src={"../images/" + props.menu.images}
              alt=""
              style={{ width: "100%" }}
            />
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              <p>Model : {props.menu.model}</p>
              <p>Color : {props.menu.color}</p>
              <h6>ประเภทสินค้า : {props.menu.category}</h6>
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Product;
