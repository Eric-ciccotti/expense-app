import React, { useState } from "react";
import DepenseDate from "./DepenseDate";
import Card from "../UI/Card";
import "./DepenseItem.css";

const DepenseItem = (props) => {
  return (
    <Card className="expense-item">
      <DepenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.titre}</h2>
        <div className="expense-item__price">{props.montant}€</div>
      </div>
      <button>Changer titre</button>
    </Card>
  );
};

export default DepenseItem;
