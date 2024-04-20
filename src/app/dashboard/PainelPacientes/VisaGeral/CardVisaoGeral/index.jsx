import React from "react";

function CardVisao(props) {
  const t =
    props.color == "red"
      ? "#ff0000"
      : props.color == "blue"
        ? "#0000ff"
        : "#00ff00";
  const iconStyle = `text-6xl mr-4 text-[${t}]`;
  console.log(iconStyle);

  return (
    <div className={`drop-shadow-lg flex flex-row items-center`}>
      <div className={iconStyle}>{props.icon}</div>
      <div>
        <div className="text-5xl font-normal">{props.number}</div>
        <div>{props.title}</div>
      </div>
    </div>
  );
}

export default CardVisao;
