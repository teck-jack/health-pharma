import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Order, OrderItem } from '../types';
import { useAuth } from './AuthContext';

interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  placeOrder: (deliveryAddress: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = 'pharmacy_cart_';
const ORDERS_KEY = 'pharmacy_orders';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(CART_KEY + user.id);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }

      const savedOrders = localStorage.getItem(ORDERS_KEY);
      if (savedOrders) {
        const allOrders: Order[] = JSON.parse(savedOrders);
        setOrders(allOrders.filter(order => order.userId === user.id));
      }
    } else {
      setCartItems([]);
      setOrders([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(CART_KEY + user.id, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { id: Date.now().toString(), product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const placeOrder = (deliveryAddress: string) => {
    if (!user || cartItems.length === 0) return;

    const orderItems: OrderItem[] = cartItems.map(item => ({
      id: Date.now().toString() + Math.random(),
      product: item.product,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const newOrder: Order = {
      id: Date.now().toString(),
      userId: user.id,
      items: orderItems,
      totalAmount: getTotalPrice(),
      status: 'pending',
      deliveryAddress,
      createdAt: new Date(),
    };

    const savedOrders = localStorage.getItem(ORDERS_KEY);
    const allOrders: Order[] = savedOrders ? JSON.parse(savedOrders) : [];
    allOrders.push(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(allOrders));

    setOrders(prev => [...prev, newOrder]);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};