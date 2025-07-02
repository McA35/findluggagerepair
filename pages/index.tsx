export default function Home() {
  return (
    <div
      className="min-h-screen bg-green-100 bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundImage: "url('/luggage-clean.png')",
      }}
    >
      <h1 className="text-4xl font-bold text-green-900 mb-4 bg-white/70 px-4 py-2 rounded-xl">
        Find Luggage Repair Near You
      </h1>
      <p className="text-green-800 text-lg mb-6 bg-white/60 px-4 py-2 rounded-xl">
        Locate luggage repair shops conveniently close to your area.
      </p>
      <div className="flex space-x-4 mb-6">
        <button className="bg-yellow-100 text-green-900 font-medium px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
          New York
        </button>
        <button className="bg-yellow-100 text-green-900 font-medium px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
          Los Angeles
        </button>
        <button className="bg-yellow-100 text-green-900 font-medium px-4 py-2 rounded-xl shadow hover:bg-yellow-200">
          London
        </button>
      </div>
      <footer className="mt-8 text-sm text-green-800 bg-white/60 px-4 py-1 rounded-xl">
        © 2025 findluggagerepair.com
      </footer>
    </div>
  )
}


