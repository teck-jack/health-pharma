import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Package, Pill } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { AuthModal } from './AuthModal';

interface HeaderProps {
  onCartClick: () => void;
  onProfileClick: () => void;
  onOrdersClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onProfileClick, onOrdersClick }) => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Pill className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SVM Pharma</h1>
                <p className="text-xs text-gray-500">Your Health Partner</p>
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
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:block font-medium text-gray-700">{user.fullName}</span>
                  </button>

                  {showUserMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowUserMenu(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-200">
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            onProfileClick();
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 text-gray-700"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};