import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header-top bg-gradient-to-r from-[#FC004E] via-[#A14F87] to-[#10CBE0] h-[76px] text-center flex items-center justify-center">
        <h1 className="text-white">
          🚀 <span className="font-extrabold text-[#00E7F9] text-base">FRESH BEGINNINGS SALE:</span> <span className="font-bold text-sm">Extra 25% OFF, Limited Spots - start your
            journey today!</span>
        </h1>
      </div>
      <header className="flex justify-end bg-[#010101] py-[16px]">
        <div className="header-bottom flex items-center justify-between w-[251px] pr-[28px]">
          <div className="header-bottom-left">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="header-bottom-right">
            <Image src="/hamburger.png" alt="Logo" width={20} height={12} />
          </div>
        </div>
      </header>
      <main className="bg-gray-400 h-[calc(100vh-152px)]">
        <h2>Main</h2>
      </main>
    </div>
  );
}
