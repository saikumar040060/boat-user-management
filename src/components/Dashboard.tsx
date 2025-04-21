import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>My bo<span className="accent">A</span>t</h1>
        <nav className="dashboard-nav">
          <button className="active">Dashboard</button>
          <button>Orders</button>
          <button>Settings</button>
          <button className="cta-button">Shop Now</button>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="user-welcome">
          <h2>Welcome, {user?.name || 'boAthead'} 🎧</h2>
          <p>Your boAt lifestyle hub — track orders, get deals, and more.</p>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Recent Order</h3>
            <p>Airdopes 161 • ₹1299 • Delivered</p>
            <button className="dashboard-btn">View Order</button>
          </div>

          <div className="dashboard-card">
            <h3>Recommended</h3>
            <p>Rockerz 255 Pro+ • ₹1499</p>
            <button className="dashboard-btn">View Product</button>
          </div>

          <div className="dashboard-card">
            <h3>Loyalty Level</h3>
            <p>Silver Member ⭐</p>
            <button className="dashboard-btn">View Benefits</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
