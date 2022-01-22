import React, { useEffect, useState } from "react";
import CurrencyRealtime from "./CurrencyRealtime";
import "./dataContainer.scss";
import PieChart from "./PieChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

//  show data just for 5 secondes
const DataContainer = () => {
  const [switcher, setSwitcher] = useState(false);
  const handelButtonClick = () => {
    setSwitcher(true);

    setTimeout(() => {
      setSwitcher(false);
      // setPieChart();
    }, 5000);
  };

  return (
    <>
      <div className="dataContainer">
        {" "}
        {/*flexbox*/}
        {switcher && <PieChart />}{" "}
        {/*if button clicked show the pie chart and ils data*/}
        {switcher && <CurrencyRealtime />}
      </div>
      <div>
        <button
          className={switcher ? "buttonClicked" : "button"}
          disabled={switcher}
          onClick={handelButtonClick}
        >
          {" "}
          {/*after click start show data */}
          <FontAwesomeIcon className="icon" icon={faChartPie} spin={switcher} />
        </button>
      </div>
    </>
  );
};

export default DataContainer;
