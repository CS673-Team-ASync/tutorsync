import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './ManageMeetings.css';

const ManageMeetings = () => {
    
        <h1>ManageMeetings</h1>

    return <div className="container">

    <Container>

        <Row>
        <h1><b>Manage Meetings</b></h1>
        </Row>
        
<br></br>

        <Row>
            <Col>
                <ul class="nav nav-tabs">
                <li class="nav-item">
                <a class="nav-link active" href="#">Student</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Tutor</a>
                </li>
                </ul>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col xs={6}><Button variant="primary">Search + Schedule Meeting</Button>{' '}</Col>
        </Row>

<br></br>

        <Row>
          <Col>
              <div class="card">
                  <h5 class="card-header"><strong>Completed Meetings</strong></h5>
                  <div class="card-body">
                  <h5 class="card-title">Grade 11 Statistics</h5>
                  <p class="card-text">Prof. Czik</p>
                  <a href="#" class="btn btn-primary">Download Media</a>
              </div>
              </div>
          </Col>

          <Col>
              <div class="card">
                   <h5 class="card-header"><strong>Scheduled Meetings</strong></h5>
                   <div class="card-body">
                   <h5 class="card-title">Grade 12 Geometry</h5>
                   <p class="card-text">Prof. Czik</p>
                   <a href="#" class="btn btn-primary">Join Meeting</a>
                   &nbsp;&nbsp;&nbsp;
                   <a href="#" class="btn btn-danger">Cancel</a>
             </div>
             </div>
          </Col>
        </Row>

    </Container>

    </div>

}
    
export default ManageMeetings