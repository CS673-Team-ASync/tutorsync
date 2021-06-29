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
    // p5.background(255, 130, 20)
    // p5.ellipse(100, 100, 100)
    // p5.ellipse(300, 100, 100)
    // let prevMouseX 



    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      // p5.stroke(255);

    }
    // p5.line(p5.mouseX - 66, p5.mouseY, p5.mouseX + 66, p5.mouseY);
    // p5.line(p5.mouseX, p5.mouseY - 66, p5.mouseX, p5.mouseY + 66);
  }



  return <div className="container">
    {/* <h1>Meeting</h1> */}

    <Container>
      <Row>
        <Col md={{ span: 10, offset: 2 }}>
          <ButtonGroup>
            <Button variant="outline-dark" md={{ span: 6, offset: 0}} block>Members: Billy and Brian</Button>
            <Button variant="outline-dark" md={{ span: 3, offset: 0}}>Started: 2pm</Button>
            <Button variant="outline-dark" md={{ span: 3, offset: 0}}>Ending: 3pm</Button>
          </ButtonGroup>
          
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
        <Col md={2}>md=2</Col>
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
        <Col md={2}>md=2</Col>
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