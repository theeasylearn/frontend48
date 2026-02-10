import React, { useEffect } from "react";
import { Link } from "react-router-dom";  // Add this import
import Menu from "./Menu";
import axios from 'axios'; //api call 
//api calling means fetching data from remote location (mostly web page that returns data in json format)
export default function AdminCategory() {
    //hook 
    useEffect(() => {
        //code we write in this hook execute only once after functional component is loaded
        //generally it is used to call API, fetch data and store into into state
        let apiAddress = "https://theeasylearnacademy.com/shop/ws/category.php";
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    })
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
                                            <h5 className="m-0 font-weight-bold text-primary">Category</h5>
                                            {/* Replaced Add button: admin_add_category.html → /add-category */}
                                            <Link
                                                to="/add-category"
                                                className="btn btn-primary btn-sm"
                                            >
                                                Add
                                                <i className="fa fa-plus" />
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Title</th>
                                                        <th>Photo</th>
                                                        <th>Detail</th>
                                                        <th>is live</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Phone</td>
                                                        <td width="20%">
                                                            <img
                                                                src="https://picsum.photos/100"
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </td>
                                                        <td>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            Eum ea fugit iste est! Eum beatae fuga ipsam temporibus
                                                            culpa, id sunt dignissimos. Numquam natus tenetur
                                                            repellat quidem reiciendis, dicta eligendi.
                                                        </td>
                                                        <td>Yes</td>
                                                        <td width="15%">
                                                            {/* Replaced Edit button - will need dynamic ID in real data */}
                                                            <Link
                                                                to="/edit-category/1"  // Use :categoryid from actual data
                                                                className="btn btn-warning btn-sm"
                                                            >
                                                                Edit
                                                            </Link>
                                                            &nbsp;
                                                            <a href="#" className="btn btn-danger btn-sm">
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
