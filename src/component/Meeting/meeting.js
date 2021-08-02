import React from 'react';
import { useState } from "react";
import './meeting.css';
import Sketch from 'react-p5'
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { bindProxyAndYMap } from "valtio-yjs";
import { proxy, useSnapshot } from "valtio";
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const ydoc = new Y.Doc();

    const websocketProvider = new WebsocketProvider(
    "wss://demos.yjs.dev",
    "tutorsync-123",
    ydoc
    );

    const ymap = ydoc.getMap("messages.v1");
    const mesgMap = proxy({});

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

  bindProxyAndYMap(mesgMap, ymap);


  return <div className="container">
    <Container>
      <h4>MeetingID: 123</h4>
      <h4>My Username: username</h4>
      <h4>Other Username: their_username</h4>
      <h4>MeetingID: 123</h4>
    {/* <h2>My Message</h2>
    <MyMessage />
    <h2>Messages</h2>
    <Messages /> */}

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
            <div className="chat-popup" id="myForm">
              {/* <form action="/action_page.php" className="form-container"> */}

                {/* <textarea placeholder="Type message.." name="msg" required></textarea> */}
                <Messages />

                <MyMessage />

                {/* <button type="submit" className="btn">Send</button> */}
              {/* </form> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
}

const MyMessage = () => {
  // const [name, setName] = useState("");
  var d = new Date();
 var n = d.toLocaleTimeString('en-US');
  let name = "username"
  const [message, setMessage] = useState("");
  const send = () => {
    if (name && message) {
      mesgMap[name+"_"+n] = message;
    }
  };
  return (
    <div>
      {/* <div>
        Name: {name}
     </div> */}
     <div>
       Message:{" "}
       <input value={message} onChange={(e) => setMessage(e.target.value)} />
     </div>
     <button disabled={!name || !message} onClick={send}>
       Send
     </button>
   </div>
 );
};

const Messages = () => {
 const snap = useSnapshot(mesgMap);
 return (
   <div style={{background: 'lightGrey', padding:"10px", borderRadius:"6px", margin:"14px", maxHeight:"300px", overflowX:"hidden" }}>
     {Object.keys(snap)
       .reverse()
       .map((key) => (
         <p key={key}>
           {key}: {snap[key]}
         </p>
       ))}
   </div>
 );
};

export default Meeting