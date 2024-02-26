import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserService from "../service/UserService";

const UserDoment = () => {
  let params = useParams();
  let id = params.id;
  let [User, setUser] = useState({});

  const fetchUser = (id) => {
    UserService.get(id)
      .then((res) => {
        // console.log(re)
        setUser(res.data.data);
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
              {User.name + " "}
              {User.lastname}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                ที่อยู่ปัจจุบัน :{" "}
              </label>{" "}
              {User.address}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                เพศ :{" "}
              </label>{" "}
              {User.sex}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                Email :{" "}
              </label>{" "}
              {User.email}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                Tel :{" "}
              </label>{" "}
              {User.tel}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                Password :{" "}
              </label>{" "}
              {User.password}
            </p>
          </div>
        </div>
      </h4>
    </MainLayout>
  );
};

export default UserDoment;
