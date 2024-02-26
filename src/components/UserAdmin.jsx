import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import UserService from "../service/UserService"

const UserAdmin = () => {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    UserService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">User All</h1>
      <hr />
      <div className="row">
          <div className="col d-flex justify-content-end">
            <NavLink to="/user/new" className="btn btn-success">
              Add a User
            </NavLink>
          </div>
      </div>
        {user.map((menu) => (
          <UserCard menu={menu} />
        ))}
    </MainLayout>
  );
};
const UserCard = (props) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <table class="table table-hover" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>
                {props.menu.name + "  "}
                {props.menu.lastname}
              </td>
              <td style={{ width: "40%" }}>{props.menu.address}</td>
              <td style={{ width: "10%" }}>{props.menu.sex}</td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/user/" + props.menu._id}
                  className="btn btn-primary"
                >
                  Learn More
                </NavLink>
              </td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/user/edit/" + props.menu._id}
                  className="btn btn-warning"
                >
                  Edit
                </NavLink>
              </td>
              <td style={{ width: "10%" }}>
                <NavLink
                  to={"/user/delete/" + props.menu._id}
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


export default UserAdmin;
