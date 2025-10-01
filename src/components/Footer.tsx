import React from 'react';
import { Pill, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, CreditCard, Shield, Truck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-blue-100">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">100% Authentic</p>
                <p className="text-sm text-blue-100">Verified products</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-blue-100">Always available</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm text-blue-100">COD available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Pill className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold">HealthPharm</h3>
                <p className="text-xs text-gray-400">Trusted Since 1995</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner in health and wellness. We provide authentic medications and healthcare products with fast, reliable delivery.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Prescription Upload</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>123 Healthcare Plaza, Medical District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>1-800-HEALTH-RX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@healthpharm.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Working Hours</h5>
              <p className="text-gray-400 text-sm">
                Mon - Fri: 8:00 AM - 10:00 PM<br />
                Sat - Sun: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 HealthPharm. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed Pharmacy: License #PH-123456 | Registered with FDA
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=80&h=50" alt="Payment" className="h-8 opacity-80" />
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <Shield className="w-4 h-4" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};