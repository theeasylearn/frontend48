import { Link, useNavigate } from 'react-router-dom';  // Add this import
import React, { useState, useEffect } from "react";
import Menu from './Menu';  // Assuming Menu is imported - add if missing
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import {  getBaseUrl } from "./common";
import verifyLogin from "./check-login";
export default function AdminAddProduct() {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [stock, setStock] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [photo, setPhoto] = useState(null);
    const [isLive, setIsLive] = useState(1);
    let [data, setData] = useState([]);
    let navigator = useNavigate();
    verifyLogin();
    //hook 
    useEffect(() => {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "category.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                //response object has data property which contains data received from api in this case data is 
                /*
                    data is list of object (JSON)
                    [
                     0 {"error":"no"},
                     1 {"total":7},
                     2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
                     3 {"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
                     4 {"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},
                     5 {"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},{"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"},{"id":"39","title":"drill machine","photo":"WhatsApp Image 2026-01-25 at 1.25.28 PM.jpeg","islive":"1","isdeleted":"0"}]
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
                        showError("no category found");
                    }
                    else {
                        showMessage("category fetched...");
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
        //code we write in this hook execute only once after functional component is loaded
        //generally it is used to call API, fetch data and store into into state

    });
    let saveProduct = function (e) {
        console.log({
            category,
            title,
            price,
            details,
            stock,
            weight,
            size,
            photo,
            isLive
        });

        let apiAddress = getBaseUrl() + "insert_product.php";
        //API CALLING 
        let form = new FormData();
        //store data into form object using append method, this method has 2 argument, 1st key and 2nd value 
        form.append('name', title);
        form.append('photo', photo);
        form.append('price', price);
        form.append('stock', stock);
        form.append('detail', details);
        form.append('categoryid', category);
        form.append('islive', isLive);
        /*
        •	name (required): Product name 
        •	photo (required): Product photo (file upload) 
        •	price (required): Product price 
        •	stock (required): Product stock quantity 
        •	detail (required): Product details 
        •	categoryid (required): Category ID 
        */
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response);
            /* [{'error':'no'},{'success':'yes'},{'message':'product inserted'}] */
            let error = response.data[0]['error'];
            if (error != 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success == 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    //but after sometimes may be 2 seconds 
                    setTimeout(() => {
                        navigator("/product"); //pass route path into navigator 
                    }, 2000);
                }
            }
        }).catch((error) => {
            showError("either you are offline or server is offline");
        });
        e.preventDefault();
    }

    return (
        <>
            <div id="wrapper">
                <ToastContainer />
                {/* Sidebar - Replaced all <a> with <Link> matching your routes */}
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
                                                Products (add)
                                            </h5>
                                            {/* Replaced <a> with <Link> matching /product route */}
                                            <Link to="/product" className="btn btn-primary btn-sm">
                                                back
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={saveProduct}>
                                                {/* Form fields unchanged - no navigation links here */}
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="category" className="form-label">
                                                            Category
                                                        </label>{" "}
                                                        <br />
                                                        <select
                                                            id="category"
                                                            className="form-select"
                                                            required=""
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        >
                                                            <option value="">Choose...</option>
                                                            {
                                                                data.map((item) => {
                                                                    return (<option value={item.id}>{item.title}</option>)
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="title" className="form-label">
                                                            Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="title"
                                                            placeholder="Enter title"
                                                            required=""
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="price" className="form-label">
                                                            Price
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="price"
                                                            placeholder="Enter price"
                                                            required=""
                                                            value={price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label htmlFor="details" className="form-label">
                                                            Details
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="details"
                                                            rows={3}
                                                            placeholder="Enter details"
                                                            required=""
                                                            value={details}
                                                            onChange={(e) => setDetails(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="stock" className="form-label">
                                                            Stock
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="stock"
                                                            placeholder="Enter stock quantity"
                                                            required=""
                                                            value={stock}
                                                            onChange={(e) => setStock(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="weight" className="form-label">
                                                            Weight
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="weight"
                                                            placeholder="Enter weight"
                                                            required=""
                                                            value={weight}
                                                            onChange={(e) => setWeight(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="size" className="form-label">
                                                            Size
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="size"
                                                            placeholder="Enter size"
                                                            required=""
                                                            value={size}
                                                            onChange={(e) => setSize(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="photo" className="form-label">
                                                            Photo
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="photo"
                                                            required=""
                                                            accept="image/*"
                                                            onChange={(e) => setPhoto(e.target.files[0])}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Is Live</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="islive"
                                                                id="isLiveYes"
                                                                value={1}
                                                                required=""
                                                                checked={isLive === 1}
                                                                onChange={() => setIsLive(1)}
                                                            />
                                                            <label className="form-check-label" htmlFor="isLiveYes">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="islive"
                                                                id="isLiveNo"
                                                                value={0}
                                                                required=""
                                                                checked={isLive === 0}
                                                                onChange={() => setIsLive(0)}
                                                            />
                                                            <label className="form-check-label" htmlFor="isLiveNo">
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary w-100 mb-2"
                                                        >
                                                            Save
                                                        </button>
                                                        <button type="reset" className="btn btn-light w-100">
                                                            Clear all
                                                        </button>
                                                    </div>
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