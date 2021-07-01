import React, { useState } from 'react';
import './meeting.css';
import Sketch from 'react-p5'
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const Meeting = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 300).parent(canvasParentRef)
    p5.strokeWeight(2)
    p5.stroke(237, 34, 93);
  }

  const draw = p5 => {
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  }


  return <div className="container">
    <Container>
      <Row>
        <Col md={{ span: 11, offset: 0 }}>&nbsp;</Col>
        <Col md={{ span: 5, offset: 2 }} block>
          <ButtonGroup>
            <Button variant="outline-dark" md={{ span: 6, offset: 0 }} block>Members: Billy and Brian</Button>
            <Button variant="outline-dark" md={{ span: 3, offset: 0 }}>Started: 2pm</Button>
            <Button variant="outline-dark" md={{ span: 3, offset: 0 }}>Ending: 3pm</Button>
          </ButtonGroup>
        </Col>
        <Col md={{ span: 3, offset: 2 }}>
          <Button block size="lg" variant="danger">End Meeting</Button>
        </Col>

        <Col md={{ span: 11, offset: 0 }}>&nbsp;</Col>

        <Col md={{ span: 3, offset: 2 }}>

          <Button href="#" block>White Board</Button>
        </Col>
        <Col md={{ span: 3, offset: 0 }}>
          <Button variant="secondary" href="#" block>Media Viewer</Button>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <ButtonGroup vertical size="lg" style={{ width: "150px", marginTop: "75px" }}>
            <Button variant="dark" >Pencil</Button>
            <Button variant="outline-dark" >Large</Button>
            <Button variant="outline-dark" >Small</Button>
          </ButtonGroup>
        </Col>
        <Col md={{ span: 10, offset: 0 }}>
          <div className='p5'>
            <Sketch setup={setup} draw={draw} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 11, offset: 0 }}>&nbsp;</Col>
        <Col md={{ span: 3, offset: 2 }}>
          <Button variant="secondary" href="#" block>Chat</Button>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <ButtonGroup vertical size="lg" style={{ width: "150px", marginTop: "75px" }}>
            <Button variant="dark" >Snapshot</Button>
            <Button variant="outline-dark" >Save file</Button>
            <Button variant="outline-dark" >Upload file</Button>
          </ButtonGroup>
        </Col>
        <Col md={{ span: 10, offset: 0 }}>
          <div className='p5'>
            <div class="chat-popup" id="myForm">
              <form action="/action_page.php" class="form-container">

                <textarea placeholder="Type message.." name="msg" required></textarea>

                <button type="submit" class="btn">Send</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Meeting