import React from 'react';
import ReactDOM from 'react-dom/client';
import './matrix.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component -> which returns JSX 
function DigitalClock() {
    return (<>
        <canvas id="matrix" />
        <div className="clock-container">
            <div>
                <div className="matrix-clock" id="clock">
                    88:88:88
                </div>
                <div className="date-text" id="date">
                    WAKE UP, NEO...
                </div>
            </div>
        </div>
    </>
    )
}
root.render(<DigitalClock />);
