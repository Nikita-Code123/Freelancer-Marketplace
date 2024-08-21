import React, { useState } from 'react';
import axios from 'axios';
import SignIn from './SignIn.user.js';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [showSignIn, setShowSignIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from submitting the default way
        
        const endpoint = selectedRole === 'Freelancer' 
            ? 'http://localhost:8000/FreelancerMarketplace/Freelancer/Registration'
            : 'http://localhost:8000/FreelancerMarketplace/Employee/Registration';

        try {
            const response = await axios.post(endpoint, {
                username,
                email,
                password
            });
            console.log('Success', response.data);
          
        } catch (error) {
            console.error('Error', error);
            alert("Try Again");
        }
    };

    const signin = () => {
        setShowSignIn(true); // Set state to show SignIn component
    };

    if (showSignIn) {
        return <SignIn />; // Render SignIn component
    }

    // Function to handle radio button change
    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Sign Up</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="freelancer"
                                        name="role"
                                        value="Freelancer"
                                        checked={selectedRole === 'Freelancer'}
                                        onChange={handleRoleChange}
                                    />
                                    <label className="form-check-label" htmlFor="freelancer">
                                        Freelancer
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="employee"
                                        name="role"
                                        value="Employee"
                                        checked={selectedRole === 'Employee'}
                                        onChange={handleRoleChange}
                                    />
                                    <label className="form-check-label" htmlFor="employee">
                                        Employee
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                    Sign Up
                                </button>

                            </form>
                            <button className="already text-center" onClick={signin}>Already Have an Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
