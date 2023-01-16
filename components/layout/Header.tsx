import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
      <div className="font-bold text-3xl">WebApp.</div>
      <div>
        <ul className="flex items-center gap-6 text-lg font-medium text-gray-600">
          <li>Approach</li>
          <li>Case Studies</li>
          <li>Career</li>
          <button className="bg-black px-6 py-3 rounded-md text-white">
            Let&apos;s Talk
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
