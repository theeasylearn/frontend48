import React from "react";
import { Link } from "react-router-dom";  // Add this import

export default function AdminProduct() {
    return (
        <>
            <div id="wrapper">
                {/* Sidebar - All links replaced */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                        <img src="img/tiny.png" alt="" />
                        <div className="sidebar-brand-text">
                            Online shop <br /> Admin
                        </div>
                    </Link>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category">
                            <i className="fas fa-fw fa-table" />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">
                            <i className="fas fa-fw fa-table" />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">
                            <i className="fas fa-fw fa-table" />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/order">
                            <i className="fas fa-fw fa-table" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/change-password">
                            <i className="fas fa-fw fa-table" />
                            <span>Change Password</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                            <i className="fas fa-fw fa-table" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Navbar */}
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
                                            <h5 className="m-0 font-weight-bold text-primary">Product</h5>
                                            {/* Add button replaced */}
                                            <Link
                                                to="/add-product"
                                                className="btn btn-primary btn-sm"
                                            >
                                                add
                                                <i className="fa fa-plus" />
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Sr No</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Photo</th>
                                                        <th>Stock</th>
                                                        <th>is Live?</th>
                                                        <th>Operation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            {/* Product name link replaced - remove target="_blank" for SPA */}
                                                            <Link
                                                                to="/view-product/1"
                                                                className="text-decoration-none"
                                                            >
                                                                IPhone - 14 <br />
                                                                Phone
                                                            </Link>
                                                        </td>
                                                        <td>125000</td>
                                                        <td>
                                                            <img
                                                                src="http://picsum.photos/100"
                                                                className="img-fluid"
                                                            />
                                                        </td>
                                                        <td>100</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            {/* Edit button replaced */}
                                                            <Link
                                                                to="/edit-product/1"
                                                                className="btn btn-warning btn-sm btn-block mb-1"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <a href="#" className="btn btn-danger btn-sm btn-block">
                                                                Delete
                                                            </a>
                                                        </td>
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
