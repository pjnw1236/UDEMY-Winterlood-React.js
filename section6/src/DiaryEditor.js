import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          onChange={(e) => {
            // console.log(e.target.name);
            // console.log(e.target.value);
            setState({
              ...state,
              author: e.target.value,
              // content: state.content,
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
              // author: state.author,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
