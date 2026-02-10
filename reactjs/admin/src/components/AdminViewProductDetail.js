import React from "react";
import { Link } from "react-router-dom";  // Add this import
import Menu from "./Menu";

export default function AdminViewProductDetails() {
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
                                                Products (view detail)
                                            </h5>
                                            {/* Back button replaced: admin_products.html → /product */}
                                            <Link
                                                to="/product"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Back
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%">
                                                            <img
                                                                src="http://picsum.photos/400"
                                                                className="img-fluid"
                                                            />
                                                        </td>
                                                        <td>
                                                            <table className="table table-striped table-sm">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Name</td>
                                                                        <td>IPhone - 15</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Category</td>
                                                                        <td>Phone</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Price</td>
                                                                        <td>125000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Stock</td>
                                                                        <td>10</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Weight</td>
                                                                        <td>500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Size</td>
                                                                        <td>Medium</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Detail</td>
                                                                        <td>
                                                                            Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. Ea numquam voluptas tempora
                                                                            eaque repudiandae cumque tenetur rerum culpa est
                                                                            minima, perferendis dolorum nobis labore
                                                                            repellat ad officia fugit sequi earum.
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Is Live</td>
                                                                        <td>Yes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td />
                                                                        <td />
                                                                    </tr>
                                                                    <tr>
                                                                        <td />
                                                                        <td />
                                                                    </tr>
                                                                </tbody>
                                                            </table>
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
