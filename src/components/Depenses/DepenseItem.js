import React, { useState } from "react";
import DepenseDate from "./DepenseDate";
import Card from "../UI/Card";
import "./DepenseItem.css";

const DepenseItem = (props) => {
  const [titre, setTitre] = useState(props.titre);

  const clickHandler = () => {
    setTitre("Mise a jour");
  };

  return (
    <Card className="expense-item">
      <DepenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titre}</h2>
        <div className="expense-item__price">{props.montant}€</div>
      </div>
      <button onClick={clickHandler}>Changer titre</button>
    </Card>
  );
};

export default DepenseItem;
