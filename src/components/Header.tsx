import { FC } from "react";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen relative bg-bg-4">
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt=""
        className="px-8 my-8"
      />
      <h1 className="text-[96px] font-black bg-gradient-to-r from-[#20d0d9] to-[#ef6e28] bg-clip-text text-transparent tracking-widest">
        Soul Flare
      </h1>
      <div className="text-black/60 absolute z-2 bottom-5 flex flex-col items-center gap-[10px]">
        <p>Slide down for more</p>
        <HiOutlineChevronDoubleDown className="text-[36px]" />
      </div>
    </div>
  );
};
export default Header;
