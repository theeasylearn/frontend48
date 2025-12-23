import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//class components 
class DinningTable extends React.Component {
    constructor(props) {
        super(props); //required 
        //create state object
        this.state = {
            thali: 0,
            roti: 0,
            chas: 0,
            sweet: 0,
            papad: 0,
            price: 0
        }
        //alert('constructor called...');
        //create instance (property) variable
        this.name = props.name;
        this.tableno = props.tableno;
        this.thaliPrice = 100;
        this.rotiPrice = 10;
        this.papadPrice = 7;
        this.chasPrice = 11;
        this.sweePrice = 15.25;
    }
    updatePrice = () => {
        // this code will execute only after thali is updated 
        this.setState({
            price: (this.state.thali * this.thaliPrice) +
                (this.state.roti * this.rotiPrice) +
                (this.state.chas * this.chasPrice) +
                (this.state.papad * this.papadPrice) +
                (this.state.sweet * this.sweePrice)

        });
    }

    updateItem = (item) => {
        console.log(item);
        if (item === 'thali') {
            this.setState({
                thali: this.state.thali + 1
            }, () => this.updatePrice());
        }

        else if (item === 'roti') {
            this.setState({
                roti: this.state.roti + 1
            }, () => this.updatePrice());
        }

        else if (item === 'chas') {
            this.setState({
                chas: this.state.chas + 1
            }, () => this.updatePrice());
        }

        else if (item === 'papad') {
            this.setState({
                papad: this.state.papad + 1
            }, () => this.updatePrice());
        }

        else {
            this.setState({
                sweet: this.state.sweet + 1
            }, () => this.updatePrice());
        }
    }
    render() {
        //alert('render called..'); 
        return (<div className="col-lg-3 my-3">
            <div className="card shadow">
                <div className="card-header text-bg-primary d-flex justify-content-between">
                    <h5>{this.name}</h5>
                    <h5><span className="badge bg-white text-primary">{this.tableno}</span></h5>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-danger w-100"
                        onClick={() => this.updateItem('thali')}>Thali - <span className="badge bg-white text-primary">{this.state.thali}</span></button>
                    <div className="row mt-2">
                        <div className="col-6">
                            <button
                                onClick={() => this.updateItem('roti')} type="button" className="btn btn-dark w-100">Roti - <span className="badge bg-white text-dark">{this.state.roti}</span></button>
                        </div>
                        <div className="col-6">
                            <button
                                onClick={() => this.updateItem('chas')} type="button" className="btn btn-warning w-100">chas - <span className="badge bg-white text-dark">{this.state.chas}</span></button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <button
                                onClick={() => this.updateItem('papad')}
                                type="button" className="btn btn-info w-100">Papad - <span className="badge bg-white text-dark">{this.state.papad}</span></button>
                        </div>
                        <div className="col-6">
                            <button
                                onClick={() => this.updateItem('sweet')}
                                type="button" className="btn btn-success w-100">sweet - <span className="badge bg-white text-dark">{this.state.sweet}</span></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <span className="h5">Total</span>
                    <span className="h5">Rs {this.state.price}</span>
                </div>
            </div>
        </div>);
    }
}
class Resturant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                {/* when you create Dinning table class, first constructor executes then render method execute */}
                <DinningTable name='Ram Patel' tableno='9' />
                <DinningTable name='Krishna pandya' tableno='25' />
                {/* 
                <DinningTable name='Mohan sharma' tableno='36' /> 
                <DinningTable  tableno='99' name='Ankit Patel' />  */}
            </div>
        </div>
        );
    }
}
root.render(<Resturant />);
