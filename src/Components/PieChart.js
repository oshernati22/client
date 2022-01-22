import React from "react";
import ReactSvgPieChart from "react-svg-piechart";
import "./pieChart.scss";

// Responsable chart pie data, the size and color is random and fit each other
const PieChart = () => {
  const getRandomData = () => {
    const data = [];
    for (let i = 0; i < 3; i++) {
      const val = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      data.push({
        title: `Data ${i}`,
        value: val,
        color: `rgba(${val}, 51, 102, ${val * 0.05})`,
      });
    }
    return data;
  };

  const data = getRandomData();
  return (
    <>
      <div className="pieChartContainer">
        {/*3d library https://www.npmjs.com/package/react-svg-piechart */}
        <ReactSvgPieChart
          data={data}
          expandOnHover={true}
          expandSize={1}
          strokeColor="#fff"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBoxSize={100}
        />
      </div>
    </>
  );
};

export default PieChart;
