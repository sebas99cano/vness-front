import React from "react";
import { Helmet } from "react-helmet";
import { loginInformativeMessages } from "../../../helpers/messages/informativeMessages";
import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "./FormLogin";

const login = () => {
  return (
    <>
      <Helmet>
        <title>{loginInformativeMessages.LOGIN_TITLE}</title>
        <link rel="canonical" href={loginInformativeMessages.LOGIN_CANONICAL} />
      </Helmet>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }} style={{ marginTop: "25vh" }}>
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default login;
