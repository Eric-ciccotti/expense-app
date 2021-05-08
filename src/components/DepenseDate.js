import "./DepenseDate.css";

function DepenseDate(props) {
  const mois = props.date.toLocaleString("fr", { month: "long" });
  const jour = props.date.toLocaleString("fr", { day: "2-digit" });
  const année = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{jour}</div>
      <div className="expense-date__month">{mois}</div>
      <div className="expense-date__year">{année}</div>
    </div>
  );
}

export default DepenseDate;
