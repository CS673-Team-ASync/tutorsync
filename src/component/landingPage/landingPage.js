import React, {useState} from 'react'
import './landingPage.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Redirect, Link } from "react-router-dom";

const LandingPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (isLoggedIn ? (<Redirect
        to={{
            path: "/",
        }}
    />) :
        <Container fluid>
            <Row>
                <Col sm={9}>
                <Container>
                <img class="logo" src="https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
                </Container>
                </Col>
                

                
                <Col sm={3}>
                <Container className="loginFormWrapper">
                <Col>
                    
                    <br></br>
                    <h3>Sign In</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Row className="justify-content-md-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Row> 
                    
                    <div className="signInText">Dont have an account yet? Sign up <Link to="/signUp">here!</Link></div>
                <br></br>
                </Col>
                
                </Container>
                </Col> 
            </Row>
                
               
        
        </Container>

    )
}

export default LandingPage
