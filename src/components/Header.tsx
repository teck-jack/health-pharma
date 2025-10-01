import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Package, Pill, ChevronDown, Phone, MapPin, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { AuthModal } from './AuthModal';
import { categories } from '../data/products';

interface HeaderProps {
  onCartClick: () => void;
  onProfileClick: () => void;
  onOrdersClick: () => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onProfileClick,
  onOrdersClick,
  selectedCategory,
  onCategorySelect
}) => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 8764356098</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Store Locator</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden sm:block">Free Shipping on Orders $50+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3">
                <Pill className="w-10 h-10 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">SVM Pharma</h1>
                  <p className="text-xs text-gray-500">Trusted Since 1995</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={onCartClick}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                      {cartCount}
                    </span>
                  )}
                </button>

                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                      <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                        {user.fullName.charAt(0).toUpperCase()}
                      </div>
                      <span className="hidden sm:block font-medium text-gray-700">{user.fullName}</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>

                    {showUserMenu && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setShowUserMenu(false)}
                        />
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-200">
                          <div className="px-4 py-3 border-b border-gray-200">
                            <p className="text-sm font-medium text-gray-900">{user.fullName}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                          </div>
                          <button
                            onClick={() => {
                              setShowUserMenu(false);
                              onProfileClick();
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 text-gray-700"
                          >
                            <User className="w-4 h-4" />
                            <span>My Profile</span>
                          </button>
                          <button
                            onClick={() => {
                              setShowUserMenu(false);
                              onOrdersClick();
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 text-gray-700"
                          >
                            <Package className="w-4 h-4" />
                            <span>My Orders</span>
                          </button>
                          <hr className="my-2" />
                          <button
                            onClick={() => {
                              setShowUserMenu(false);
                              logout();
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 text-red-600"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-1 py-3 overflow-x-auto">
              <div className="relative">
                <button
                  onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition font-medium text-gray-700 border border-gray-200"
                >
                  <span>All Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showCategoryMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowCategoryMenu(false)}
                    />
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-200 max-h-96 overflow-y-auto">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            onCategorySelect(category);
                            setShowCategoryMenu(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-blue-50 transition ${
                            selectedCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {categories.slice(1, 6).map(category => (
                <button
                  key={category}
                  onClick={() => onCategorySelect(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg transition font-medium ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};