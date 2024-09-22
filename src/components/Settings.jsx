import React, { useRef } from "react";

export const Settings = ({ settings, setSettings }) => {
  const dialogRef = useRef();
  function openSettings() {
    dialogRef.current.showModal();
  }
  function handleSettings() {
    dialogRef.current.close();
  }

  return (
    <div>
      <button onClick={openSettings}>Settings</button>
      <dialog ref={dialogRef} className="dialog">
        <form>
          <label htmlFor="pomodoro">pomodoro</label>
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          <button onClick={handleSettings} type="submit">
            Submit
          </button>
        </form>
        <button>exit</button>
      </dialog>
    </div>
  );
};
