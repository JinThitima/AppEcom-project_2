import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OrderService from "../service/OrderService";
import swal from "sweetalert";

const QuotationDel = () => {
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
        OrderService.deleteOrder(id)
          .then((res) => navigate("/QuotationAdmin"))
          .catch((e) => console.log(e));
      } else {
        // กลับไปหน้า Product
        navigate("/QuotationAdmin");
      }
    });
  };
  useEffect(() => {
    confirmDelete();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">Delete Quotation</h1>
      <hr />
    </MainLayout>
  );
};

export default QuotationDel