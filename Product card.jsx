export default function ProductCard({ name, price, category, inStock }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-yellow-600 font-semibold">KSh {price.toLocaleString()}</p>
      <div className="flex justify-between mt-2">
        <span className={`px-2 py-1 text-xs rounded ${
          inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
          {category}
        </span>
      </div>
    </div>
  );
}
