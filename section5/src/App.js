import React from "react";
// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  let name = "abcde";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "함수";
  };

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    // initialValue: 5,
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <MyHeader />
    //     <h2>안녕 리액트 {name}</h2>
    //     <MyFooter />
    //   </header>
    // </div>

    // <React.Fragment>
    //   <header className="App-header">
    //     <MyHeader />
    //     <h2>안녕 리액트 {name}</h2>
    //     <MyFooter />
    //   </header>
    // </React.Fragment>

    // <div className="App">
    //   <MyHeader />
    //   <h2>안녕 리액트 {name}</h2>
    //   <b id='bold_text'>React.js</b>
    // </div>

    // <div style={style.App}>
    //   <MyHeader />
    //   <h2 style={style.h2}>안녕 리액트 {func()}</h2>
    //   <b style={style.bold_text} id='bold_text'>
    //     {number}는 {number%2 === 0 ? "짝수" : "홀수"}
    //   </b>
    // </div>

    // <div>
    //   <MyHeader />
    //   <Counter a={1} b={2} c={3} d={4} e={5} initialValue={5} />
    // </div>

    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
