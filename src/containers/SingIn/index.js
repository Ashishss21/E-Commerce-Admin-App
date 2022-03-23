import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const SingIn = () => {
  return (
    <Layout>
      <Container
        style={{
          border: "2px solid #000",
          marginTop: "150px",
          padding: "50px",
        }}
      >
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email"
                placeholder="Enter your email"
                value=""
                type="text"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Enter your password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <div className="d-grid gap-2 mt-3">
                <Button variant="outline-info" size="lg" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SingIn;
