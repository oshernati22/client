import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const resultStyle = {
  fontSize: "3rem",
  color: "#5454547",
  fontWeight: "700",
  paddingTop: "10rem",
  paddingButtom: "2rem",
};
const spinner = {
  paddingTop: "10rem",
  paddingButtom: "2rem",
  color: "#5c7cfa69",
};

const CurrencyRealtime = () => {
  const [ils, setIls] = useState();
  const [error, setError] = useState();

  // we want to fetch data just once every time that the component rendered
  useEffect(() => {
    const getData = async () => {
      //try to fetch data if succeed show the data else show erorr message
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchange_rates"
        );
        setIls(response.data.rates.ils);
      } catch (e) {
        setError(e.message);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {ils ? (
        <div style={resultStyle}>
          {ils.name} : {ils.value + ils.unit}
        </div>
      ) : (
        <FontAwesomeIcon
          style={spinner}
          className="icon"
          icon={faSpinner}
          spin={true}
        />
      )}
      {error && error}
    </div>
  );
};

export default CurrencyRealtime;
