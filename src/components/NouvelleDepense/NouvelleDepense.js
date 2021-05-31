import React from "react";
import "./NouvelleDepense.css";
import DepenseForm from "./DepenseForm";

const NouvelleDepense = (props) => {
  const sauvegardeDepenseData = (enteredDepenseData) => {
    const expenseData = {
      ...enteredDepenseData,
      id: Math.random().toString(),
    };
    props.onAjouteInDepensesArray(expenseData);
  };

  return (
    <div className="new-expense">
      <DepenseForm onAjouterDepense={sauvegardeDepenseData} />
    </div>
  );
};

export default NouvelleDepense;
