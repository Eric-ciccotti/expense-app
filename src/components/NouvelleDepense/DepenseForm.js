import React, { useState } from "react";
import "./DepenseForm.css";

const DepenseForm = () => {
  const [enteredTitre, setEnteredTitre] = useState("");
  const [enteredMontant, setEnteredMontant] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitre: '',
  //     enteredMontant: '',
  //     enteredDate: ''
  // })

  const titreChangeHandler = (event) => {
    setEnteredTitre(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitre: event.target.value
    // })
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitre: event.target.value}
    // })
  };

  const montantChangeHandler = (event) => setEnteredMontant(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const depenseData = {
      titre: enteredTitre,
      montant: enteredMontant,
      date: new Date(enteredDate),
    };
    console.log(depenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titre</label>
          <input type="text" onChange={titreChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Montant</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={montantChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Ajouter une dépense</button>
        </div>
      </div>
    </form>
  );
};

export default DepenseForm;
