import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Noticias = () => {
  return (
    <Container className="my-5">

      {/* Título da Página */}
      <h2 className="fw-bold mb-4 text-center">Notícias</h2>

      {/* Subtítulo */}
      <p className="text-center mb-5">
        Acompanhe as novidades, eventos e comunicados importantes da UNIESP.
      </p>

      <Row className="g-4">

        {/* Notícia 1 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg"
              style={{ objectFit: 'cover', height: '230px' }}
            />
            <Card.Body>
              <Card.Title>UNIESP inaugura novo laboratório de inovação</Card.Title>
              <Card.Text>
                Novo espaço tecnológico dedicado a pesquisas, startups acadêmicas e projetos integradores.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Publicado em 20/11/2025
            </Card.Footer>
          </Card>
        </Col>

        {/* Notícia 2 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
              style={{ objectFit: 'cover', height: '230px' }}
            />
            <Card.Body>
              <Card.Title>Semana Acadêmica reúne estudantes e profissionais</Card.Title>
              <Card.Text>
                Evento reuniu mais de 500 participantes em palestras, workshops e atividades práticas.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Publicado em 12/11/2025
            </Card.Footer>
          </Card>
        </Col>

        {/* Notícia 3 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
              style={{ objectFit: 'cover', height: '230px' }}
            />
            <Card.Body>
              <Card.Title>Projeto social da UNIESP recebe reconhecimento</Card.Title>
              <Card.Text>
                Ações de inclusão social beneficiaram dezenas de famílias e foram premiadas no Estado.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Publicado em 05/11/2025
            </Card.Footer>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Noticias;
