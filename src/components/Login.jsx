import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function BasicExample() {
  return (
    <MainLayout>

    <div class="container mt-4 mb-4">
      <Card style={{ width: "80rem" }} border="dark">
        <center>
          <Card.Header>
            <h3>เข้าสู่ระบบ</h3>
          </Card.Header>
        </center>
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <center>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
              </center>
            </Form>
          </Card.Text>
        </Card.Body>
        <center>
          <Card.Footer className="text-muted">
            มีบัญชี
            <Link to="/Register"> สมัครสมาชิก </Link>
          </Card.Footer>
        </center>
      </Card>
    </div>
    </MainLayout>
  );
}
export default BasicExample;
