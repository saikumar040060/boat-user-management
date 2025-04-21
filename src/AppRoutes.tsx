import { Routes, Route } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import ContactPage from './components/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route 
          path="/contact" 
          element={
            <ContactProvider>
              <ContactPage />
            </ContactProvider>
          } 
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;