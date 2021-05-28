import React, { useState } from "react";
import DepenseItem from "./DepenseItem";
import Card from "../UI/Card";
import "./Depense.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../ExpensesFilter/ExpensesFilter.css";

const Depenses = (props) => {
  const [filtreDepenseAnnee, setFiltreDepenseAnnee] = useState("2019");

  const selectedFilter = (selectedYear) => {
    setFiltreDepenseAnnee(selectedYear);
    console.log(filtreDepenseAnnee);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filtreDepenseAnnee}
          onSelectedValue={selectedFilter}
        />
        {props.items.map((item) => (
          <DepenseItem
            titre={item.titre}
            montant={item.montant}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Depenses;
