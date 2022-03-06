import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const FormLogin = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Inicio e sesión</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Correo o usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo o usuario"
              autoComplete="nope"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              autoComplete="nope"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled>
            Ingresar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormLogin;
