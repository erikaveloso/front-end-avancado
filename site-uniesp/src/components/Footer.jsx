import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">UNIESP</h5>
            <p className="mb-0">
              Educação com foco em inovação, impacto social e
              formação de profissionais preparados para os desafios
              de amanhã.
            </p>
          </div>


          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Links úteis</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/a-faculdade" className="text-light text-decoration-none">
                  A Faculdade
                </Link>
              </li>
              <li>
                <Link to="/dpo-lgpd" className="text-light text-decoration-none">
                  DPO &amp; LGPD
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-light text-decoration-none">
                  Notícias
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contato</h5>
            <p className="mb-0">
              Rua Professor Miguel Couto, 120<br />
              João Pessoa - PB
            </p>
            <p className="mb-0">Telefone: (83) 3333-1234</p>
            <p>Email: atendimento@uniesp.edu.br</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © 2025 UNIESP. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
