import React from 'react';
import { ShoppingCart, FileText, Plus, Minus, Eye } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  cartItem?: CartItem;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartItem,
  onAddToCart,
  onUpdateQuantity,
  onViewDetails
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden group">
      <div className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition bg-white rounded-full p-3 shadow-lg">
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
        </div>
        {product.requiresPrescription && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 shadow-md">
            <FileText className="w-3 h-3" />
            <span>Rx Required</span>
          </div>
        )}
        {product.stock < 20 && product.stock > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium shadow-md">
            Only {product.stock} left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <span className="text-white font-bold text-lg">OUT OF STOCK</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <h3
          className="font-semibold text-gray-900 mb-2 line-clamp-1 cursor-pointer hover:text-blue-600 transition"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 h-10">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <p className="text-xs text-gray-500">{product.stock} available</p>
          </div>
        </div>

        {cartItem ? (
          <div className="flex items-center justify-between bg-blue-50 rounded-lg p-2 border-2 border-blue-600">
            <button
              onClick={() => onUpdateQuantity(product.id, cartItem.quantity - 1)}
              className="bg-white p-2 rounded-lg hover:bg-gray-100 transition shadow-sm"
            >
              <Minus className="w-4 h-4 text-blue-600" />
            </button>
            <div className="text-center">
              <span className="font-bold text-lg text-blue-600">{cartItem.quantity}</span>
              <p className="text-xs text-gray-600">in cart</p>
            </div>
            <button
              onClick={() => onUpdateQuantity(product.id, cartItem.quantity + 1)}
              disabled={cartItem.quantity >= product.stock}
              className="bg-white p-2 rounded-lg hover:bg-gray-100 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
};