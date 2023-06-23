import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// const Counter = (props) => {
//     const [count, setCount] = useState(props.initialValue);

//     const onIncrease = () => {
//         setCount(count+1);
//     }
//     const onDecrease = () => {
//         setCount(count-1);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={onIncrease}>+</button>
//             <button onClick={onDecrease}>-</button>
//         </div>
//     )
// }

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  // return (
  //     <div>
  //         <h1>{count}</h1>
  //         <button onClick={onIncrease}>+</button>
  //         <button onClick={onDecrease}>-</button>
  //     </div>
  // )

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
