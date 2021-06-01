import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import DepenseList from "./DepenseList";

import "./Depense.css";
import "../ExpensesFilter/ExpensesFilter.css";

const Depenses = (props) => {
  const [filtreDepenseAnnee, setFiltreDepenseAnnee] = useState("2019");

  const selectedFilter = (selectedYear) => {
    setFiltreDepenseAnnee(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filtreDepenseAnnee;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filtreDepenseAnnee}
          onSelectedValue={selectedFilter}
        />
        <DepenseList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Depenses;
