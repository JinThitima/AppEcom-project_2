import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../service/ProductService";
import swal from "sweetalert";

const DeleteProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  const confirmDelete = () => {
    swal({
      icon: "warning",
      dangerMode: true,
      title: "Confirm",
      text: "ยืนยันการลบข้อมูลหรือไม่ ?",
      buttons: true,
    }).then((confirm) => {
      if (confirm) {
        // call delete service
        ProductService.deleteProduct(id)
          .then((res) => navigate("/ProductAdmin"))
          .catch((e) => console.log(e));
      } else {
        // กลับไปหน้า Product
        navigate("/ProductAdmin");
      }
    });
  };
  useEffect(() => {
    confirmDelete();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">Delete Product</h1>
      <hr />
    </MainLayout>
  );
};

export default DeleteProduct;
