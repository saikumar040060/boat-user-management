import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>Our Story</h1>
        <p>From startup to India’s No.1 audio brand</p>
      </header>

      <section className="about-content">
        <h2>How boAt Set Sail</h2>
        <p>
          Founded in 2016 by Aman Gupta and Sameer Mehta, boAt started with a bold vision:
          make affordable, stylish, and high-performance audio products for the Indian
          millennial. Fast forward, and we’ve built a boAthead army of 50M+ strong.
        </p>
        <p>
          Our products don’t just sound great — they look amazing, are built to last,
          and speak the language of a generation. From fitness freaks to music junkies,
          boAt has become part of your lifestyle.
        </p>
      </section>

      <section className="about-values">
        <div className="value-card">
          <h3>🔥 Hustle Hard</h3>
          <p>We thrive on innovation, speed, and smart work.</p>
        </div>
        <div className="value-card">
          <h3>🎨 Designed Different</h3>
          <p>boAt fuses tech with fashion — and makes it affordable.</p>
        </div>
        <div className="value-card">
          <h3>🌍 Made for India</h3>
          <p>We build for your commute, your workouts, your day-to-day.</p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join the boAthead movement</h2>
        <p>Over 50 million users trust us. Be part of the wave.</p>
        <button className="about-button">Explore Products</button>
      </section>
    </div>
  );
};

export default About;
