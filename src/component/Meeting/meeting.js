import React from 'react';
import { useState } from "react";
import './meeting.css';
import Sketch from 'react-p5'
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { bindProxyAndYMap } from "valtio-yjs";
import { proxy, useSnapshot } from "valtio";
import { Button, ButtonGroup, Container, Row, Col, ToggleButton } from 'react-bootstrap';



let count = 0;
let globalString = ""
let globalSize = 1;


const ydoc = new Y.Doc();

const websocketProvider = new WebsocketProvider(
  "wss://demos.yjs.dev",
  "tutorsync-12345",
  ydoc
);

const ymap = ydoc.getMap("messages.v1");
const mesgMap = proxy({});

const ydocp5 = new Y.Doc();

const websocketProviderp5 = new WebsocketProvider(
  "wss://demos.yjs.dev",
  "tutorsync-123456-p5",
  ydocp5
);

const ymapp5 = ydocp5.getMap("messages.v1");
const mesgMapp5 = proxy({});

const Meeting = (

  data
) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  console.log(radioValue)

  const radios = [
    { name: 'Pencil', value: '1' },
    { name: 'Small', value: '2' },
    { name: 'Large', value: '3' },
  ];

  console.log(data.dataFromParent)

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 300).parent(canvasParentRef)
    p5.strokeWeight(2)
    p5.stroke(237, 34, 93);

  }

  let [message, setMessage] = useState("");
  const draw = p5 => {
    // p5.background(255,255,255)
    if (p5.mouseIsPressed) {
      count += 1
      var d = new Date();
      var n = d.toLocaleTimeString('en-US');

      let name = "username"

      const send = () => {
        if (name && message) {
          mesgMapp5[name + "_" + n + ", " + count] = message;
        }
      };
      if (p5.mouseX > 0 && p5.mouseX < 800 && p5.mouseY > 0 && p5.mouseY < 300) {
        setMessage("" + p5.mouseX + ", " + p5.mouseY + ", " + p5.pmouseX + ", " + p5.pmouseY + ", " + radioValue)
        send()
      }
      p5.strokeWeight(radioValue)
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
    const snapp5 = globalString
    let myText = []
    Object.keys(snapp5)
      .reverse()
      .map((key) => (
        myText.push([snapp5[key].split(",")])

      ))
    // console.log(myText.length)
    for (let i = 0; i < myText.length; i++) {
      let myPts = myText[i]
      // console.log(myPts)
      p5.strokeWeight(myPts[0][4])
      p5.line(myPts[0][0], myPts[0][1], myPts[0][2], myPts[0][3]);

    }
  }

  bindProxyAndYMap(mesgMap, ymap);
  bindProxyAndYMap(mesgMapp5, ymapp5);

  function onSizeChange(size) {
    globalSize = size
    console.log(size)
  }


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
            {radios.map((radio, idx) => (
              <ToggleButton style={{ margin: "0px" }}
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant='outline-dark'
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
        <Col md={{ span: 10, offset: 0 }}>
          <div className='p5'>
            <Sketch setup={setup} draw={draw} />
            {/* <div id="app"></div> */}
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
              <Messagesp5 />

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
      mesgMap[name + "_" + n] = message;
    }
  };
  return (
    <div>
      {/* <div>
        Name: {name}
     </div> */}
      <div>
        Message:{" "}
        <input value={message} style={{ width: '100%' }} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button disabled={!name || !message} style={{ width: '100%' }} onClick={send}>
        Send
      </button>
    </div>
  );
};

// const MyMessagep5 = () => {
//   // const [name, setName] = useState("");
//   var d = new Date();
//  var n = d.toLocaleTimeString('en-US');
//   let name = "username"
//   const [message, setMessage] = useState("");
//   const send = () => {
//     if (name && message) {
//       mesgMapp5[name+"_"+n] = message;
//     }
//   };
//   return (
//   //   <div>

//   //    <div>
//   //      Message:{" "}
//   //      <input value={message} onChange={(e) => setMessage(e.target.value)} />
//   //    </div>
//   //    <button disabled={!name || !message} onClick={send}>
//   //      Send
//   //    </button>
//   //  </div>
//  );
// };

const Messages = () => {
  const snap = useSnapshot(mesgMap);
  //  console.log(snap)
  return (
    <div style={{ background: 'lightGrey', padding: "10px", borderRadius: "6px", margin: "14px", maxHeight: "300px", overflowX: "hidden" }}>
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

const Messagesp5 = () => {
  const snapp5 = useSnapshot(mesgMapp5);
  globalString = snapp5
  return (
    <div></div>
    // <div style={{background: 'lightGrey', padding:"10px", borderRadius:"6px", margin:"14px", maxHeight:"300px", overflowX:"hidden" }}>
    //   {Object.keys(snapp5)
    //     .reverse()
    //     .map((key) => (
    //       <p key={key}>
    //         {key}: {snapp5[key]}

    //       </p>
    //     ))}
    // </div>
  );
};

export default Meeting