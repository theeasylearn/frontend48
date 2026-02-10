import React from "react";
import Menu from "./Menu";

export default function AdminChangePassword() {
    return (
        <>
            <div id="wrapper">
                {/* Sidebar */}
                <Menu />
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
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <li className="nav-item dropdown no-arrow d-sm-none"></li>
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
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
                                                Change password
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <form action="" encType="multipart/form-data" method="post">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Current password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        New password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Confirm new password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name=""
                                                        id=""
                                                        className="form-control"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <input
                                                        type="submit"
                                                        defaultValue="save changes"
                                                        name="submit"
                                                        className="btn btn-primary"
                                                    />
                                                    <input
                                                        type="reset"
                                                        defaultValue="clear"
                                                        name="submit"
                                                        className="btn btn-light"
                                                    />
                                                </div>
                                            </form>
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