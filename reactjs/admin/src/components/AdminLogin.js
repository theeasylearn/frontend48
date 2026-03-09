import { Link, useNavigate, useParams } from 'react-router-dom';  // Add this import
import React, { useState, useEffect } from "react";
import Menu from './Menu';  // Assuming Menu is imported - add if missing
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
export default function AdminLogin() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let verifyLogin = function (event) {
        console.log(email, password);
        event.preventDefault();
        //api calling 
        let apiAddress = getBaseUrl() + "admin_login.php";
        let form = new FormData();
        form.append('email', email);
        form.append('password', password);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            //[{"error":"input is missing"}]
            //[{"error":"no"},{"success":"no"},{"message":"invalid login attempt"}]
            //[{"error":"no"},{"success":"yes"},{"message":"login successful"},{"id":"2"}]
            let error = response.data[0]['error'];
            if (error != 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no')
                    showError(message);
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 2000);
                }
            }
        }).catch((error) => {
            showError('it seems either you are offline or server is offline');
        });
    }
    return (
        <>
            <div className="container">
                <ToastContainer />
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block">
                                        <img src="media/large.png" />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                                            </div>
                                            <form className="user" method='post' onSubmit={verifyLogin}>
                                                <div className="form-group">
                                                    <input
                                                        name='email'
                                                        id="email"
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name='password'
                                                        id="password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                {/* Replaced Sign in button: index.html → /dashboard */}
                                                <button
                                                    type='submit'
                                                    className="btn btn-primary btn-user btn-block"
                                                >
                                                    Login
                                                </button>
                                                <hr />
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                {/* Replaced Forgot Password link */}
                                                <Link className="small" to="/forgot-password">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
