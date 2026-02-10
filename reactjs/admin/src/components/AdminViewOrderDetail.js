import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function AdminViewOrderDetails() {
    return (
        <>
            <div id="wrapper">
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
                                            {/* Order details table unchanged - no navigation links */}
                                            <table className="table table-sm table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%">Name</td>
                                                        <td width="25%">Ankit Patel</td>
                                                        <td width="25%">Date</td>
                                                        <td width="25%">Fri 09-08-2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address</td>
                                                        <td>
                                                            eva surbhi, opp akshwarwadi <br />
                                                            Waghwadi road, bhavnagar
                                                        </td>
                                                        <td>Bill No</td>
                                                        <td>125</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pincode</td>
                                                        <td>364001</td>
                                                        <td>Delivery Status</td>
                                                        <td>
                                                            <form action="">
                                                                <select
                                                                    className="form-control"
                                                                    name="orderstatus"
                                                                    id="orderstatus"
                                                                >
                                                                    <option value="">Select</option>
                                                                    <option value="">Confirmed</option>
                                                                    <option value="">Dispatched</option>
                                                                    <option value="">Delivered</option>
                                                                    <option value="">Canceled</option>
                                                                </select>
                                                                <input
                                                                    type="submit"
                                                                    defaultValue="save"
                                                                    className="btn btn-primary w-100 mt-1"
                                                                />
                                                            </form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mobile</td>
                                                        <td>1234567890</td>
                                                        <td>Payment Status</td>
                                                        <td>Online</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={1}>Remarks</td>
                                                        <td colSpan={3}>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            Illo possimus maxime debitis! Atque doloribus laborum
                                                            similique officia deleniti delectus velit, et
                                                            consequatur provident quas, ex sequi necessitatibus a
                                                            tenetur? Culpa.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                                    <tr>
                                                        <td width="5%">1</td>
                                                        <td width="40%">IPhone - 15 pro</td>
                                                        <td width="10%" align="right">
                                                            125000
                                                        </td>
                                                        <td width="10%" align="right">
                                                            2
                                                        </td>
                                                        <td width="20%" align="right">
                                                            250000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="5%">2</td>
                                                        <td width="40%">Macbook pro</td>
                                                        <td width="10%" align="right">
                                                            225000
                                                        </td>
                                                        <td width="10%" align="right">
                                                            1
                                                        </td>
                                                        <td width="20%" align="right">
                                                            225000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>Total</td>
                                                        <td align="right">4,75,000</td>
                                                    </tr>
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
