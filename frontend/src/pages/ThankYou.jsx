

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    navigate('/payment');
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank_you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Now Proceed For Payment...</h1>
              <Button className="btn primary__btn w-25" onClick={handlePaymentRedirect}>
                Proceed to Payment
              </Button>
              <br />
              <Button className="btn primary__btn w-25 mt-3">
                <Link to="/home">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default ThankYou;