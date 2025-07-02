export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col md:flex-row items-center justify-between p-6 md:p-16 text-[#1a3c34]">
      
      {/* Sol içerik alanı */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Luggage Repair Near You
        </h1>
        <p className="text-lg mb-6">
          Locate luggage repair shops conveniently close to your area.
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
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
        <footer className="text-sm text-gray-600">
          © 2025 findluggagerepair.com
        </footer>
      </div>

      {/* Sağ görsel alanı */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="/luggage-clean.png"
          alt="Luggage Illustration"
          className="w-64 md:w-80 h-auto"
        />
      </div>
    </div>
  );
}

