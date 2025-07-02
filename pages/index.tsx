
export default function Home() {
  return (
    <div className="min-h-screen bg-[#e6f0ea] text-[#1a3c34] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Find Luggage Repair Near You
      </h1>
      <p className="text-center max-w-xl mb-6 text-lg">
        Locate luggage repair shops conveniently close to your area.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-[#fefae0] text-[#1a3c34] px-6 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
          New York
        </button>
        <button className="bg-[#fefae0] text-[#1a3c34] px-6 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
          Los Angeles
        </button>
        <button className="bg-[#fefae0] text-[#1a3c34] px-6 py-2 rounded-full shadow hover:bg-[#fceabb] transition">
          London
        </button>
      </div>

      <div className="mt-10 relative">
        <img
          src="/suitcase.png"
          alt="luggage"
          className="w-48 h-auto z-10 relative"
        />
        <img
          src="/suitcase-bg.png"
          alt=""
          className="w-48 h-auto absolute top-0 left-0 opacity-10"
        />
      </div>

      <footer className="mt-10 text-sm text-center text-[#4a4a4a]">
        © 2025 findluggagerepair.com
      </footer>
    </div>
  );
}
