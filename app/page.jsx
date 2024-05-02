"use client";
import { useState } from "react";
import "./style.css";

export default function Page() {
  var [money, updateBrowser] = useState(300);

  function addMoney() {
    money += 400;
    updateBrowser(money);
  }

  function subMoney() {
    money -= 300;
    updateBrowser(money)
  }

  return (
    <main>
      <h1>My Money App</h1>
      <p>My Savings for the year so far</p>

      <h4>NGN {money}</h4>

      <button className="btn-minus" onClick={subMoney}>
        <i className="fa fa-minus"></i>
      </button>

      <button className=" btn-plus" onClick={addMoney}>
        <i className="fa fa-plus"></i>
      </button>
    </main>
  );
}

// export default function --- are the keywords needed to declare a component
// components are the visual aspect of our User Interface (UI) in a react Application

//components are made up of html tags

//return is a keyword that is use to return values back to the caller of a function

//things that happens to component in a page are called event

//event handlers are javascript block of code that is executed when an event occurs

//variables------  are containers that can hold values, during the execution of a program

//var is one of the key words use to define or declare a variable

// state ---- states are UI data (variable)  that update the UI when their values changes
