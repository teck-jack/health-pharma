import React, { useState } from 'react';
import { X, ShoppingCart, Minus, Plus, Star, Shield, Truck, Clock, FileText, CheckCircle } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductDetailsProps {
  product: Product | null;
  cartItem?: CartItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  cartItem,
  isOpen,
  onClose,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      onAddToCart(product);
    }
    setSelectedQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-gray-100 rounded-full transition shadow-md"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <div className="relative">
            <div className="sticky top-0">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.requiresPrescription && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 shadow-lg">
                    <FileText className="w-4 h-4" />
                    <span>Prescription Required</span>
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-700">100% Authentic</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                  <Truck className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-700">Fast Delivery</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                  <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-700">2-3 Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.stock < 20 && product.stock > 0 && (
                  <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    Only {product.stock} left
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.0) 128 reviews</span>
              </div>

              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">{product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">{(product.price * 1.2).toFixed(2)}</span>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  Save 17%
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">FDA Approved and Clinically Tested</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Safe for long-term use as directed</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Free shipping on orders over 500 Rs</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Product Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Stock:</span>
                  <span className="ml-2 font-medium text-gray-900">{product.stock} units</span>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium text-gray-900">{product.category}</span>
                </div>
                <div>
                  <span className="text-gray-600">Prescription:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {product.requiresPrescription ? 'Required' : 'Not Required'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Delivery:</span>
                  <span className="ml-2 font-medium text-gray-900">2-3 business days</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              {cartItem ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 border-2 border-blue-600">
                    <button
                      onClick={() => onUpdateQuantity(product.id, cartItem.quantity - 1)}
                      className="bg-white p-3 rounded-lg hover:bg-gray-100 transition shadow-sm"
                    >
                      <Minus className="w-5 h-5 text-blue-600" />
                    </button>
                    <div className="text-center">
                      <span className="font-bold text-2xl text-blue-600">{cartItem.quantity}</span>
                      <p className="text-sm text-gray-600">in cart</p>
                    </div>
                    <button
                      onClick={() => onUpdateQuantity(product.id, cartItem.quantity + 1)}
                      disabled={cartItem.quantity >= product.stock}
                      className="bg-white p-3 rounded-lg hover:bg-gray-100 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                  <p className="text-center text-green-600 font-medium flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Added to cart</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                        className="bg-white p-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="font-bold text-lg text-gray-900 w-12 text-center">
                        {selectedQuantity}
                      </span>
                      <button
                        onClick={() => setSelectedQuantity(Math.min(product.stock, selectedQuantity + 1))}
                        className="bg-white p-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 font-medium text-lg shadow-lg"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>Add to Cart - {(product.price * selectedQuantity).toFixed(2)}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};