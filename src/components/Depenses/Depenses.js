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
  };

  const filteredItem = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filtreDepenseAnnee;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filtreDepenseAnnee}
          onSelectedValue={selectedFilter}
        />
        {filteredItem.map((item) => (
          <DepenseItem
            key={item.id}
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
