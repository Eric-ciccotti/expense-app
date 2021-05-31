import React, { useState } from "react";
import Depenses from "./components/Depenses/Depenses";
import NouvelleDepense from "./components/NouvelleDepense/NouvelleDepense";

const DUMMY_DEPENSES = [
  {
    id: "e1",
    titre: "Papier toilette",
    montant: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    titre: "Télévision",
    montant: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    titre: "Assurance voiture",
    montant: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    titre: "Nouveau bureau (Bois deluxe)",
    montant: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [depenses, setDepense] = useState(DUMMY_DEPENSES);

  const ajouterDepenseHandler = (depense) => {
    //cleaner way to update state based on an older snapshot of the same state (pass function)
    setDepense((prevDepenses) => {
      return [depense, ...prevDepenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "On y va !"),
  //   React.createElement(Depenses, { items: depenses })
  // );

  return (
    <div>
      <NouvelleDepense onAjouteInDepensesArray={ajouterDepenseHandler} />
      <Depenses items={depenses} />
    </div>
  );
};

export default App;
