import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

//npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(56, 55, 60)";
      document.body.style.color = "#fff";
      // document.getElementById("myBox").style.backgroundColor = 'rgb(58 58 63)';
      // document.getElementById("myBox").style.color = '#fff';
      showAlert("Dark Mode has been enabled.", "success");
      // document.title = "TextUtils - DartMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "rgb(56, 55, 60)";
      // document.getElementById("myBox").style.backgroundColor = '#fff';
      // document.getElementById("myBox").style.color = 'rgb(58 58 63)';
      showAlert("Light Mode has been enabled.", "success");
      // document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar heading="TextUtils"/> */}
      <Router>
      <Navbar heading="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm heading="Word-Character counter, Uppercase-Lowercase, Extra space remove" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        </Route>
      </Switch>
      </Router>

    </>
  );
}

export default App;
