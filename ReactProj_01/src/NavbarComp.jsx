import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarComp() {
  return (
    <>
      <div className="w-full min-h-[3.5rem] bg-slate-500 flex justify-between duration-300 items-center px-3 md:px-10">
        <div className="text-3xl font-bold ">LOGO</div>
        <div className="text-center relative duration-300">
          <ul className="w-[40vw] text-lg text-slate-50 grow hidden duration-100 md:inline-flex justify-around">
            <li className="hover:text-slate-900 duration-200 cursor-pointer">
              Statement
            </li>
            <li className="hover:text-slate-900 duration-200 cursor-pointer">
              Members
            </li>
            <li className="hover:text-slate-900 duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:text-slate-900 duration-200 cursor-pointer  ">
              Contact
            </li>
          </ul>
        </div>
        <div className="">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-2xl placeholder:italic pl-3 py-1 shadow-md  hidden md:block"
          />
        </div>

        <div className=" md:hidden">
          {" "}
          <GiHamburgerMenu size={31} color="azure" cursor="pointer" />{" "}
        </div>
      </div>

      {/* default hidden hamburger menu */}
      <div className="absolute z-[1] w-full overflow-hidden bg-slate-800 min-h-[12rem] text-center py-4 rounded-b-xl md:hidden">
        <input
          className="rounded-2xl  placeholder:italic pl-3 py-1 min-w-[90vw]"
          type="search"
          placeholder="Search..."
        />
        <ul className=" text-center duration-300 text-white">
          <li className="py-3">Service</li>
          <li className="py-3">Product</li>
          <li className="py-3">About</li>
          <li className="py-3">Contact</li>
        </ul>
      </div>
    </>
  );

}
