import React from "react";
import Card from "./Card";

const Menu = () => {
  const rowStyle = {
    overflowX: "auto",
    marginTop: "10px",
    display:'flex',
    width:'80vw'
  };
  return (
    <div>
      <div style={rowStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Menu;
