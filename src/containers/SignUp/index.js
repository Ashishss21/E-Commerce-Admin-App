import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const SingUp = () => {
  return (
    <Layout>
      <Container
        style={{
          border: "2px solid #000",
          marginTop: "150px",
          padding: "50px",
        }}
      >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

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

export default SingUp;
