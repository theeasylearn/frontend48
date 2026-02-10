import React from "react";
import { Link } from 'react-router-dom';  // Fixed import (was default import)
import Menu from "./Menu";

export default function AdminDashboard() {
    return (
        <>
            <div id="wrapper">
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
                                            {/* Orders Stats Row */}
                                            <div className="row">
                                                <div className="col-xl-3 col-md-6 mb-4">
                                                    <div className="card border-left-primary shadow h-100 py-2">
                                                        <div className="card-body">
                                                            <div className="row no-gutters align-items-center">
                                                                <div className="col mr-2">
                                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                        Orders (today)
                                                                    </div>
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                        10
                                                                    </div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Other stat cards unchanged - no links here */}
                                                <div className="col-xl-3 col-md-6 mb-4">
                                                    <div className="card border-left-primary shadow h-100 py-2">
                                                        <div className="card-body">
                                                            <div className="row no-gutters align-items-center">
                                                                <div className="col mr-2">
                                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                        Orders (Monthly)
                                                                    </div>
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                        20
                                                                    </div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ... other stat cards remain unchanged */}
                                            </div>
                                            
                                            {/* Additional Stats Row */}
                                            <div className="row mt-3">
                                                <div className="col-xl-4 col-md-6 mb-4">
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
                                                {/* Other stat cards unchanged */}
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
