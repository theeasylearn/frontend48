import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminDashboard from './components/AdminDashboard';
import AdminAddCategory from './components/AdminAddCategory';
import AdminAddProduct from './components/AdminAddProduct';
import AdminCategory from './components/AdminCategory';
import AdminChangePassword from './components/AdminChangePassword';
import AdminEditCategory from './components/AdminEditCategory';
import AdminEditProduct from './components/AdminEditProduct';
import AdminForgetpassword from './components/AdminForgetpassword';
import AdminLogin from './components/AdminLogin';
import AdminOrders from './components/AdminOrders';
import AdminPrintOrder from './components/AdminPrintOrder';
import AdminProduct from './components/AdminProduct';
import AdminViewOrderDetail from './components/AdminViewOrderDetail';
import AdminViewProductDetail from './components/AdminViewProductDetail';
import AdminUsers from './components/AdminUsers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<AdminForgetpassword />} />
        <Route path="/change-password" element={<AdminChangePassword />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/add-category" element={<AdminAddCategory />} />

        {/* dynamic route = (route with parameter) */}
        <Route path="/edit-category/:categoryid" element={<AdminEditCategory />} />
        <Route path="/edit-product/:productid" element={<AdminEditProduct />} />
        <Route path="/view-product/:productid" element={<AdminViewProductDetail />} />
        <Route path="/view-order/:orderid" element={<AdminViewOrderDetail />} />
        <Route path="/d:id" element={<AdminPrintOrder />} />

        <Route path="/product" element={<AdminProduct />} />
        <Route path="/add-product" element={<AdminAddProduct />} />
        <Route path="/order" element={<AdminOrders />} />
        <Route path="/users" element={<AdminUsers />} />
        {/* define 404 route which handle request for non existing routes */}
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CookiesProvider>
  <MyRouter />
</CookiesProvider>);
