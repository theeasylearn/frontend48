import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        //always call api inside componentDidMount3
        let apiAddress = "https://theeasylearnacademy.com/shop/ws/category.php";
        axios({
            url: apiAddress,
            method: 'get',
            responsetype: 'json'
        }).then((response) => {
            //console.log(response);
            //check if response has error 
            let data = response.data;
            let error = data[0]['error'];
            if (error !== 'no') {
                alert(error);
            }
            else {
                let total = data[1]['total'];
                if (total === 0)
                    alert('no category found')
                else {
                    data.splice(0, 2); //delete 2 object from begining 
                    this.setState({
                        items: data
                    });
                }
            }
            console.log(error);
        }).catch((error) => {
            console.log(error);
        });

    }
    render() {
        return (<div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-100">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Content List</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped mb-0 align-middle text-center">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Photo</th>
                                            <th>Is Live</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.items.map((row) => {
                                            return (<tr>
                                                <td>{row.id}</td>
                                                <td>{row.title}</td>
                                                <td>
                                                    <img src={"https://theeasylearnacademy.com/shop/images/category/" + row.photo} className="img-fluid img-thumbnail" alt="photo" />
                                                </td>
                                                <td>
                                                    {row.islive === '1'?"Yes":"No"}
                                                </td>
                                            </tr>)
                                        })};
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
root.render(<Category />)