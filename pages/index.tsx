export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-green-900"
      style={{
        backgroundImage: "url('/luggage-clean.png')",
      }}
    >
      <div className="bg-white/70 p-6 rounded-xl shadow-md backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4">
          Find Luggage Repair Near You
        </h1>
        <p className="text-lg mb-6">
          Locate luggage repair shops conveniently close to your area.
        </p>
        <div className="flex space-x-4 justify-center mb-6">
          <button className="bg-yellow-100 px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
            New York
          </button>
          <button className="bg-yellow-100 px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
            Los Angeles
          </button>
          <button className="bg-yellow-100 px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
            London
          </button>
        </div>
        <footer className="text-sm text-center">
          © 2025 findluggagerepair.com
        </footer>
      </div>
    </div>
  );
}

