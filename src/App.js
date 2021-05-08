import DepenseItem from "./components/DepenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <DepenseItem
        titre={depenses[0].titre}
        montant={depenses[0].montant}
        date={depenses[0].date}
      ></DepenseItem>
      <DepenseItem
        titre={depenses[1].titre}
        montant={depenses[1].montant}
        date={depenses[1].date}
      ></DepenseItem>
      <DepenseItem
        titre={depenses[2].titre}
        montant={depenses[2].montant}
        date={depenses[2].date}
      ></DepenseItem>
    </div>
  );
}

export default App;
