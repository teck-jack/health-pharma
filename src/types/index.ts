export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  stock: number;
  requiresPrescription: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  deliveryAddress: string;
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
}