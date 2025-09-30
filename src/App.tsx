import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Profile } from './components/Profile';
import { Orders } from './components/Orders';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onCartClick={() => setShowCart(true)}
            onProfileClick={() => setShowProfile(true)}
            onOrdersClick={() => setShowOrders(true)}
          />

          <main>
            <ProductList />
          </main>

          <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">SVM Pharma</h3>
                <p className="text-gray-400 text-sm">Your trusted online pharmacy for all health needs</p>
                <p className="text-gray-500 text-xs mt-4">&copy; 2025 SVM Pharma. All rights reserved.</p>
              </div>
            </div>
          </footer>

          <Cart
            isOpen={showCart}
            onClose={() => setShowCart(false)}
            onCheckout={() => setShowCheckout(true)}
          />

          <Checkout
            isOpen={showCheckout}
            onClose={() => setShowCheckout(false)}
          />

          <Profile
            isOpen={showProfile}
            onClose={() => setShowProfile(false)}
          />

          <Orders
            isOpen={showOrders}
            onClose={() => setShowOrders(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;