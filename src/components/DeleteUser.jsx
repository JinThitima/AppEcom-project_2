import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserService from "../service/UserService";
import swal from "sweetalert";

const DeleteUser = () => {
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
        UserService.deleteUser(id)
          .then((res) => navigate("/UserAdmin"))
          .catch((e) => console.log(e));
      } else {
        // กลับไปหน้า Product
        navigate("/UserAdmin");
      }
    });
  };
  useEffect(() => {
    confirmDelete();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">Delete User</h1>
      <hr />
    </MainLayout>
  );
};

export default DeleteUser