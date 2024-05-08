"use client";
export default function Page() {
  function handleButtonClick() {
    var age = 1 + 12;
    alert(age);

    age = 45;
    alert(age);

    age -= 20 * 2;
    alert(age);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>This will output the number of times the button was clicked</p>
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
