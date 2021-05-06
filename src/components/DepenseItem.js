import './DepenseItem.css';

function DepenseItem() {
  return (
    <div className="expense-item">
      <div>28 Mars 2021</div>
      <div className="expense-item__description">
        <h2>Assurance Voiture</h2>
        <div className="expense-item__price">295.65€</div>
      </div>
    </div>
  );
}

export default DepenseItem;
