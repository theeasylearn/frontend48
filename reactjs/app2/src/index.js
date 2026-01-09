import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './resturant/home';
import Aboutus from './resturant/aboutus';
import FoodMenu from './resturant/food_menu';
import BookHall from './resturant/bookhall';
import Contactus from './resturant/contactus';
import PageNotFound from './resturant/page_not_found';
const root = ReactDOM.createRoot(document.getElementById('root'));
//define function 
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} index />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/menu' element={<FoodMenu />} />
            <Route path='/bookhall' element={<BookHall />} />
            <Route path='/contactus' element={<Contactus />} />
            {/* define 404 route (must be last) */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>);
}
root.render(<MyRouter />);
