import { FC } from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image src="/logo.png" width={500} height={500} alt="" />
      <h1 className="text-[120px] font-black text-black">Soul Flare</h1>
    </div>
  );
};
export default Header;
