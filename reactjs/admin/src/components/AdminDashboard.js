import Menu from "./Menu";
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
import { useState, useEffect } from "react";
export default function AdminDashboard() {
    //create state array
    let [data, setData] = useState([]);

    //hook 
    useEffect(() => {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "summery.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                //response object has data property which contains data received from api in this case data is 
                /*
                    [{"error":"no"},{"categories":"8","products":"39","users":"121","orders":"35","daily":"0","weekly":"250900","monthly":"250900","yearly":"250900"}]
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
                        showError("no data found");
                    }
                    else {
                        showMessage("summery fetched...");
                        //delete 2 object from beginning because it is not data
                        response.data.splice(0, 1);
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

    })
    return (
        <>

            <div id="wrapper">
                <ToastContainer />
                <Menu />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3 d-flex justify-content-between">
                                            <h5 className="m-0 font-weight-bold text-primary">Dashboard</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row mt-3">
                                                {data.map((item) => {
                                                    let output ='';
                                                    for (let key in item) {
                                                        output += <div className="col-xl-4 col-md-6 mb-4">
                                                            <div className="card border-left-danger shadow h-100 py-2">
                                                                <div className="card-body">
                                                                    <div className="row no-gutters align-items-center">
                                                                        <div className="col mr-2">
                                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                                Products
                                                                            </div>
                                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                                10
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <i className="fa fa-gift fa-2x text-info" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                    return output;
                                                })}
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
