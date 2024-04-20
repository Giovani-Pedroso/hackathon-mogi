import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import CardVisao from "./CardVisaoGeral";

const CardsInfo = [
  {
    icon: <IoPersonOutline />,
    number: "3",
    title: "Pacientes Atendidos",
    color: "#ff00ff",
  },
  {
    icon: <BsPeopleFill />,
    number: "4",
    title: "Consultas Agendadas",
    color: "blue",
  },
  {
    icon: <FiBook />,
    number: "80%",
    title: "Taxa de Atendimento",
    color: "red",
  },
];
function VisaoGeral() {
  return (
    <div className="px-6 ">
      <h1 className="text-4xl font-medium my-8">Dashboard</h1>
      <div className="flex flex-row justify-around">
        {CardsInfo.map((cardInfo) => {
          return (
            <CardVisao
              key={cardInfo.title}
              title={cardInfo.title}
              color={cardInfo.color}
              icon={cardInfo.icon}
              number={cardInfo.number}
            />
          );
        })}
      </div>
      <div className="flex flex-row">
        <div className="w-full">Proximas Consultas</div>
        <div>Copilto Médico</div>
      </div>
    </div>
  );
}

export default VisaoGeral;
