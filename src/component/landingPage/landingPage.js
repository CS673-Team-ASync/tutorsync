import React, { useState } from 'react'
import './landingPage.css';
import { Redirect, Link } from "react-router-dom";

const LandingPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (isLoggedIn ? (<Redirect
        to={{
            path: "/",
        }}
    />) :
        <div>
            <br />
            <br />
            <br />
            <div className="block1">
                <img class="logo" src="https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Sapien pellentesque habitant morbi tristique senectus et. Senectus et netus et malesuada fames ac turpis egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Erat nam at lectus urna. Nulla posuere sollicitudin aliquam ultrices. Tellus pellentesque eu tincidunt tortor. Diam volutpat commodo sed egestas.</p>
            </div>

            <div className="block2">
                <div className="loginFormWrapper">
                    <h3>Sign In</h3>
                    <form className="signIn">
                        <label >Email</label><br />
                        <input type="text" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <label>Password</label><br />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                        <button className="login">Login</button> <br />
                        <button className="signup">Sign Up</button>
                    </form>
                    <div className="signInText">Dont have an account yet? Sign up <Link to="/signUp">here!</Link></div>
                </div>



            </div>
        </div>

    )
}

export default LandingPage