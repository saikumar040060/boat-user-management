import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ContactProvider } from './context/ContactContext'; // Add this import
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Hero from './components/HeroSection';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Orders from './components/Orders';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ContactPage from './components/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ContactProvider> {/* Wrap with ContactProvider */}
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<UserProfile />} />
            </Route>

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContactProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;