import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import '../styles/Navbar.css';

// Define NavItem as a union type for path or action
type NavItem =
  | { name: string; path: string }
  | { name: string; action: () => void };

// React-icons workaround
const SearchIcon = FiSearch;
const CartIcon = FiShoppingCart;

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const mainLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const authLinks: NavItem[] = user
    ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Logout', action: logout },
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
      ];

  const handleLinkClick = (item: NavItem) => {
    if ('action' in item) item.action();
  };

  return (
    <nav className="boAt-navbar">
      <div className="navbar-logo">
        bo<span className="accent">A</span>t
      </div>

      <ul className="navbar-links">
        {[...mainLinks, ...authLinks].map((item) => (
          <li key={item.name}>
            {'action' in item ? (
              <button onClick={() => handleLinkClick(item)} className="nav-btn-link">
                {item.name}
              </button>
            ) : (
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-icons">
        {SearchIcon({ size: 18 })}
        {CartIcon({ size: 18 })}
      </div>
    </nav>
  );
};

export default Navbar;
