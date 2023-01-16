import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[76rem] mx-auto p-5">
      <div className="font-bold text-4xl">WebApp.</div>
      <div>
        <ul className="flex items-center gap-6 text-xl font-medium text-gray-600">
          <li>Approach</li>
          <li>Case Studies</li>
          <li>Career</li>
          <button className="bg-black px-8 py-4 rounded-md text-base text-white">
            Let&apos;s Talk
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
