import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">
        Find Luggage Repair Near You
      </h1>
      <p className="text-green-800 text-lg mb-6">
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
      <Image
        src="/luggage-clean.png"
        alt="Luggage"
        width={300}
        height={300}
        className="rounded-xl shadow"
      />
      <footer className="mt-8 text-sm text-green-800">
        © 2025 findluggagerepair.com
      </footer>
    </div>
  )
}

