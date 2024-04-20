import React from "react";

import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
function SearchBar() {
  return (
    <div className="flex flex-row px-4 w-full items-center  ">
      <IoIosSearch className="text-4xl" />
      <input className="w-full px-4" placeholder="Pesquisa" />
      <IoMdNotificationsOutline className="text-4xl" />
    </div>
  );
}

export default SearchBar;
