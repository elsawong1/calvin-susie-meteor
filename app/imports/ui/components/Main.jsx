import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Main = () => (
  <Container fluid>
    <Col className="grad-background">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Hawaii's Store For Healthy Pets</h1>
    </Col>
    <Col className="ms-3">
      <p>
        We are located in Kaimuki on Waialae Avenue in Honolulu, and on Uluniu Street in beautiful Kailua Town.

      </p>
      <p>We offer the largest selection of premium pet foods in all of Hawaii.

      </p>
      <p>Please come and visit us, and our animal-loving staff will do all they can to help you in any way possible.

      </p>
      <p>All profits from the sales of Calvin & Susie brand of products will go to Calvin & Susie Hawaii Animal Foundation. Please visit<u>CSHAF.org</u> for more information.</p>

      <p id="calvin"> #calvinandsusiefamily</p>
    </Col>
  </Container>
);
export default Main;
