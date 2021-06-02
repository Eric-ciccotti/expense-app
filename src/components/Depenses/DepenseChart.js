import React from "react";
import Chart from "../Chart/Chart";

const DepenseChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0}
        { label: 'Fev', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Avr', value: 0},
        { label: 'Mai', value: 0},
        { label: 'Jui', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aou', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0}
    ];

    for(const depense in props.depenses) {
        const depenseMonth = depense.date.getMonth(); //Janvier => 0
        chartDataPoints[depenseMonth].value += depense.montant;
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default DepenseChart;