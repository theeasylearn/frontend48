import Menu from "./Menu";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length === 0) {
            const apiAddress = getBaseUrl() + "summery.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                const error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                } else {
                    const total = response.data[1]['total']; // Assuming this exists based on your comment, but verify
                    if (total === 0) {
                        showError("no data found");
                    } else {
                        showMessage("summery fetched...");
                        response.data.splice(0, 1); // Removes error object
                        setData(response.data); // Now data = [{ categories: "8", products: "39", ... }]
                    }
                }
            }).catch(() => {
                showError("either you are offline or server is offline");
            });
        }
    }, []); // Empty dependency array to run only once

    return (
        <>
            <div id="wrapper">
                <ToastContainer />
                <Menu />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* ... (unchanged) */}
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
{data.length > 0 && Object.entries(data[0]).map(([key, value]) => (
    <div key={key} className="col-xl-4 col-md-6 mb-4">
        <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {key}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {value}
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fa fa-gift fa-2x text-info" /> {/* Customize icon per key if needed */}
                    </div>
                </div>
            </div>
        </div>
    </div>
))}
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