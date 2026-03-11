import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Add this import
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import {getBaseUrl } from "./common";
import verifyLogin from "./check-login";
import Menu from "./Menu";

export default function AdminUsers() {
    let [data, setData] = useState([]);
    verifyLogin();
    //hook 
    useEffect(() => {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "users.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                //response object has data property which contains data received from api in this case data is 
                /*
                    data is list of object (JSON)
                    [
                        {"error":"no"},
                        {"total":121},
                        {"email":"ankit3385@gmail.com","mobile":"1234567890","id":"3"}
                    ]
                */
                // FETCH ERROR KEY VALUE FROM 0th element object
                let error = response.data[0]['error'];
                //check if api has any error or not 
                if (error !== 'no') {
                    // alert(error)
                    showError(error);
                }
                else {
                    //no error 
                    //now fetch 1st object's total key's value 
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        showError("no category found");
                    }
                    else {
                        showMessage("category fetched...");
                        //delete 2 object from beginning because it is not data
                        response.data.splice(0, 2);
                        setData(response.data);
                    }
                }
            }).catch((error) => {
                // alert("either you are offline or server is offline");
                showError("either you are offline or server is offline");
            })
        }
        //code we write in this hook execute only once after functional component is loaded
        //generally it is used to call API, fetch data and store into into state

    });
    let displayUser = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            
            <td>
                {/* View button kept as is - needs user history route/modal */}
                <a className="btn btn-primary" href="#">
                    View
                </a>
            </td>
        </tr>)
    }
    return (
        <>
            <div id="wrapper">
                <ToastContainer />
                {/* Sidebar - All links replaced */}
                <Menu />
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow d-sm-none"></li>
                                <div className="topbar-divider d-none d-sm-block" />
                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                            Administrator
                                        </span>
                                        <img
                                            className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3 d-flex justify-content-between">
                                            <h5 className="m-0 font-weight-bold text-primary">
                                                Users - Customers
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-striped table-sm">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Email</th>
                                                        <th>Mobile</th>
                                                        <th>History</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                  {data.map((item) => displayUser(item))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                </div>
                {/* End of Content Wrapper */}
            </div>
        </>
    );
}
