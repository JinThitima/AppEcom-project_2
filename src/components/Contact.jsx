import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainLayout from "../layouts/MainLayout";
const leftAlignedStyle = {
  textAlign: "left",
};
const Contact = () => {
  return (
    <MainLayout>
      <div className="container mt-4 mb-4">
        <h3>
          <b>ช่องทางการติดต่อ</b>
        </h3>
        <hr />
        <center>
          <Container>
            <Row>
              <Col className="mt-4 mb-4">
                <center>
                  <video className="w-100" autoPlay loop muted>
                    <source
                      src="../images/video1.mp4"
                      type="video/mp4"
                      allowFullScreen
                    />
                  </video>
                </center>
              </Col>
              <Col className="mt-4 mb-4">
                <Card style={{ width: "50rem" }}>
                  <Card.Body>
                    <div class="alert alert-primary" role="alert">
                      บริษัท พัฒนธนา จำกัด
                    </div>
                    <Card.Text>
                      <p className="user-select-all" style={leftAlignedStyle}>
                        ที่อยู่ (สำนักงานใหญ่) :
                        <a href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%98%E0%B8%99%E0%B8%B2+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+(%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88)/@13.8018186,100.0649817,16z/data=!4m6!3m5!1s0x30e2e73da59b4ce9:0xfc73d2999e971cbc!8m2!3d13.7978515!4d100.0672936!16s%2Fg%2F11kyw30d03?entry=ttu">
                          74 หมู่ที่ 3 ตำบลห้วยจรเข้ อำเภอเมือง จังหวัดนครปฐม
                          73000
                        </a>
                      </p>
                      <p className="user-select-all" style={leftAlignedStyle}>
                        ที่อยู่ (สาขา 1) :
                        <a href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%98%E0%B8%99%E0%B8%B2+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+(%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B21)/@13.8018186,100.0649817,16z/data=!4m7!3m6!1s0x30e2e5001c4843ab:0xd4b3545f93246b27!8m2!3d13.8057859!4d100.0729696!15sCjjguJrguKPguLTguKnguLHguJcg4Lie4Lix4LiS4LiZ4LiY4LiZ4LiyIOC4iOC4s-C4geC4seC4lJIBCXdhcmVob3VzZeABAA!16s%2Fg%2F11vs7k992p?entry=tts">
                          1 หมู่ที่ 1 ตำบลห้วยจรเข้ อำเภอเมือง จังหวัดนครปฐม
                          73000
                        </a>
                      </p>
                      <p className="user-select-auto" style={leftAlignedStyle}>
                        เบอร์โทร : <a href="tel:+66948946555">0948946555</a>
                      </p>
                      <p className="user-select-none" style={leftAlignedStyle}>
                        Email :{" "}
                        <a href="mailto:pattanatana@gmail.com">
                          pattanatana@gmail.com
                        </a>
                      </p>
                      <p className="user-select-none" style={leftAlignedStyle}>
                        Youtube :
                        <a href="https://www.youtube.com/@PEDKANCHANG">
                          PEDKANCHANG
                        </a>
                      </p>
                      <p className="user-select-none" style={leftAlignedStyle}>
                        Facebook :
                        <a href="https://www.facebook.com/p/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%98%E0%B8%99%E0%B8%B2-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-100076071543395/?paipv=0&eav=AfZR3SQrxQLEUFqAseSl-pFPpz14PMzR3OLrZDOw88pm6Fppu2DbUgg_JAhEpiGjbco&_rdr">
                          บริษัท พัฒนธนา จำกัด
                        </a>
                      </p>
                      <p className="user-select-none" style={leftAlignedStyle}>
                        @Line :{" "}
                        <a href="https://line.me/R/ti/p/@tju4400t?oat_content=url">
                          PTN@PEDKANCHANG
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    </MainLayout>
  );
};

export default Contact;
