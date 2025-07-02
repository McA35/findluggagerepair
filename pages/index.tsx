export default function Home() {
  return (
    <div className="min-h-screen bg-[#e6f0ea] text-[#1a3c34] flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      
      {/* Sol içerik */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Luggage Repair Near You
        </h1>
        <p className="text-lg mb-6">
          Locate luggage repair shops conveniently close to your area.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
          <button className="bg-[#fefae0] text-[#1a3c34] px-5 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
            New York
          </button>
          <button className="bg-[#fefae0] text-[#1a3c34] px-5 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
            Los Angeles
          </button>
          <button className="bg-[#fefae0] text-[#1a3c34] px-5 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
            London
          </button>
        </div>

        <footer className="text-sm text-[#4a4a4a] mt-6">
          © 2025 findluggagerepair.com
        </footer>
      </div>

      {/* Sağ görsel */}
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

