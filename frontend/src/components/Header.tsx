import React from "react";
import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="flex flex-wrap gap-4 py-1 px-2 pl-4 bg-yellow-300 shadow-md justify-between items-center align-middle">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className=":w-18 md:h-18"
        />
        
        <h2 className="rounded-full flex gap-2 items-center p-2 ml-12 text-gray-700 text-sm md:text-base">
          <LayoutGrid className="w-4 h-4 md:w-6 md:h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold ">Category</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Fresh Produce</DropdownMenuItem>
              <DropdownMenuItem>Dairy & Eggs</DropdownMenuItem>
              <DropdownMenuItem>Bakery</DropdownMenuItem>
              <DropdownMenuItem>Meat & Seafood</DropdownMenuItem>
              <DropdownMenuItem>Pantry Staples</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h2>
      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0">
        <Searchbar />
      </div>

      <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
        <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="bg-green-600 rounded-full px-2 py-1 md:px-4 md:py-2 text-white text-sm md:text-base">
          0
        </h1>
        <button className="bg-green-600 rounded-xl px-2 py-1 md:px-4 md:py-2 text-white hover:bg-green-500 transition duration-200 text-sm md:text-base">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
