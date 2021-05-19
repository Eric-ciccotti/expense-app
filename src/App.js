import React from "react";
import Depenses from "./components/Depenses/Depenses";

const App = () => {
  const depenses = [
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

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "On y va !"),
  //   React.createElement(Depenses, { items: depenses })
  // );

  return (
    <div>
      <h2>On y va !</h2>
      <Depenses items={depenses} />
    </div>
  );
}

export default App;
