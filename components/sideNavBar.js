import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
        <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mx-6 mt-8">
          <div className="flex flex-row justify-between">
            <h2>
              <Link href="/" className="text-3xl">
                MC
              </Link>
            </h2>

            {!isLargeScreen && (
              <div className="lg:hidden mr-6">
                <button
                  className="text-5xl focus:outline-none mt-6"
                  onClick={() => setOpen(!open)}
                >
                  ☰
                </button>
              </div>
            )}
          </div>

          {(isLargeScreen || open) && (
            <ul
              className={`flex lg:flex-row mt-4 lg:mt-0 ${
                open ? "flex-col text-center mx-auto" : ""
              } lg:ml-8`}
            >
              <li className="lg:pr-8">
                <Link href="/" className="text-xl hover:underline">
                  About
                </Link>
              </li>
              <li className="lg:pr-8">
                <Link href="/project" className="text-xl hover:underline">
                  Project
                </Link>
              </li>
              {/* <li className='lg:pr-8'>
            <Link href="/journal" className='text-xl hover:underline'>Journal</Link>
          </li> */}
              <li className="lg:pr-8">
                <Link
                  href="https://drive.google.com/file/d/16V5PvkmxvI36oTRakr6p2YmdMhGwbJeH/view?usp=sharing"
                  className="text-xl hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
            </ul>
          )}
        </nav>
  );
};

export default MobileNav;
