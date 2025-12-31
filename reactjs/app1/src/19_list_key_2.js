import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class CountryCard extends React.Component {
    constructor(props)
    {
        super(props);
        //create property variable 
        this.name = props.name;
        this.capital = props.capital;
        this.currency = props.currency;
        this.area = props.area;
        this.map = props.map;
        this.index = props.index;
        console.log(this.map);
    }
    render() {
        return (<div key={this.index} className="col-md-6 col-lg-3 mb-3">
            <div className="card shadow-sm h-100">
                
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">{this.name}</h3>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Capital:</strong>
                            <span>{this.capital}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Area:</strong>
                            <span>{this.area}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Currency:</strong>
                            <span>{this.currency}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>);
    }
}
function World() {
    //json 
    const countries = [
        { country: "India", capital: "New Delhi", area: 3287263, currency: "Indian Rupee", map: "https://en.wikipedia.org/wiki/File:India_(orthographic_projection).svg" },
        { country: "United States", capital: "Washington, D.C.", area: 9833517, currency: "US Dollar", map: "https://en.wikipedia.org/wiki/File:USA_orthographic.svg" },
        { country: "Canada", capital: "Ottawa", area: 9984670, currency: "Canadian Dollar", map: "https://en.wikipedia.org/wiki/File:Canada_(orthographic_projection).svg" },
        { country: "Brazil", capital: "Brasília", area: 8515767, currency: "Brazilian Real", map: "https://en.wikipedia.org/wiki/File:Brazil_(orthographic_projection).svg" },
        { country: "United Kingdom", capital: "London", area: 243610, currency: "Pound Sterling", map: "https://en.wikipedia.org/wiki/File:United_Kingdom_(orthographic_projection).svg" },
        { country: "France", capital: "Paris", area: 551695, currency: "Euro", map: "https://en.wikipedia.org/wiki/File:France_(orthographic_projection).svg" },
        { country: "Germany", capital: "Berlin", area: 357022, currency: "Euro", map: "https://en.wikipedia.org/wiki/File:Germany_(orthographic_projection).svg" },
        { country: "Italy", capital: "Rome", area: 301340, currency: "Euro", map: "https://en.wikipedia.org/wiki/File:Italy_(orthographic_projection).svg" },
        { country: "Spain", capital: "Madrid", area: 505990, currency: "Euro", map: "https://en.wikipedia.org/wiki/File:Spain_(orthographic_projection).svg" },
        { country: "Russia", capital: "Moscow", area: 17098246, currency: "Russian Ruble", map: "https://en.wikipedia.org/wiki/File:Russia_(orthographic_projection).svg" },

        { country: "China", capital: "Beijing", area: 9596961, currency: "Yuan", map: "https://en.wikipedia.org/wiki/File:China_(orthographic_projection).svg" },
        { country: "Japan", capital: "Tokyo", area: 377975, currency: "Yen", map: "https://en.wikipedia.org/wiki/File:Japan_(orthographic_projection).svg" },
        { country: "South Korea", capital: "Seoul", area: 100210, currency: "Won", map: "https://en.wikipedia.org/wiki/File:South_Korea_(orthographic_projection).svg" },
        { country: "Australia", capital: "Canberra", area: 7692024, currency: "Australian Dollar", map: "https://en.wikipedia.org/wiki/File:Australia_(orthographic_projection).svg" },
        { country: "New Zealand", capital: "Wellington", area: 268021, currency: "New Zealand Dollar", map: "https://en.wikipedia.org/wiki/File:New_Zealand_(orthographic_projection).svg" },

        { country: "Mexico", capital: "Mexico City", area: 1964375, currency: "Mexican Peso", map: "https://en.wikipedia.org/wiki/File:Mexico_(orthographic_projection).svg" },
        { country: "Argentina", capital: "Buenos Aires", area: 2780400, currency: "Argentine Peso", map: "https://en.wikipedia.org/wiki/File:Argentina_(orthographic_projection).svg" },
        { country: "Chile", capital: "Santiago", area: 756102, currency: "Chilean Peso", map: "https://en.wikipedia.org/wiki/File:Chile_(orthographic_projection).svg" },
        { country: "Peru", capital: "Lima", area: 1285216, currency: "Sol", map: "https://en.wikipedia.org/wiki/File:Peru_(orthographic_projection).svg" },
        { country: "Colombia", capital: "Bogotá", area: 1141748, currency: "Colombian Peso", map: "https://en.wikipedia.org/wiki/File:Colombia_(orthographic_projection).svg" },

        { country: "South Africa", capital: "Pretoria", area: 1221037, currency: "Rand", map: "https://en.wikipedia.org/wiki/File:South_Africa_(orthographic_projection).svg" },
        { country: "Egypt", capital: "Cairo", area: 1002450, currency: "Egyptian Pound", map: "https://en.wikipedia.org/wiki/File:Egypt_(orthographic_projection).svg" },
        { country: "Nigeria", capital: "Abuja", area: 923768, currency: "Naira", map: "https://en.wikipedia.org/wiki/File:Nigeria_(orthographic_projection).svg" },
        { country: "Kenya", capital: "Nairobi", area: 580367, currency: "Kenyan Shilling", map: "https://en.wikipedia.org/wiki/File:Kenya_(orthographic_projection).svg" },
        { country: "Ethiopia", capital: "Addis Ababa", area: 1104300, currency: "Birr", map: "https://en.wikipedia.org/wiki/File:Ethiopia_(orthographic_projection).svg" },

        { country: "Saudi Arabia", capital: "Riyadh", area: 2149690, currency: "Saudi Riyal", map: "https://en.wikipedia.org/wiki/File:Saudi_Arabia_(orthographic_projection).svg" },
        { country: "UAE", capital: "Abu Dhabi", area: 83600, currency: "UAE Dirham", map: "https://en.wikipedia.org/wiki/File:United_Arab_Emirates_(orthographic_projection).svg" },
        { country: "Israel", capital: "Jerusalem", area: 20770, currency: "Shekel", map: "https://en.wikipedia.org/wiki/File:Israel_(orthographic_projection).svg" },
        { country: "Turkey", capital: "Ankara", area: 783356, currency: "Turkish Lira", map: "https://en.wikipedia.org/wiki/File:Turkey_(orthographic_projection).svg" },
        { country: "Iran", capital: "Tehran", area: 1648195, currency: "Rial", map: "https://en.wikipedia.org/wiki/File:Iran_(orthographic_projection).svg" },

        { country: "Thailand", capital: "Bangkok", area: 513120, currency: "Baht", map: "https://en.wikipedia.org/wiki/File:Thailand_(orthographic_projection).svg" },
        { country: "Indonesia", capital: "Jakarta", area: 1904569, currency: "Rupiah", map: "https://en.wikipedia.org/wiki/File:Indonesia_(orthographic_projection).svg" },
        { country: "Malaysia", capital: "Kuala Lumpur", area: 330803, currency: "Ringgit", map: "https://en.wikipedia.org/wiki/File:Malaysia_(orthographic_projection).svg" },
        { country: "Singapore", capital: "Singapore", area: 728, currency: "Singapore Dollar", map: "https://en.wikipedia.org/wiki/File:Singapore_(orthographic_projection).svg" },
        { country: "Philippines", capital: "Manila", area: 300000, currency: "Peso", map: "https://en.wikipedia.org/wiki/File:Philippines_(orthographic_projection).svg" },

        { country: "Pakistan", capital: "Islamabad", area: 881913, currency: "Pakistani Rupee", map: "https://en.wikipedia.org/wiki/File:Pakistan_(orthographic_projection).svg" },
        { country: "Bangladesh", capital: "Dhaka", area: 147570, currency: "Taka", map: "https://en.wikipedia.org/wiki/File:Bangladesh_(orthographic_projection).svg" },
        { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", area: 65610, currency: "Sri Lankan Rupee", map: "https://en.wikipedia.org/wiki/File:Sri_Lanka_(orthographic_projection).svg" },
        { country: "Nepal", capital: "Kathmandu", area: 147181, currency: "Nepalese Rupee", map: "https://en.wikipedia.org/wiki/File:Nepal_(orthographic_projection).svg" },
        { country: "Afghanistan", capital: "Kabul", area: 652230, currency: "Afghani", map: "https://en.wikipedia.org/wiki/File:Afghanistan_(orthographic_projection).svg" }
    ];
    //   { country: "India", capital: "New Delhi", area: 3287263, currency: "Indian Rupee", map: "https://en.wikipedia.org/wiki/File:India_(orthographic_projection).svg" },
    return (<div className="container my-5">
        <div className="row justify-content-center">
            {
                countries.map((item,index) => {
                    return <CountryCard  name={item.country} capital={item.capital} currency={item.currency} area={item.area} index={index}  />
                })
            }
        </div>
    </div>)
}
root.render(<World />)