import { Link, useNavigate, useParams } from 'react-router-dom';  // Add this import
import React, { useState, useEffect } from "react";
import Menu from './Menu';  // Assuming Menu is imported - add if missing
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
import verifyLogin from "./check-login";
export default function AdminEditProduct() {
    let [data, setData] = useState([]);
    let [isFetched, setIsFetched] = useState(false);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [stock, setStock] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [photo, setPhoto] = useState(null);
    const [isLive, setIsLive] = useState(1);
    //create variable to stored productid using hook 
    let { productid } = useParams();
    verifyLogin();
    //navigator object
    let navigator = useNavigate();
    let fetchCategory = function () {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "category.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
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
    }

    let fetchProduct = function () {
        if (isFetched == false) {
            // let apiAddress = getBaseUrl() + "product.php?productid=" + productid;
            let apiAddress = getBaseUrl() + `product.php?productid=${productid}`
            console.log(apiAddress);
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
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
                        showMessage("product details fetched...");
                        //delete 2 object from beginning because it is not data
                        //store each and every property of product into individual state variable
                        setIsFetched(true);
                        setTitle(response.data[2]['title']);
                        setPrice(response.data[2]['price']);
                        setStock(response.data[2]['stock']);
                        setWeight(response.data[2]['weight']);
                        setSize(response.data[2]['size']);
                        setPhoto(response.data[2]['photo']);
                        setDetails(response.data[2]['detail']);
                        //setCategory(response.data[2]['categorytitle']);
                        setIsLive(response.data[2]['islive']);

                    }
                }
            }).catch((error) => {
                // alert("either you are offline or server is offline");
                showError("either you are offline or server is offline");
            })
        }
    }

    let updateProduct = function (e) {

        e.preventDefault();
        // console.log(category,
        //     title,
        //     price,
        //     details,
        //     stock,
        //     weight,
        //     size,
        //     photo,
        //     isLive);
        //api call 
        /*
            •	name (required): Product name 
            •	photo (required): Product photo (file upload) 
            •	price (required): Product price 
            •	stock (required): Product stock quantity 
            •	detail (required): Product details 
            •	productid (required): Product ID 
            •	categoryid (required): Category ID 
        */
        let apiAddress = getBaseUrl() + "update_product.php";
        let form = new FormData();
        form.append("name", title);
        form.append("photo", photo);
        form.append("price", price);
        form.append("stock", stock);
        form.append("detail", details);
        form.append("productid", productid);
        form.append("categoryid", category);
        form.append("islive", isLive);
        console.log(form);
        axios({
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form
        }).then((response) => {
            //only after successfully receiving data from server   
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error != 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message); //red color
                }
                else {
                    showMessage(message); //green color
                    //redirect user on product screen after 2 seconds delay
                    setTimeout(function () {
                       // navigator("/product");
                    }, 2000);
                }
            }
        }).catch((error) => {
            console.log(error);
            showError("either you are offline or server is offline");
        });
    }
    useEffect(() => {
        fetchProduct();
        fetchCategory();
    });
    return (
        <>
            <div id="wrapper">
                <ToastContainer />
                {/* Sidebar */}
                < Menu />
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
                                                Products (edit)
                                            </h5>
                                            {/* Replaced back button: admin_product.html → /product */}
                                            <Link to="/product" className="btn btn-primary btn-sm">
                                                back
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={updateProduct}>
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <b>Existing Photo</b> <br />
                                                        <img
                                                            src={getBaseImage() + "product/" + photo}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <div className="row mb-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor="category" className="form-label">
                                                                    Change Category
                                                                </label>{" "}
                                                                <br />
                                                                <select
                                                                    id="category"
                                                                    className="form-select"
                                                                    required=""
                                                                    onChange={(e) => setCategory(e.target.value)}
                                                                >
                                                                    <option value=''>Choose...</option>
                                                                    {data.map((item) => {

                                                                        if (item.title == category)
                                                                            return <option selected value={item.id}>{item.title}</option>
                                                                        else
                                                                            return <option value={item.id}>{item.title}</option>
                                                                    })}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="title" className="form-label">
                                                                    Edit Title
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="title"
                                                                    placeholder="Enter title"
                                                                    required=""
                                                                    onChange={(e) => setTitle(e.target.value)}
                                                                    value={title}
                                                                />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="price" className="form-label">
                                                                    Edit Price
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="price"
                                                                    placeholder="Enter price"
                                                                    required=""
                                                                    onChange={(e) => setPrice(e.target.value)}
                                                                    value={price}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-12">
                                                                <label htmlFor="details" className="form-label">
                                                                    Edit Details
                                                                </label>
                                                                <textarea
                                                                    className="form-control"
                                                                    id="details"
                                                                    rows={3}
                                                                    placeholder="Enter details"
                                                                    required=""
                                                                    onChange={(e) => setDetails(e.target.value)}
                                                                    defaultValue={""}
                                                                    value={details}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor="stock" className="form-label">
                                                                    Edit Stock
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="stock"
                                                                    placeholder="Enter stock quantity"
                                                                    required=""
                                                                    onChange={(e) => setStock(e.target.value)}
                                                                    value={stock}
                                                                />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="weight" className="form-label">
                                                                    Edit Weight
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="weight"
                                                                    placeholder="Enter weight"
                                                                    required=""
                                                                    onChange={(e) => setWeight(e.target.value)}
                                                                    value={weight}
                                                                />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="size" className="form-label">
                                                                    Edit Size
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="size"
                                                                    placeholder="Enter size"
                                                                    required=""
                                                                    onChange={(e) => setSize(e.target.value)}
                                                                    value={size}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor="photo" className="form-label">
                                                                    Change Photo
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    id="photo"
                                                                    required=""
                                                                    onChange={(e) => setPhoto(e.target.files[0])}
                                                                    accept="image/*"
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
                                                                        defaultValue={1}
                                                                        required=""
                                                                        onChange={(e) => setIsLive(e.target.value)}
                                                                        checked={(isLive === '1') ? true : false}
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="isLiveYes"
                                                                    >
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="islive"
                                                                        id="isLiveNo"
                                                                        defaultValue={0}
                                                                        onChange={(e) => setIsLive(e.target.value)}
                                                                        required=""
                                                                        checked={(isLive === '0') ? true : false}
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="isLiveNo"
                                                                    >
                                                                        No
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-primary w-100 mb-2"
                                                                >
                                                                    Save changes
                                                                </button>
                                                                <button type="reset" className="btn btn-light w-100">
                                                                    Clear all
                                                                </button>
                                                            </div>
                                                        </div>
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
            </div >
        </>
    );
}
