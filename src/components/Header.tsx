import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed-header flex justify-end py-[40px] lg:py-0 lg:pt-[40px] px-[28px] md:px-[unset] container ">
            <div className="header-bottom flex justify-between w-[68%] sm:w-full items-center sm:items-start">
                <div className="header-bottom-left">
                    <Image src="/logo.svg" alt="Logo" width={173} height={74} className="w-[107px] h-[56px] sm:w-[173px] sm:h-[74px]" />
                </div>
                <div className="header-bottom-right sm:flex gap-[40px]">
                    <Image className="sm:hidden" src="/hamburger.png" alt="Logo" width={20} height={12} />
                    <a href="" className="nav-link">About us</a>
                    <a href="" className="nav-link">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header;