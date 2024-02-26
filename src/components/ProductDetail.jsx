import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../service/ProductService";
import logo from "../assets/react.svg";

const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  let [Product, setProduct] = useState({});

  const fetchProduct = (id) => {
    ProductService.get(id)
      .then((res) => {
        // console.log(re)
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">{Product.name}</h1>
      <hr />
      <br />
      <div className="row mt-3">
        <div className="col-md-4">
          <img
            src={"../images/" + Product.images}
            alt=""
            style={{ width: "100%" }}
          />{" "}
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              รหัสสินค้า:{" "}
            </label>{" "}
            {Product.code}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              ชื่อสินค้า:{" "}
            </label>{" "}
            {Product.name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              ประเภทสินค้า:{" "}
            </label>{" "}
            {Product.category}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              รุ่น:{" "}
            </label>{" "}
            {Product.model}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              แบรนด์:{" "}
            </label>{" "}
            {Product.brand}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              สี:{" "}
            </label>{" "}
            {Product.color}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              ขนาด:{" "}
            </label>{" "}
            {Product.size}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              บรรจุ :{" "}
            </label>{" "}
            1 {Product.unit}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              รายละเอียดเพิ่มเติม:{" "}
            </label>{" "}
            {Product.detail}
          </p>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <hr />
        <br />
        {Product.reviews &&
          Product.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"👍".repeat(r.star)}</p>
              <p>{r.message}</p>
            </div>
          ))}
      </div>{" "}
    </MainLayout>
  );
};

export default ProductDetail;
