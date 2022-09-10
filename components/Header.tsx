import React from "react";
import NavButon from "./NavButon";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <img
          src="https://portfolio-website-deb64.firebaseapp.com/static/media/myimage2.3f356b70.jpeg"
          className="rounded-full h-20 w-20 object-cover"
          alt=""
        />
        <div>
          <h1 className="text-lg text-white font-bold">YASHM DRAW</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}....
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButon isActive title="Buy Tickets" />
          <NavButon onClick={disconnect} title="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButon onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
}

export default Header;
