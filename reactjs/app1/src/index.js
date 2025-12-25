import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function FoodMenu(props) {
    var output = props.items.map((current) => {
        return <li className="list-group-item list-group-item-success">{current}</li>
    });
    return (<div className="container mt-5">
        <div className="row">
            <div className="col-12">
                <h2>Menu Items</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <ol className="list-group list-group-numbered">
                            {output}       
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
const items = ["Paneer Butter Masala","Shahi Paneer","Palak Paneer","Chole Bhature","Rajma Chawal","Dal Makhani","Aloo Paratha","Gobi Paratha","Masala Dosa","Idli Sambhar","Vegetable Biryani","Pav Bhaji","Veg Pulao","Kadhi Pakora","Baingan Bharta","Malai Kofta","Veg Korma","Sambar","Upma","Poha"];

root.render(<FoodMenu items={items} />)