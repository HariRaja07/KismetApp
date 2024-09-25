import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import '../App.css';
const Header = () => {
  const location = useLocation();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollingDown(currentScrollPos > prevScrollPos);
    setAtTop(currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header fixed inset-x-0 top-0 z-30 flex justify-center transition-all duration-600 ${scrollingDown ? "opacity-0" : "opacity-100"} ${atTop ? "bg-transparent" : "bg-white"}`}>
      <div className="w-full max-w-7xl border-b transition-colors border-transparent sm:border-primary">
        <nav className="hidden gap-1 pt-4 sm:flex sm:flex-col">
          <div className="divide-secondary flex h-5 justify-end gap-4 divide-x">
            <a className="text-sm hover:underline" href="">
              For providers
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-1">
              <FaHeart className="h-6 w-6" />
              <p className="text-2xl font-semibold">kismet</p>
            </div>
            <div className="flex h-full flex-col">
              <div className="flex h-full items-center gap-8">
                <Link to="/" className="group relative flex h-16 items-center">
                  <span>Explore</span>
                  <div
                    className={`absolute -bottom-px left-1/2 h-0.5 w-8 -translate-x-1/2 transition-transform ease-in-out ${
                      location.pathname === "/"
                        ? "scale-x-100 group-hover:scale-x-[200%]"
                        : "scale-x-0 group-hover:scale-x-[100%]"
                    } bg-primary-solid`}
                  ></div>
                </Link>
                <Link
                  to="/Works"
                  className="group relative flex h-16 items-center"
                  aria-current={location.pathname === "/Works" ? "page" : undefined}
                >
                  <span>How it works</span>
                  <div
                    className={`absolute -bottom-px left-1/2 h-0.5 w-8 -translate-x-1/2 transition-transform ease-in-out ${
                      location.pathname === "/Works"
                        ? "scale-x-100 group-hover:scale-x-[200%]"
                        : "scale-x-0 group-hover:scale-x-[100%]"
                    } bg-primary-solid`}
                  ></div>
                </Link>
              </div>
            </div>
            <div className="flex w-48 justify-end">
              <button className="hover:bg-primary-hover flex items-center gap-2 rounded-full p-2 text-sm transition-colors text-secondary">
                <FaUserCircle className="h-8 w-8 text-gray-500" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
