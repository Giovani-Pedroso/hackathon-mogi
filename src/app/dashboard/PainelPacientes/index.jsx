import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import VisaoGeral from "./VisaGeral";

function PainelPacientes() {
  return (
    <div className="w-full">
      <SearchBar />
      <VisaoGeral />
    </div>
  );
}

export default PainelPacientes;
