"use client";
import "./style.css";
import { useState } from "react";
export default function Page() {
  var [currentMargin, update] = useState(13);
  var [secondClass, updateClassName] = useState("box");

  var myCustomStyle = {
    marginLeft: currentMargin,
  };

  function handleMovement() {
    currentMargin += 40;
    update(currentMargin);
    secondClass = "box";
    updateClassName(secondClass);
  }

  function handleClassChange() {
    currentMargin -= 40;
    update(currentMargin);
    secondClass = "box-2";
    updateClassName(secondClass);
  }

  function resetPosition() {
    currentMargin = 0;
    update(currentMargin);
  }

  return (
    <div>
      <button onClick={handleMovement}>Click Me</button>
      <button onClick={handleClassChange}>Change Color</button>
      <button onClick={resetPosition}>Move Back</button>
      <p>This will output the number of times the button was clicked</p>
      {currentMargin}
      <p className={secondClass} style={myCustomStyle}>
        Move Me
      </p>
    </div>
  );
}

// comments are code or line of text that is ignore by language translator
// comment are primary used fot explaining codes

// the possible things that can be returned
//1  ---- Javascript values
//    Types of values
// String values -----  alpha-numeric values
// Numeric Values ---- are sequence of digit that are either in floating form or integer form
// boolean  ---- values that can either be true or false

// 2  --- Javascript Expression
//     javascript expression are combination of values and operators that can evaluate to a single value

// operators
// arithmetic operators   -,+,*,/
// relational operators      >,<, >=, <=, ==
//conditional operators    ? :
// assignments operators ....     =, +=, -=, *=, !=

//3  --- HTML element / or group of HTML Elements

// events ----- events are things that can happen to a component

//events handlers are codes or javascripts statements that are executed when an events occurs

// programming javascript
// library reactjs, nextjs

// state in reactjs -----    is a variable that updates the UI when the values changes

// variable don't have the ability to re-render a UI, once their values changes

// today
// working with state in react
// using state to update html content and css properties

// different kinds of webpage design // Frontend design

// static ---- consisting of HTML and CSS
// interactive ----- consisting of HTML, CSS and JAVASCRIPT
// Dynamic -------- consisting of HTML, CSS, JAVASCRIPT and a Backend programming language
