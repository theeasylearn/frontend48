import { Link } from 'react-router-dom';  // Add this import
import React, { useState } from "react";
import Menu from './Menu';  // Assuming Menu is imported - add if missing
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
export default function AdminAddCategory() {
    //create state variable for each input
    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState('');
    let [islive, setIslive] = useState('');
    let saveCategory = function (e) {
        console.log(title, islive, photo);
        e.preventDefault();
        let apiAddress = getBaseUrl() + "insert_category.php";
        //API CALLING 
        let form = new FormData();
        //store data into form object using append method, this method has 2 argument, 1st key and 2nd value 
        form.append('title', title);
        form.append('islive', islive);
        form.append('photo', photo);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response);
            /* [{'error':'no'},{'success':'yes'},{'message':'category inserted'}] */
            let error = response.data[0]['error'];
            if (error != 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                
            }
        }).catch((error) => {
            showError("either you are offline or server is offline");
        });
    }
    //bind state variable with input
    return (
        <>
            <div id="wrapper">
                {/* Sidebar */}
                <ToastContainer />
                <Menu />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Navbar */}
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid mt-3">
                            {/* Page Heading */}
                            <h4 className="text-dark font-weight-bold">
                                Add - Category Management
                            </h4>
                            {/* DataTales Example */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 text-dark">New category</h5>
                                    {/* Replaced <a> with <Link> matching /category route */}
                                    <Link to="/category" className="btn btn-primary">
                                        Back
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={saveCategory}
                                        action="" method="post" encType='multipart/form-data'>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                required
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">
                                                Select Photo
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="photo"
                                                required
                                                onChange={(e) => setPhoto(e.target.files[0])}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                                is this category Live?
                                            </label> <br />
                                            <div>
                                                <label htmlFor="yes">
                                                    <input type="radio" name='islive' id='yes' value={1} onChange={(e) => setIslive(e.target.value)} /> Yes
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="no">
                                                    <input type="radio" name='islive' id='no' value={0} onChange={(e) => setIslive(e.target.value)} /> No
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                defaultValue="Save"
                                            />
                                            &nbsp;
                                            <input
                                                type="reset"
                                                className="btn btn-dark"
                                                defaultValue="clear"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2025</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
        </>
    );
}
