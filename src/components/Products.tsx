import { Link } from 'react-router-dom';
import '../styles/Products.css';

const products = [
  {
    id: 'airdopes-161',
    name: 'boAt Airdopes 161',
    price: 1299,
    image: '/images/airdopes-product.png',
    tagline: 'Wireless Earbuds • 40H Playback'
  },
  {
    id: 'rockerz-255',
    name: 'boAt Rockerz 255 Pro+',
    price: 1499,
    image: '/images/rockerz-255.png',
    tagline: 'Neckband • 60H Battery • ASAP Charge'
  },
  {
    id: 'bassheads-100',
    name: 'boAt BassHeads 100',
    price: 399,
    image: '/images/bassheads-100.png',
    tagline: 'Wired Earphones • Extra Bass'
  },
  {
    id: 'airdopes-131',
    name: 'boAt Airdopes 131',
    price: 1199,
    image: '/images/airdopes-131.png',
    tagline: 'Wireless Earbuds • IWP Tech'
  },
  {
    id: 'rockerz-235v2',
    name: 'boAt Rockerz 235v2',
    price: 999,
    image: '/images/rockerz-235v2.png',
    tagline: 'Wireless Neckband • IPX5 • Fast Charge'
  },
  {
    id: 'stone-180',
    name: 'boAt Stone 180',
    price: 1299,
    image: '/images/stone-180.png',
    tagline: 'Portable Bluetooth Speaker • 5W Output'
  },
  {
    id: 'watch-storm',
    name: 'boAt Watch Storm',
    price: 1999,
    image: '/images/watch-storm.png',
    tagline: 'Smartwatch • SpO2 Monitor'
  },
  {
    id: 'airdopes-141',
    name: 'boAt Airdopes 141',
    price: 1499,
    image: '/images/airdopes-141.png',
    tagline: 'Low Latency Gaming Mode'
  },
  {
    id: 'rockerz-333',
    name: 'boAt Rockerz 333',
    price: 1399,
    image: '/images/rockerz-333.png',
    tagline: 'Dual Pairing • Upto 30H Playback'
  },
  {
    id: 'bassheads-152',
    name: 'boAt BassHeads 152',
    price: 499,
    image: '/images/bassheads-152.png',
    tagline: 'Wired Earphones • HD Sound'
  },
  {
    id: 'stone-650',
    name: 'boAt Stone 650',
    price: 1999,
    image: '/images/stone-650.png',
    tagline: 'Bluetooth Speaker • 10W RMS'
  },
  {
    id: 'airdopes-441',
    name: 'boAt Airdopes 441',
    price: 2499,
    image: '/images/airdopes-441.png',
    tagline: 'Sport Earbuds • IPX7'
  },
  {
    id: 'rockerz-261',
    name: 'boAt Rockerz 261',
    price: 1199,
    image: '/images/rockerz-261.png',
    tagline: 'Sports Wireless Neckband • Secure Fit'
  },
  {
    id: 'bassheads-103',
    name: 'boAt BassHeads 103',
    price: 399,
    image: '/images/bassheads-103.png',
    tagline: 'Wired • Lightweight Design'
  },
  {
    id: 'watch-wave',
    name: 'boAt Wave Call',
    price: 2199,
    image: '/images/watch-wave.png',
    tagline: 'Bluetooth Calling Smartwatch'
  }
];

const Products = () => {
  return (
    <div className="products-container">
      <h1>Shop Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <p className="price">₹{product.price}</p>
            <Link to={`/products/${product.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
