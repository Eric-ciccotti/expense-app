import DepenseDate from "./DepenseDate";
import Card from "./Card";
import "./DepenseItem.css";

function DepenseItem(props) {
  return (
    <Card className="expense-item">
      <DepenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.titre}</h2>
        <div className="expense-item__price">{props.montant}€</div>
      </div>
    </Card>
  );
}

export default DepenseItem;
