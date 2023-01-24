import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Header: FC = () => {
  const [nav, setNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  const changeNav = () => {
    const yPosition = window.scrollY;
    if (yPosition > 120) return setNav(true);
    return setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <div
        className={`w-full z-30 ${
          nav ? "sticky top-0 bg-white shadow-md animate-scrollnav" : ""
        }`}
      >
        <div
          className={`flex justify-between items-center max-w-[76rem] mx-auto p-5 ${
            nav ? "py-3" : ""
          }`}
        >
          <Link href={"/"}>
            <div className="font-bold text-4xl">WebApp.</div>
          </Link>
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 text-xl font-medium text-gray-600">
              <Link href={"/case-studies"} onClick={closeNav}>
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
                <button
                  className={`bg-black px-8 py-4 rounded-md text-base font-semibold text-white transition hover:scale-[105%] duration-300 ${
                    nav ? "px-6 py-3" : ""
                  }`}
                >
                  Let&apos;s Talk
                </button>
              </Link>
            </ul>
          </div>
          <div className={`md:hidden p-1`} onClick={() => setShowNav(!showNav)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="currentColor"
              />
              <path
                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                fill="currentColor"
              />
              <path
                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* TEST RESPONSIVE */}
        <div
          className={`${
            showNav
              ? "fixed left-0 top-0 w-full h-full bg-gray-50 ease-in-out transition duration-500 z-20"
              : "ease-in-out duration-500 fixed w-full h-full left-[-100%] hidden"
          }`}
        >
          <ul
            className={`
            flex flex-col items-center gap-20 pt-10 text-2xl font-semibold
           `}
          >
            <Link href={"/"}>
              <div
                className="font-bold text-4xl border-black border-b pb-2"
                onClick={closeNav}
              >
                WebApp.
              </div>
            </Link>
            <Link href={"/case-studies"} onClick={closeNav}>
              <li>Case Studies</li>
            </Link>
            <Link href={"/about"} onClick={closeNav}>
              <li>About</li>
            </Link>
            <Link href={"/news"} onClick={closeNav}>
              <li>News</li>
            </Link>
            <Link href={"/careers"} onClick={closeNav}>
              <li>Career</li>
            </Link>
            <Link href={"contact"} onClick={closeNav}>
              Contact
            </Link>
            <div
              className="absolute top-6 right-6"
              onClick={() => setShowNav(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
