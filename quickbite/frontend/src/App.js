import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import OwnerRestaurants from './pages/OwnerRestaurants';
import OwnerMenu from './pages/OwnerMenu';
import OwnerOrders from './pages/OwnerOrders';
import DeliveryAvailable from './pages/DeliveryAvailable';
import DeliveryMy from './pages/DeliveryMy';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminOrders from './pages/AdminOrders';
import AdminRestaurants from './pages/AdminRestaurants';

function PrivateRoute({ children, roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/login" />;
  return children;
}

function AppRoutes() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={user ? '/restaurants' : '/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer routes */}
        <Route path="/restaurants" element={<PrivateRoute roles={['CUSTOMER']}><RestaurantList /></PrivateRoute>} />
        <Route path="/restaurant/:id" element={<PrivateRoute roles={['CUSTOMER']}><RestaurantDetail /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute roles={['CUSTOMER']}><Cart /></PrivateRoute>} />
        <Route path="/my-orders" element={<PrivateRoute roles={['CUSTOMER']}><MyOrders /></PrivateRoute>} />

        {/* Owner routes */}
        <Route path="/owner/restaurants" element={<PrivateRoute roles={['RESTAURANT_OWNER']}><OwnerRestaurants /></PrivateRoute>} />
        <Route path="/owner/menu/:restaurantId" element={<PrivateRoute roles={['RESTAURANT_OWNER']}><OwnerMenu /></PrivateRoute>} />
        <Route path="/owner/orders" element={<PrivateRoute roles={['RESTAURANT_OWNER']}><OwnerRestaurants /></PrivateRoute>} />
        <Route path="/owner/orders/:restaurantId" element={<PrivateRoute roles={['RESTAURANT_OWNER']}><OwnerOrders /></PrivateRoute>} />

        {/* Delivery routes */}
        <Route path="/delivery/available" element={<PrivateRoute roles={['DELIVERY_PARTNER']}><DeliveryAvailable /></PrivateRoute>} />
        <Route path="/delivery/my" element={<PrivateRoute roles={['DELIVERY_PARTNER']}><DeliveryMy /></PrivateRoute>} />

        {/* Admin routes */}
        <Route path="/admin" element={<PrivateRoute roles={['ADMIN']}><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute roles={['ADMIN']}><AdminUsers /></PrivateRoute>} />
        <Route path="/admin/orders" element={<PrivateRoute roles={['ADMIN']}><AdminOrders /></PrivateRoute>} />
        <Route path="/admin/restaurants" element={<PrivateRoute roles={['ADMIN']}><AdminRestaurants /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
