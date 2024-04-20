import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiChat1 } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";

const LinksDashboard = [
  { icon: <LuLayoutDashboard />, link: "#", name: "Dashboard" },
  { icon: <CiChat1 />, link: "#", name: "Copiloto Médico" },
  { icon: <MdOutlineEmail />, link: "#", name: "E-mails" },
  { icon: <BsListTask />, link: "#", name: "Agenda " },
  { icon: <IoPersonOutline />, link: "#", name: "Pacientes" },
  { icon: <HiOutlineDotsHorizontal />, link: "#", name: "Configurações" },
];

const DashLink = (props) => {
  return (
    <a className="flex text-[20px] flex-row items-center " href={props.link}>
      <div className="mr-2">{props.icon}</div>
      <div>{props.name}</div>
    </a>
  );
};

function SidebarDashboard() {
  return (
    <div className="flex flex-col p-6 justify-between w-[24%] bg-primary text-white min-h-screen  ">
      <div>
        <div className="flex flex-row mb-6">
          <img
            className="rounded-full w-[80px] mr-4"
            src="/doctor.webp"
            alt="image of the doctor"
          />
          <div>
            <div className="font-medium text-xl">Dra Simone Silva </div>
            <div> CRM:123456</div>
          </div>
        </div>
        <div>
          {LinksDashboard.map((linkDashboard) => {
            return (
              <DashLink
                key={linkDashboard.link}
                link={linkDashboard.link}
                icon={linkDashboard.icon}
                name={linkDashboard.name}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row text-2xl items-center">
        <FaPowerOff className="mr-2" /> Sair
      </div>
    </div>
  );
}
export default SidebarDashboard;
