import "./DepenseItem.css";

function DepenseItem(props) {
  //   const depenseDate = new Date(2021, 5, 6);
  //   const depenseTitle = "Assurance Voiture";
  //   const depenseMontant = 295.65;

  const mois = props.date.toLocaleString("fr", { month: "long" });
  const jour = props.date.toLocaleString("fr", { day: "2-digit" });
  const année = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{jour}</div>
        <div>{mois}</div>
        <div>{année}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.titre}</h2>
        <div className="expense-item__price">{props.montant}€</div>
      </div>
    </div>
  );
}

export default DepenseItem;
