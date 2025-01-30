import React from "react";
import {
  ArrowRight,
  ChevronRight,
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";
import { Category, Product } from "../types/types";
// Hero Section Component
const Hero = () => (
  <div className="relative bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Summer Collection 2025
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our latest collection of trendy products at unbeatable
            prices. Free shipping on orders over $50.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center">
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        <div className="relative">
          <img
            src="/api/placeholder/600/400"
            alt="Hero"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-gray-500">Special Offer</p>
            <p className="text-2xl font-bold text-indigo-600">Up to 50% Off</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Featured Categories Component
const FeaturedCategories = () => {
  const categories: Array<Category> = [
    {
      id: 1,
      name: "Electronics",
      image: "/api/placeholder/300/200",
      items: "245",
    },
    { id: 2, name: "Fashion", image: "/api/placeholder/300/200", items: "156" },
    {
      id: 3,
      name: "Home & Living",
      image: "/api/placeholder/300/200",
      items: "324",
    },
    { id: 4, name: "Sports", image: "/api/placeholder/300/200", items: "198" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
            View All
            <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {category.items} items
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Popular Products Component
const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      rating: 4.5,
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 199.99,
      rating: 4.8,
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 79.99,
      rating: 4.3,
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 89.99,
      rating: 4.6,
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
            View All
            <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Newsletter Section Component
const Newsletter = () => (
  <div className="bg-indigo-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          Get updates about new products and special offers directly to your
          inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Homepage Component
const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedCategories />
      <PopularProducts />
      <Newsletter />
    </div>
  );
};

export default Homepage;
