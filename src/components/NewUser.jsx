import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const NewUser = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = (e) => {
    e.preventDefault();
    console.log(user);
    UserService.create(user)
      .then((res) => {
        swal({
          icon: "success",
          text: "เพิ่มข้อมูลเเล้วจ้าาา",
          title: "ผลการดำเนินการ",
        });
        navigate("/UserAdmin");
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainLayout>
      <center>
        <div className="container mt-4 mb-4">
          <h3>
            <b>Add User</b>
          </h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={saveUser}>
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
                  เพศ
                </label>
                <div className="col-8">
                  <select
                    type="select"
                    className="form-select"
                    name="sex"
                    id="sex"
                    onChange={handleInputChange}
                  >
                    <option>เลือกเพศ</option>
                    <option>ผู้ชาย</option>
                    <option>ผู้หญิง</option>
                  </select>
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
                  รหัสผ่าน
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="xxxxxx"
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
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
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

export default NewUser