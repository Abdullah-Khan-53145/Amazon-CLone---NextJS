import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow ">
        <div className="mt-2  flex items-center flex-row sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Search */}
        <div className="bg-yellow-400 hidden hover:bg-yellow-500 cursor-pointer sm:flex items-center h-10 rounded-md flex-grow">
          <input
            type="text"
            className="h-full flex-grow flex-shrink rounded-l-md outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div className=" link">
            <p>Hello, Abdullah Khan</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className=" link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Order</p>
          </div>
          <div className="link relative flex items-center link ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 flex items-center justify-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden sm:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Groceryl</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        <p className="link hidden lg:inline-flex">Today's Deal</p>
      </div>
    </header>
  );
}

export default Header;
