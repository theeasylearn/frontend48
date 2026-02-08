import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div className='container'>
    <div className="row">
        <div className="col-8 offset-2">
            <div className="card shadow">
                <div className="card-header">
                    <h3>Interest calculator</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Amount</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Rate</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Year</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div>
                            <input type="submit" className='btn btn-primary' value='calculate interest' />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>)
root.render(output);
