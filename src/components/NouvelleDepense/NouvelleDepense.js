import React, { useState } from "react";
import "./NouvelleDepense.css";
import DepenseForm from "./DepenseForm";

const NouvelleDepense = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  const sauvegardeDepenseData = (enteredDepenseData) => {
    const expenseData = {
      ...enteredDepenseData,
      id: Math.random().toString(),
    };
    props.onAjouteInDepensesArray(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditMode && <button onClick={toggleEditMode}>Add new expenses</button>}
      {isEditMode && <DepenseForm onToggleEditMode={toggleEditMode} onAjouterDepense={sauvegardeDepenseData} />}
    </div>
  );
};

export default NouvelleDepense;
