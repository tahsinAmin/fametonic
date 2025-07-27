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
      <header className="fixed-header flex justify-end py-[16px]">
        <div className="header-bottom flex items-center justify-between w-[251px] pr-[28px]">
          <div className="header-bottom-left">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="header-bottom-right">
            <Image src="/hamburger.png" alt="Logo" width={20} height={12} />
          </div>
        </div>
      </header>
      <main className="content">
        <section className="tai-hero-section">
          <div className="tai-hero-section-bg">
            <div className="hero-wrapper">
              <div className="hero-content">
                <h1 className="hero-title text-center text-white">Want to Turn Social Media Into a Profitable Career?</h1>
                <div className="mcdonalds-logo-wrapper text-center">
                  <span className="mcdonalds-logo-shadow">Discover your way to success with Fametonic:</span>
                  <span className="mcdonalds-logo-main">Discover your way to success with Fametonic:</span>
                </div>
                <ul className="text-white pt-[22px]">
                  <li className="grid grid-cols-9 items-center mb-[12px]">
                    <Image className="col-span-1" src="/sparkle.png" alt="Sparkle" width={22} height={23} />
                    <span className="col-span-8">Start growing your influence right away—no waiting required!</span>
                  </li>
                  <li className="grid grid-cols-9 items-center mb-[12px]">
                    <Image className="col-span-1" src="/sparkle.png" alt="Sparkle" width={22} height={23} />
                    <span className="col-span-8">Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                  </li>
                  <li className="grid grid-cols-9 items-center mb-[12px]">
                    <Image className="col-span-1" src="/sparkle.png" alt="Sparkle" width={22} height={23} />
                    <span className="col-span-8">Use a Personal AI Worker to boost your content </span>
                  </li>
                  <li className="grid grid-cols-9 items-center mb-[12px]">
                    <Image className="col-span-1" src="/sparkle.png" alt="Sparkle" width={22} height={23} />
                    <span className="col-span-8">Learn from expert-led courses designed for aspiring influencers</span>
                  </li>
                </ul>
                <div>
                  <div className="text-center">
                    <p className="text-[#ABABAB] mb-[13px] mt-[20px] text-xs">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                    <p className="text-[#ABABAB] text-[10px] nunito mb-[32px]">Fametonic 2025 ©All Rights Reserved.</p>
                  </div>
                  <div className="hero-buttons">
                    <button className="hero-btn flex gap-[11px] items-center justify-center mb-[10px]">
                      <span>Get Started</span>
                      <span><Image src="/arrow.svg" alt="Arrow" width={8} height={14} /></span>
                    </button>
                    <p className="text-white text-center text-xs">1-minute quiz for personalized Insights</p>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <Image width={580} height={615} src="/hero-image.png" alt="Mobile Phone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
