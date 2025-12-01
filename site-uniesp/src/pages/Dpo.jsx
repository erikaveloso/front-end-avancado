import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const Dpo = () => {
  return (
    <Container className="py-4">

      <h1 className="fw-bold mb-4">DPO & LGPD</h1>

      <p className="text-muted">
        Informações sobre proteção de dados, transparência institucional e o papel do
        Encarregado (DPO) segundo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>

      <Row className="g-4">

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="LGPD Segurança"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">O que é LGPD?</Card.Title>
              <Card.Text className="text-muted">
                A Lei Geral de Proteção de Dados regula o uso, coleta e tratamento
                de dados pessoais, garantindo mais segurança e privacidade.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Papel do DPO"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Papel do DPO</Card.Title>
              <Card.Text className="text-muted">
                O Encarregado de Dados (DPO) atua como ponte entre a instituição,
                os titulares de dados e a Autoridade Nacional de Proteção de Dados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Transparência"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Transparência</Card.Title>
              <Card.Text className="text-muted">
                Conheça as práticas de governança, segurança e privacidade adotadas
                para proteger os dados acadêmicos e administrativos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Dpo;
