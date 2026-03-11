import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link, useParams } from "react-router-dom";  // Add this import
import axios from 'axios'; //api call 
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImage, getBaseUrl } from "./common";
import verifyLogin from "./check-login";
export default function AdminViewProductDetails() {
    let [data, setData] = useState([]);
    let { productid } = useParams();
    verifyLogin();
    //hook 
    useEffect(() => {
        if (data.length == 0) {
            let apiAddress = getBaseUrl() + "product.php?productid=" + productid;
            console.log(apiAddress);
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                //response object has data property which contains data received from api in this case data is 
                /*
                    data is list of object (JSON)
                   [{"error":"no"},{"total":1},{"id":"1","categoryid":"1","title":"Acer Laptop","price":"100","stock":"66","weight":"1000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"}]
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
                        showMessage("Product fetched...");
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

    })
    return (
        <>
            <div id="wrapper">
                <ToastContainer />
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
                                            {data.map((item) => {
                                                return (<table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td width="25%">
                        <img
                            src={getBaseImage() + "product/" + item.photo}
                            className="img-fluid"
                        />
                                                            </td>
                                                            <td>
                                                                <table className="table table-striped table-sm">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Name</td>
                                                                            <td>{item.title}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Category</td>
                                                                            <td>{item.categorytitle}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Price</td>
                                                                            <td>{item.price}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Stock</td>
                                                                            <td>{item.stock}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Weight</td>
                                                                            <td>{item.weight}</td>
                                                                       </tr>
                                                                        <tr>
                                                                            <td>Size</td>
                                                                            <td>{item.size}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Detail</td>
                                                                            <td>
                                                                               {item.detail}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Is Live</td>
                                                                            <td>
                            {(item.islive === '1') ? "Yes":"No"}
                                                                            </td>
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
                                                </table>);
                                            })}
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
