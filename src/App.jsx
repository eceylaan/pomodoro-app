import { useState } from "react";
import "./App.css";
import { Pomodoro } from "./components/Pomodoro";
import { Settings } from "./components/Settings";
import { Longbreak } from "./components/Longbreak";
import { Shortbreak } from "./components/Shortbreak";

function App() {
  const [context, setContext] = useState("pomodoro");
  const [settings, setSettings] = useState({ color: "green", font: "", pomodoroTime: 1500, shortTime: 300, longBreak: 900 });

  function redirect(page) {
    setContext(page);
  }
  return (
    <>
      <div className="container">
        <h1 className="title">pomodoro</h1>
        <div className="buttons">
          <button onClick={() => redirect("pomodoro")}>pomodoro</button>
          <button onClick={() => redirect("shortbreak")}>short break</button>
          <button onClick={() => redirect("longbreak")}>long break</button>
        </div>
        <div className="timer-container">
          {context === "pomodoro" && <Pomodoro settings={settings} />}
          {context === "shortbreak" && <Shortbreak settings={settings} />}
          {context === "longbreak" && <Longbreak settings={settings} />}
        </div>
        <div className="settings">
          <Settings settings={settings} setSettings={setSettings} />
        </div>
      </div>
    </>
  );
}

export default App;
