import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //   console.log(props.dataPoints);

  let pricesArray = props.dataPoints.map((row) => row.price);
  let maxPrice = Math.max(...pricesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((record) => {
        return (
          <ChartBar
            label={record.label}
            value={record.price}
            maxValue={maxPrice}
            
          />
        );
      })}
    </div>
  );
};

export default Chart;
