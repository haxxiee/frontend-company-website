import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[76rem] mx-auto p-5 bg-opacity-0">
      <Link href={"/"}>
        <div className="font-bold text-4xl">WebApp.</div>
      </Link>
      <div>
        <ul className="flex items-center gap-6 text-xl font-medium text-gray-600">
          <Link href={"/case-studies"}>
            <li>Case Studies</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/news"}>
            <li>News</li>
          </Link>
          <Link href={"/careers"}>
            <li>Career</li>
          </Link>
          <Link href={"/contact"}>
            <button className="bg-black px-8 py-4 rounded-md text-base font-semibold text-white">
              Let&apos;s Talk
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
