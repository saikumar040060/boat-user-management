import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <div className="hero-content">
          <h1>Welcome to bo<span className="accent">A</span>t</h1>
          <p>India’s No.1 Audio & Wearable Brand</p>
          <div className="cta-buttons">
            <Link to="/about" className="cta-primary">Learn More</Link>
            <Link to="/products" className="cta-secondary">Explore Products</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/boat-lifestyle.png" alt="boAt Lifestyle" />
        </div>
      </motion.section>

      {/* Company Story */}
      <section className="company-story">
        <h2>Redefining Lifestyle</h2>
        <p>
          Founded in 2016, boAt has quickly become a trailblazer in audio and wearable tech.
          We design for the millennial generation — bold, powerful, and built to perform.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid-section">
        <div className="grid-card">
          <h3>Our Mission</h3>
          <p>
            To deliver world-class audio experiences that empower and energize.
          </p>
        </div>
        <div className="grid-card">
          <h3>Our Vision</h3>
          <p>
            Be the lifestyle tech brand loved globally by 100 million+ consumers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-item">
          <h2>50M+</h2>
          <p>Happy boAtheads</p>
        </div>
        <div className="stat-item">
          <h2>#1</h2>
          <p>Audio Brand in India</p>
        </div>
        <div className="stat-item">
          <h2>60+</h2>
          <p>Products Shipped</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
