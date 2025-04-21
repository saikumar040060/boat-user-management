import { useState, useEffect } from 'react';
import '../styles/Orders.css';

interface Order {
  id: string;
  product: string;
  status: 'delivered' | 'shipped' | 'cancelled';
  date: string;
  total: number;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API
    const fakeOrders: Order[] = [
      {
        id: 'BOAT1234',
        product: 'boAt Airdopes 161',
        status: 'delivered',
        date: '2024-03-02',
        total: 1299
      },
      {
        id: 'BOAT1235',
        product: 'boAt Rockerz 255 Pro+',
        status: 'shipped',
        date: '2024-04-10',
        total: 1499
      }
    ];

    setTimeout(() => {
      setOrders(fakeOrders);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="loading">Loading your orders...</div>;

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders">You haven’t ordered anything yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span>Order #{order.id}</span>
              <span className={`status-${order.status}`}>
                {order.status.toUpperCase()}
              </span>
            </div>
            <div className="order-details">
              <p><strong>{order.product}</strong></p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ₹{order.total}</p>
            </div>
            <button className="download-btn">Download Receipt</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
