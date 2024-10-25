import logo from "/logo.png";
import "./App.css";
import WorldClock from "./WorldClock";

function App() {
  const timeZones = [
    "Asia/Singapore",
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney"
  ];
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <div className="card">
        <WorldClock clockData={timeZones} />
      </div>
    </>
  );
}

export default App;