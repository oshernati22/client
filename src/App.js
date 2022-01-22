import "./App.scss";
import Logo from "./Assets/logo.png";
import DataContainer from "./Components/DataContainer";

function App() {
  return (
    <div className="App">
      {" "}
      {/*flexbox*/}
      <div className="head_container">
        <div>
          <img className="logo" src={Logo} alt="logo"></img>{" "}
          <div className="sub_head">The Way Founders Do Equity</div>
        </div>
      </div>
      <DataContainer /> {/*the pie chart + ils data*/}
    </div>
  );
}

export default App;
