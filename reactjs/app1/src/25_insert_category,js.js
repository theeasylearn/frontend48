import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
class InsertCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    updateValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updatePhoto = (file) => {

        this.setState({
            photo: file
        });
    }
    uploadCategory = (event) => {
        console.log(this.state);
        event.preventDefault();
        let apiAddress = "https://theeasylearnacademy.com/shop/ws/insert_category.php";
        let form = new FormData();
        form.append("title", this.state.name);
        form.append("photo", this.state.photo);
        form.append("islive", this.state.islive);
        //api calling
        axios({
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form
        }).then((response) => {
            console.log(response);
            let data = response.data;
            let error = data[0]['error'];
            if (error !== 'no') {
                alert(error);
            }
            else {
                let success = data[1]['success'];
                let message = data[2]['message'];
                if (success === 'yes')
                    alert(message);
                else
                    alert(message);
            }
        }).catch((error) => {
            console.log(error);
            alert('network error, or api address is invalid, or server is down');
        });

    }
    render() {
        return (<div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="mb-0">Insert Category</h4>
                        </div>
                        <div className="card-body">
                            <form
                                method='post'
                                encType='multipart/form-data'
                                onSubmit={this.uploadCategory}
                            >
                                {/* Category Name */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Category Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required value={this.state.name}
                                        onChange={(e) => this.updateValue(e)} />
                                </div>
                                {/* Category Photo */}
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Category Photo</label>
                                    <input type="file" className="form-control" id="photo" name="photo" required
                                        onChange={(e) => this.updatePhoto(e.target.files[0])} />
                                </div>
                                {/* Category Live */}
                                <div className="mb-3">
                                    <label className="form-label d-block">Is Category Live?</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="islive" id="yes"
                                            value={1} required
                                            onChange={(e) => this.updateValue(e)}
                                        />
                                        <label className="form-check-label" htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="islive" id="no"
                                            value={0} required
                                            onChange={(e) => this.updateValue(e)}
                                        />
                                        <label className="form-check-label" htmlFor="no">No</label>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Save Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
root.render(<InsertCategory />)