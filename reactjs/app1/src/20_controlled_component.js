import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }; //empty state
    }
    updateValue = (event) => {
        //create/update state variable
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitForm = (event) => {
        event.preventDefault(); //to prevent form submission(page reload)
        console.log(this.state);
        //store each and every value in state variable inside message state variable
        this.setState({
            message: (
                <>
                    Name {this.state.name}<br />
                    Email Address {this.state.email}<br />
                    Password {this.state.password}<br />
                    Mobile {this.state.mobile}
                </>
            )
        });

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <div className="card shadow form-card">
                            <div className="card-header bg-primary">
                                <h5 className="text-center text-bg-primary mb-4 fs-2">Registration Form</h5>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={this.submitForm} method='post'>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Name" name="name" required
                                            onChange={this.updateValue} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email address" name="email" required onChange={this.updateValue} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="password" name="password" required onChange={this.updateValue} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" required onChange={this.updateValue} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" className="form-control" placeholder="Mobile" name="mobile" required onChange={this.updateValue} />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option selected disabled>Select Language</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Gujarati</option>
                                        </select>
                                    </div>
                                    {/* Gender */}
                                    <div className="mb-3">
                                        <label className="form-label d-block">Gender</label>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" />
                                            <label className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" />
                                            <label className="form-check-label">Female</label>
                                        </div>
                                    </div>
                                    {/* Education */}
                                    <div className="mb-3">
                                        <label className="form-label d-block">Education</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">12th</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">Bachelor</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">Master</label>
                                        </div>
                                    </div>
                                    {/* Photo Upload */}
                                    <div className="mb-4">
                                        <label className="form-label">Upload Photo</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                    <p className="text-center">
                                        <button type="submit" className="btn btn-primary">
                                            CREATE ACCOUNT
                                        </button>
                                    </p>
                                </form>
                                <h3>{this.state.message}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
root.render(<RegisterForm />)