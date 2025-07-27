import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-gradient-to-r from-[#FC004E] via-[#A14F87] to-[#10CBE0] h-[76px] text-center flex items-center justify-center">
        <h1 className="text-white">
          🚀 <span className="font-extrabold text-[#00E7F9] text-base">FRESH BEGINNINGS SALE:</span> <span className="font-bold text-sm">Extra 25% OFF, Limited Spots - start your
            journey today!</span>
        </h1>
      </header>
      <main className="bg-gray-400 h-[calc(100vh-76px)]">
        <h2>Main</h2>
      </main>
    </div>
  );
}
