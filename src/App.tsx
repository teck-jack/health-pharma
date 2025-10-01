import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Profile } from './components/Profile';
import { Orders } from './components/Orders';
import { Footer } from './components/Footer';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header
            onCartClick={() => setShowCart(true)}
            onProfileClick={() => setShowProfile(true)}
            onOrdersClick={() => setShowOrders(true)}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          <main className="flex-1">
            <ProductList
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </main>

          <Footer />

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