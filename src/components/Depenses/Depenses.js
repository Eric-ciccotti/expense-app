import React, { useState } from "react";
import DepenseItem from "./DepenseItem";
import Card from "../UI/Card";
import "./Depense.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../ExpensesFilter/ExpensesFilter.css";

const Depenses = (props) => {
  const [filtreDepenseAnee, setFiltreDepenseAnnee] = useState();

  const selectedFilter = (selectedYear) => {
    setFiltreDepenseAnnee(selectedYear);
    console.log(filtreDepenseAnee);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectedValue={selectedFilter} />
        <DepenseItem
          titre={props.items[0].titre}
          montant={props.items[0].montant}
          date={props.items[0].date}
        />
        <DepenseItem
          titre={props.items[1].titre}
          montant={props.items[1].montant}
          date={props.items[1].date}
        />
        <DepenseItem
          titre={props.items[2].titre}
          montant={props.items[2].montant}
          date={props.items[2].date}
        />
        <DepenseItem
          titre={props.items[3].titre}
          montant={props.items[3].montant}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Depenses;
