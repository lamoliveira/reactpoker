import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/knvH0T7.jpg">
      <h1>Click-Game</h1>
      <h2>You can choose what kind of image you want to play</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Puppies Game!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Choose Play to enjoy our memory game
          </p>
          <p>
            Choose Discover to see other puppies you'd like to meet
          </p>
          <p>
            Choose Search to find beautiful pictures of your prefered breed
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
