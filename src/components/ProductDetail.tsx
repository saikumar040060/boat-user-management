import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const productData = {
  'airdopes-161': {
    name: 'boAt Airdopes 161',
    tagline: 'Wireless Earbuds • 40H Playback',
    price: 1299,
    image: '/airdopes-product.png',
    description: 'Experience true wireless freedom with Airdopes 161. Enjoy immersive sound, IPX5 water resistance, and our signature ASAP charge.'
  },
  'rockerz-255': {
    name: 'boAt Rockerz 255 Pro+',
    tagline: 'ASAP Charge • 60H Playback',
    price: 1499,
    image: '/rockerz-255.png',
    description: 'Take your workouts to the next level. These wireless neckbands offer extreme battery life and fast charging.'
  },
  'bassheads-100': {
    name: 'boAt BassHeads 100',
    tagline: 'Super Extra Bass • Wired',
    price: 399,
    image: '/bassheads-100.png',
    description: 'Plug into your sound with powerful bass, 3.5mm jack, and a durable design made for everyday use.'
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData];

  if (!product) {
    return <h2 style={{ color: 'white', textAlign: 'center' }}>Product not found.</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="tagline">{product.tagline}</p>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
