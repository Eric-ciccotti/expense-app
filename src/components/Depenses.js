import DepenseItem from "./DepenseItem";
import Card from "./Card";
import "./Depense.css";

function Depenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Depenses;
