import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";  // Add this import
import Menu from "./Menu";
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
export default function AdminViewOrderDetails() {
    let { orderid } = useParams();
    let [data, setData] = useState([]); //order's detail
    let [products, setProducts] = useState([]);// product purchased in ordered
    let [selectedStatus, setSelectedStatus] = useState(null); // New state for status
    let fetchOrderDetail = function () {
        let apiAddress = getBaseUrl() + "orders.php?id=" + orderid;
        console.log(apiAddress);
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no orders found");
                } else {
                    showMessage("orders fetched...");
                    response.data.splice(0, 2);
                    const fetchedData = response.data;
                    setData(fetchedData);
                    // Set status state after data is ready
                    const orderStatus = parseInt(fetchedData[0]['orderstatus']);
                    if (!isNaN(orderStatus) && orderStatus >= 0 && orderStatus <= 3) {
                        setSelectedStatus(orderStatus.toString()); // Store as string to match option values
                    } else {
                        setSelectedStatus(null); // Or default to "0" if invalid
                    }
                }
            }
        }).catch((error) => {
            showError("either you are offline or server is offline");
        });
    }

    let fetchOrderItem = function () {
        //https://theeasylearnacademy.com/shop/ws/order_details.php?orderid=37
        let apiAddress = getBaseUrl() + "order_details.php?orderid=" + orderid;
        console.log(apiAddress);
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no items found");
                } else {
                    showMessage("order item fetched...");
                    response.data.splice(0, 2);
                    setProducts(response.data);
                }
            }
        }).catch((error) => {
            showError("either you are offline or server is offline");
        });
    }
    // Hook
    useEffect(() => {
        fetchOrderDetail(); //fetch order detail 
        fetchOrderItem();
    }, []); // Empty deps: run once on mount
    return (
        <>
            <div id="wrapper">
                <ToastContainer />
                {/* Sidebar - All 8 links replaced */}
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
                                                Order (Detail)
                                            </h5>
                                            <span>
                                                {/* Back button replaced */}
                                                <Link
                                                    to="/order"
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    Back
                                                </Link>
                                                {/* Print button replaced - matches /d:id route */}
                                                <Link
                                                    to="/d/125"
                                                    className="btn btn-secondary btn-sm"
                                                >
                                                    Print
                                                </Link>
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            {data.map((item) => (
                                                <table key={item.id} className="table table-sm table-striped table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td width="25%">Name</td>
                                                            <td width="25%">{item.fullname}</td>
                                                            <td width="25%">Date</td>
                                                            <td width="25%">{item.billdate}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td>
                                                                {item.address1} <br />
                                                                {item.address2}
                                                            </td>
                                                            <td>Bill No</td>
                                                            <td>{item.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pincode</td>
                                                            <td>{item.pincode}</td>
                                                            <td>Delivery Status</td>
                                                            <td>
                                                                <form action="">
                                                                    <select
                                                                        className="form-control"
                                                                        name="orderstatus"
                                                                        id="orderstatus"
                                                                        value={selectedStatus || ''} // Controlled component (optional but recommended)
                                                                        onChange={(e) => setSelectedStatus(e.target.value)} // Local update; add API save on submit
                                                                    >
                                                                        <option value="">Select</option>
                                                                        <option selected={selectedStatus === '0'} value="0">Confirmed</option>
                                                                        <option selected={selectedStatus === '1'} value="1">Dispatched</option>
                                                                        <option selected={selectedStatus === '2'} value="2">Delivered</option>
                                                                        <option selected={selectedStatus === '3'} value="3">Canceled</option>
                                                                    </select>
                                                                    <input
                                                                        type="submit"
                                                                        value="save"
                                                                        className="btn btn-primary w-100 mt-1"
                                                                    />
                                                                </form>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mobile</td>
                                                            <td>{item.mobile}</td>
                                                            <td>Payment mode</td>
                                                            <td>{(item.paymentmode == '0' ? "Online" : "C.O.D")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={1}>Remarks</td>
                                                            <td colSpan={3}>
                                                                {item.remarks}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ))}
                                            <hr />
                                            {/* Order items table unchanged */}
                                            <table className="table table-sm table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td>Sr No</td>
                                                        <td>Name</td>
                                                        <td align="right">Price</td>
                                                        <td align="right">Quantity</td>
                                                        <td align="right">Total</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((item) => {
                                                        return (<tr>
                                                            <td width="5%">{item.id}</td>
                                                            <td width="40%">{item.title}</td>
                                                            <td width="10%" align="right">
                                                                {item.price}
                                                            </td>
                                                            <td width="10%" align="right">
                                                                {item.quantity}
                                                            </td>
                                                            <td width="20%" align="right">
                                                                {item.price * item.quantity}
                                                            </td>
                                                        </tr>);
                                                    })}

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