import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header-top bg-gradient-to-r from-[#FC004E] via-[#A14F87] to-[#10CBE0] h-[76px] sm:h-[42px] text-center flex items-center justify-center">
        <h1 className="text-white px-[30px] sm:px-[unset]">
          🚀 <span className="font-extrabold text-[#00E7F9] text-base">FRESH BEGINNINGS SALE:</span> <span className="font-bold text-sm">Extra 25% OFF, Limited Spots - start your
            journey today!</span>
        </h1>
      </div>
      <Header />
      <main className="content">
        <section className="tai-hero-section">
          <div className="tai-hero-section-bg overflow-x-hidden">
            <div className="hero-wrapper container">
              <div className="hero-content sm:relative">
                <h1 className="hero-title text-white text-center sm:text-left font-bold pt-[5px] sm:pt-[0px] mb-[4px]">Want to Turn Social Media Into a Profitable Career?</h1>
                <div className="mcdonalds-logo-wrapper text-center sm:text-left font-bold mb-[22px]">
                  <span className="double-text-shadow hero-title">Discover your way to success with Fametonic:</span>
                  <span className="double-text-main hero-title">Discover your way to success with Fametonic:</span>
                </div>
                <ul className="text-white mb-[22px] sm:mb-[26px]">
                  <li className="list-item">
                    {/* <Image className="list-icon" src="/sparkle.png" alt="Sparkle" width={22} height={23} /> */}
                    <span className="item-text">Start growing your influence right away—no waiting required!</span>
                  </li>
                  <li className="list-item">
                    {/* <Image className="list-icon" src="/sparkle.png" alt="Sparkle" width={22} height={23} /> */}
                    <span className="item-text">Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                  </li>
                  <li className="list-item">
                    {/* <Image className="list-icon" src="/sparkle.png" alt="Sparkle" width={22} height={23} /> */}
                    <span className="item-text">Use a Personal AI Worker to boost your content </span>
                  </li>
                  <li className="list-item">
                    {/* <Image className="list-icon" src="/sparkle.png" alt="Sparkle" width={22} height={23} /> */}
                    <span className="item-text">Learn from expert-led courses designed for aspiring influencers</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-col-reverse">
                  <div className="text-center sm:text-left">
                    <p className="px-[20px] sm:px-[unset] text-[#ABABAB] mb-[10px]  text-xs">By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                    <p className="copyright text-[#ABABAB] text-[10px] nunito mb-[32px] sm:mb-[0px]">Fametonic 2025 ©All Rights Reserved.</p>
                  </div>
                  <div className="hero-buttons flex flex-col items-center sm:items-start gap-[15px] sm:gap-[0px] sm:mb-[20px]">
                    <div className="flex flex-col items-center sm:items-start w-full">
                      <div className="w-full sm:w-[unset]">
                        <button className="hero-btn flex gap-[11px] items-center justify-center font-bold w-full sm:w-[313px] mb-[10px]">
                          <span>Get Started</span>
                          <span><Image src="/arrow.svg" alt="Arrow" width={8} height={14} /></span>
                        </button>
                        <p className="text-white text-center text-xs">1-minute quiz for personalized Insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <Image className="block sm:hidden" width={580} height={615} src="/hero-image.png" alt="Mobile Phone" />
                <Image className="hidden sm:block sm:min-w-[418px] lg:min-w-[564px] xl:min-w-[666px] sm:ml-[-61px] lg:ml-[-99px] xl:ml-[-62px] sm:pr-[unset]" width={580} height={334} src="/hero-image-desktop.png" alt="Mobile Phone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
