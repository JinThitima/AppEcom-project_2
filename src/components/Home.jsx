import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../assets/react.svg";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <MainLayout>
      <center>
        <div class="container mt-4 mb-4">
          <br />
          <img src="../images/banner.gif" alt="" style={{ width: "100%" }} />
        </div>
      <footer>
        <p>&copy;COPY PATTANATANA CO., LTD.</p>
      </footer>
      </center>
      
    </MainLayout>
  );
}

export default Home;
