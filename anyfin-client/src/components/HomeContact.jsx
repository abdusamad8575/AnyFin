import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeContact = () => {
  return (
    <section className="home-contact-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#333' }}>
            Get in Touch
          </h2>
          <p className="lead" style={{ color: '#666' }}>
            Have a question or need assistance? Our expert team is here to help.
          </p>
        </div>
        <Row className="align-items-center justify-content-center">
          <Col md={8} lg={6}>
            <div
              className="contact-image"
              style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver_23-2148796076.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid)',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Col>
          <Col md={8} lg={6} className="mt-5 mt-lg-0">
            <div className="text-center">
              <p className="lead mb-4" style={{ color: '#666' }}>
                We're here to assist you with any questions or support you need. Feel free to reach out to us anytime!
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="fw-medium"
                style={{
                  backgroundColor: '#0077b6',
                  borderColor: '#0077b6',
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContact;
