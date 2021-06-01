import React from "react";
import "./DepenseList.css";
import DepenseItem from "./DepenseItem";

const DepenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Aucune dépense trouvée.</h2>
    }

    return (
        <li>
            <ul className="expenses-list">
                {props.items.map((item) => (
                    <DepenseItem
                        key={item.id}
                        titre={item.titre}
                        montant={item.montant}
                        date={item.date}
                    />
                ))}
            </ul>
        </li>
    )

};

export default DepenseList;