import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Login() {
    //create state variable 
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var submitForm = (event) => {
        event.preventDefault();
        console.log(email, password);

    }
    return (<div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-5">
                <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white text-center">
                        <h4 className="mb-0">Login</h4>
                    </div>
                    <div className="card-body p-4">
                        <form method='post' onSubmit={submitForm}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
root.render(<Login />)