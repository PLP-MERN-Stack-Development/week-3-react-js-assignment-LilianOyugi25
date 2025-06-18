export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`p-4 ${darkMode ? 'bg-green-900' : 'bg-green-800'} text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Lilian's Agri-Foods</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-white text-green-800 text-sm"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
