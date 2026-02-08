import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class AreaCalculator extends Component {
    constructor(props) {
        super(props);
        //create property variable
        this.lendth = React.createRef();
        this.width = React.createRef();
        this.state = {
            area: ''
        };
    }
    calculateArea = (event) => {
        event.preventDefault();
        console.log(this.lendth.current.value);
        console.log(this.width.current.value);
        this.setState({
            area: this.lendth.current.value * this.width.current.value
        });
    }
    render() {
        return (<div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Area Calculator</h4>
                        </div>
                        <div className="card-body">
                            <form method='post' onSubmit={this.calculateArea}>
                                <div className="mb-3">
                                    <label className="form-label">Length</label>
                                    <input type="number" className="form-control" placeholder="Enter length" ref={this.lendth} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Width</label>
                                    <input type="number" className="form-control" placeholder="Enter width" ref={this.width} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Calculate Area
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                    <h5>Area: <span className="text-primary">{this.state.area}</span></h5>
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
root.render(<AreaCalculator />)