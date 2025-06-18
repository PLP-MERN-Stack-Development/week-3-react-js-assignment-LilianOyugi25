import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import TaskManager from './TaskManager';

export default function App() {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Mock API data for Western Kenya
  useEffect(() => {
    setProducts([
      { id: 1, name: 'Maize', price: 2500, category: 'Cereals', inStock: true },
      { id: 2, name: 'Milk', price: 60, category: 'Dairy', inStock: true },
      { id: 3, name: 'Kale (Sukuma)', price: 20, category: 'Vegetables', inStock: false }
    ]);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Western Kenya Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Farm Tasks</h2>
        <TaskManager />
      </main>
    </div>
  );
}
