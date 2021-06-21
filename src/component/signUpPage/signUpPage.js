import React, { useState } from 'react';

const SignUpPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return <>
        <h1>Create Your Account</h1>
        <form>
            <label >First name</label><br />
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} /><br />
            <label >Last Name</label><br />
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} /><br />
            <label >Email</label><br />
            <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <label>Password</label><br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <label>Confirm Password</label><br />
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br /><br />
            <button onClick={handleOnSubmit}>Submit</button>
        </form>
    </>
}

export default SignUpPage;