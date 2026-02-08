import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    //create arrow function to update state vaeriable
    updateLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    GuestLink = () => {
        return (
            this.state.isLoggedIn === false && <>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" onClick={this.updateLogin}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Forgot password</a>
                </li>
            </>);
    }
    UserLink = () => {
        return (
            this.state.isLoggedIn === true && 
            <>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cart</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Checkout</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Change password</a>
            </li>

            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"
                    onClick={this.updateLogin}>Logout</a>
            </li>
        </>)

    }
    
    render() {
        return (<div className="collapse navbar-collapse show" id="navbarBasic">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Shop</a>
                </li>
                <this.GuestLink />
                <this.UserLink />
            </ul>

        </div>)
    }
}
function Menu() {
    return (<>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">the easylearn academy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* use MenuLink class as Tag */}
                <MenuLinks />

            </div>
        </nav>
    </>)
}
root.render(<Menu />);
