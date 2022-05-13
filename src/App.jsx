import logo from "./logo.svg";
import { Todo } from "./components/todo";
import "./App.css";
import { Taraka } from "./components/useeffect";
import { Stopwatch } from "./components/stopwatch";
import { Stop } from "./components/stopwat";
import { useState } from "react";
import { Form } from "./components/forms";
import { Cart } from "./components/cart";
import { Button } from "./components/button";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Nav } from "./components/navbar";
import { Counter } from "./components/counter";
import { TextInputWithFocusButton } from "./components/useref";
import { Check } from "./components/check";
// import {}
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1> APP main</h1>
      {/* <TextInputWithFocusButton /> */}
      <Counter />
      <Check />
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      {/* <Button />

      <Cart /> */}
      {/* {show ? <Stop /> : ""}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button> */}
      {/* hello tara */}
      {/* <Todo />
      <Taraka /> */}
      {/* <Stopwatch /> */}
      {/* hello watch */}
      {/* <Stop /> */}
      {/* <Form /> */}
      {/* hhdvvhjdh */}
    </div>
  );
}

export default App;

// =================== monu fetching code start

// import React, { useEffect, useState } from "react";
// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

// export default function App() {
//   const [img, setImg] = useState();

//   const fetchImage = async () => {
//     const res = await fetch(imageUrl);
//     console.log(res);
//     const imageBlob = await res.blob();
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     setImg(imageObjectURL);
//   };

//   useEffect(() => {
//     fetchImage();
//   }, []);

//   return (
//     <>
//       <img src={img} alt="icons" />
//     </>
//   );
// }
