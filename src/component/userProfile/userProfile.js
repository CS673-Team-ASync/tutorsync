import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, ButtonGroup, Container, ListGroup, Row, Col, Figure, Form } from 'react-bootstrap';
import './userProfile.css';
import Meeting from '../Meeting/meeting';
import SearchPage from '../SearchPage/SearchPage';
import TutorSubjectsAndTimes from '../tutorSubjectsAndTimes/TutorSubjectsAndTimes';

const UserProfile = () => {

    return <div className="container">

    <Container>

    <Row>
        <h1><b>User Profile</b></h1>
    </Row>

<br></br>

    <Row>
      <Col>
        <Figure>
          <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="http://placekitten.com/200/200"
          />
        </Figure>
      </Col>

     <Col>
        <a href="#" className="btn btn-primary">Edit Photo</a>
        &nbsp;&nbsp;&nbsp;
        <a href="#" className="btn btn-danger">Delete Photo</a>
     </Col>
    </Row>

    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
        </Form>
      </Col>

      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Change" />
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
      </Col>
    </Row>

<br></br>

    <Row>
   
      <Col>
      <h4><b>Active Subjects</b></h4>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Col>

    </Row>

<br></br>

<Row>
  <Link to="../">
   <a href="#" className="btn btn-primary">Search for Subjects</a>
   </Link>
        &nbsp;&nbsp;&nbsp;
   <Link to="../tutor">
   <a href="#" className="btn btn-primary">Add Subjects + Availability</a>
   </Link>
        &nbsp;&nbsp;&nbsp;
   <Link to="../ManageMeetings">
   <a href="#" className="btn btn-primary">Manage Meetings</a>
   </Link>

 </Row>

<br></br>

    </Container>

    </div>
}

export default UserProfile