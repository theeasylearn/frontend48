import React from "react";
import { Link } from 'react-router-dom';  // Add this import
import Menu from "./Menu";

export default function AdminAddProduct() {
    return (
        <>
            <div id="wrapper">
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
                                            <form>
                                                {/* Form fields unchanged - no navigation links here */}
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="category" className="form-label">
                                                            Category
                                                        </label>{" "}
                                                        <br />
                                                        <select id="category" className="form-select" required="">
                                                            <option selected="">Choose...</option>
                                                            <option value={1}>Category 1</option>
                                                            <option value={2}>Category 2</option>
                                                            <option value={3}>Category 3</option>
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
                                                            defaultValue={""}
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
                                                                defaultValue={0}
                                                                required=""
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
