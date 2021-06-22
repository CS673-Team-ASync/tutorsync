import React, { useState } from 'react';
import './signUpPage.css';

const SignUpPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9000/").then((response) => console.log(response.text()))
        console.log('submitting...')
    }



    return <div className="wrapper">
        <div className="signUpFormWrapper">

            <h4>Create Your Account</h4>
            <form className="signUpForm">
                <label >First name</label><br />
                <input type="text" id="firstName" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} /><br />
                <label >Last Name</label><br />
                <input type="text" id="lastName" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} /><br />
                <label >Email</label><br />
                <input type="text" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Password</label><br />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <label>Confirm Password</label><br />
                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br /><br />
                <button className="button" onClick={handleOnSubmit}>Submit</button>
            </form>
        </div>
    </div>
}

export default SignUpPage;