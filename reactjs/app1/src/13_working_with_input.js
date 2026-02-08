import ReactDOM from 'react-dom/client';
import React from 'react';
class InterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            amount: 0,
            rate: 0.0,
            year: 0,
            interest: 0
        }
    }
    //arrow function
    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    }
    updateRate = (event) => {
        this.setState({
            rate: event.target.value
        });
    }
    updateYear = (event) => {
        this.setState({
            year: event.target.value
        });
    }

    calculateInterest = (event) => {

        console.log(this.state);
        this.setState({
            interest: (this.state.amount * this.state.rate * this.state.year) / 100
        });
        event.preventDefault(); //prevent refreshing web page (required)
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3>Interest calculator</h3>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={this.calculateInterest}>
                                    <div className='mb-3'>
                                        <label htmlFor="amount" className='form-label'>Amount</label>
                                        <input type="text" name='amount' id='amount' className='form-control' onChange={this.updateAmount} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="rate" className='form-label'>Rate</label>
                                        <input name='rate' id='rate' type="text" className='form-control' onChange={this.updateRate} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="year" className='form-label'>Year</label>
                                        <select name="year" id="year" className='form-select'
                                            onChange={this.updateYear}>
                                            <option value="">Year</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="submit" className='btn btn-primary' value='calculate interest' />
                                    </div>
                                    <div>
                                        <h3>{this.state.interest}</h3>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestCalculator />);
