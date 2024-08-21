import React, { useState } from "react";
import axios from 'axios';
import SignUp from "./SignUp.user.js"; 
import '../styles/signin.css'; 

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const endpoint = selectedRole === 'Freelancer'
            ? 'http://localhost:8000/FreelancerMarketplace/Freelancer/Login'
            : 'http://localhost:8000/FreelancerMarketplace/Employee/Login';

        try {
            const response = await axios.post(endpoint, {
                email,
                password
            });
            console.log('Success', response.data);
        } catch (error) {
            console.error('Error', error);
            alert("Try Again");
        }
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const signup = () => {
        setShowSignUp(true);
    };

    if (showSignUp) {
        return <SignUp />;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Sign In</h3>
                            <form onSubmit={handleSubmit}>
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
                                        placeholder="Enter your password, should be min 4 letters"
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
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </form>
                            <button className="already text-center" onClick={signup}>Don't have an account? Create one</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
