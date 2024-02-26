import React from 'react'
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div class="container mt-4 mb-4">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">ประวัติ</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <center>
              <video className="w-50" autoPlay loop muted>
                <source
                  src="../images/video1.mp4"
                  type="video/mp4"
                  allowFullScreen
                />
              </video>
            </center>
            <Card.Title>ประวัติ</Card.Title>
            <Card.Text>
              <p>
                บริษัท พัฒนธนา จำกัด เราคือผู้ผลิตและจำหน่าย รถเข็นปูน รถเข็นของ
                รถเข็นน้ำ และวัสดุอุปกรณ์ก่อสร้างทุกชนิด
                เราคือผู้เชี่ยวชาญในการผลิตด้วยผู้ชำนาญการ
                โดยเราผลิตและจำหน่ายสินค้าภายใต้เเบรนด์เป็ดการช่าง มายาวนานกว่า
                30 ปี สิ่งในปี 2020 ได้มีการเปิดตัวเเบรนด์น้องใหม่ ได้แก่
                เเบรนด์ PTN และ เเบรนด์หางปลาวาฬ เพิ่มเข้ามา
                เพื่อให้ตอบโจทย์ความต้องการของลูกค้ามากยิ่งขึ้น{" "}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </MainLayout>
  );
}

export default About