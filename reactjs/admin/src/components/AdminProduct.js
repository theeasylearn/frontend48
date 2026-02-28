import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Add this import
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";

export default function AdminProduct() {
    let [data, setData] = useState([]);

    let deleteProduct = function (productid) {
        // alert('delete product function called..' + productid)
        //api calling 
        let apiAddress = getBaseUrl() + "delete_product.php?id=" + productid;
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            //check if api has any error or not 
            if (error !== 'no') {
                // alert(error)
                showError(error);
            }
            else {
                showMessage(response.data[1]['message']);
                // setData([]);very very bad way
                // use filter method to find & remove particular product 
                let temp = data.filter((item) => {
                    if(item.id !== productid)
                    {
                        return item
                    }
                });
                setData(temp); //update data
            }

        }).catch((error) => {
            // alert("either you are offline or server is offline");
            showError("either you are offline or server is offline");
        })
    }

    //create function inside function 
    let displayProduct = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>
                {/* Product name link replaced - remove target="_blank" for SPA */}
                <Link
                    to={"/view-product/" + item.id}
                    className="text-decoration-none"
                >
                    {item.title} <br />
                    {item.categorytitle}
                </Link>
            </td>
            <td>{item.price}</td>
            <td>
                <img
                    src={getBaseImage() + "product/" + item.photo}
                    className="img-fluid"
                />
            </td>
            <td>{item.stock}</td>
            <td>{(item.islive === '1') ? "Yes" : "No"}</td>
            <td>
                {/* Edit button replaced */}
                <Link
                    to="/edit-product/1"
                    className="btn btn-warning btn-sm btn-block mb-1"
                >
                    Edit
                </Link>
                <button onClick={() => deleteProduct(item.id)} type='button' className="btn btn-danger btn-sm btn-block">
                    Delete
                </button>
            </td>
        </tr>)
    }
    useEffect(() => {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "product.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                //response object has data property which contains data received from api in this case data is 
                /*
                    data is list of object (JSON)
                   [{"error":"no"},{"total":5},
                   {"id":"1","categoryid":"1","title":"Acer Laptop","price":"100","stock":"66","weight":"1000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"},{"id":"2","categoryid":"1","title":"dell laptop","price":"200","stock":"69","weight":"1000","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"},{"id":"3","categoryid":"2","title":"IPhone 15","price":"125000","stock":"3","weight":"1000","size":"big","photo":"Untitled.jpeg","detail":"seal packed finished product","islive":"1","isdeleted":"0","categorytitle":"mobile"},{"id":"5","categoryid":"4","title":"cake biscuit","price":"867","stock":"5","weight":"1000","size":"small","photo":"1.jpeg","detail":"very testy sweet ","islive":"1","isdeleted":"0","categorytitle":"Cookies & waffers"},{"id":"6","categoryid":"6","title":"one shampoo","price":"500","stock":"43","weight":"1000","size":"small","photo":"shampoo.jpg","detail":"clinic plus shampoo","islive":"1","isdeleted":"0","categorytitle":"shampoo"}]
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
                        showError("no product found");
                    }
                    else {
                        showMessage("product fetched...");
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
    });
    return (
        <>
            <div id="wrapper">
                <ToastContainer />
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
                                                        <th width='30%'>Photo</th>
                                                        <th>Stock</th>
                                                        <th>is Live?</th>
                                                        <th>Operation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((item) => displayProduct(item))}
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
