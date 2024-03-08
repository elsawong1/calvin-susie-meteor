import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Instagram, Twitter, Facebook } from 'react-bootstrap-icons';

const FooterMenu = () => (

  <Container>

    <Row id="icons" className="justify-content-center mb-3">
      <Col className="d-flex justify-content-center p-1">
        <Facebook className=" me-3 mb-1" />
        <Twitter className=" me-3 mb-1" />
        <Instagram className=" me-3 mb-1" />
      </Col>
    </Row>

    <Col className="d-flex justify-content-center p-1">
      Subscribe and stay on top of our latest news and promotions
    </Col>
    <Row className="d-flex justify-content-center py-4">
      <Col sm="auto">
        <input className="me-2 form-control-sm" placeholder="Email" type="text" id="email" />
      </Col>
      <Col sm="auto">
        <Button className="btn-sm" variant="dark">Join</Button>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col>
        <strong>Where to Next</strong><br />
        <br />
        Raw Food<br />
        About<br />
        Shop<br />
        Blog<br />
        Press<br />
        Contact<br />
      </Col>
      <Col>
        <strong> Find us in Honolulu </strong><br />
        <br />
        3109 Waialae Avenue <br /> Honolulu, HI 96816<br /><br />
        WAIALAE: <br /> Sunday: 10am - 5pm <br /> Monday: 10am - 5pm<br /> Tuesday: CLOSED <br /> Wednesday: 10am - 6pm <br /> Thursday: 10am - 6pm <br /> Friday: 10am - 6pm <br /> Saturday: 10am - 5pm
        <br /><br />
        Phone: (808) 734-2320 <br /> Email: info@calvinandsusie.com
      </Col>
      <Col>
        <strong> Find us in Kailua </strong><br /> <br />
        315 Uluniu St #105 <br /> Kailua, HI 96734<br /><br />
        KAILUA: <br /> Sunday: 9am - 3pm <br /> Monday: 9am - 5pm <br /> Tuesday: 9am - 3pm <br /> Wednesday: 9am - 5pm<br /> Thursday: 9am - 3pm <br /> Friday: 9am - 5pm <br /> Saturday: 9am - 3pm<br /><br />
        Phone: (808) 262-2320 <br /> Email: info@calvinandsusie.com
      </Col>
    </Row>

  </Container>
);

export default FooterMenu;
