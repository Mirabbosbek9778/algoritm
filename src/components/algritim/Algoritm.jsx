import { useState } from "react";

const Algoritm = () => {
  const [inputString, setInputString] = useState();
  const [res, setRes] = useState("");

  const isBalanced = (str) => {
    const data = [];
    const opening = "([{";
    const close = ")]";

    for (const char of str) {
      if (opening?.includes(char)) {
        data?.push(char);
      } else if (close?.includes(char)) {
        if (data?.length === 0) {
          return "no";
        } else {
          const top = data?.pop();
          if (
            (char === ")" && top !== "(") ||
            (char === "}" && top !== "{") ||
            (char === "]" && top !== "[")
          ) {
            return "no";
          }
        }
      }
    }
    console.log(data);
    return data?.length === 0 ? "yes" : "no";
  };
  const getInput = (e) => {
    setInputString(e?.target?.value);
  };

  const handleCheckClick = () => {
    setRes(isBalanced(inputString));
  };

  return (
    <div className="wrapper">
      <div>
        <input type="text" value={inputString} onChange={getInput} />
        <button onClick={handleCheckClick}>Check</button>
      </div>
      <p>
        Answer: {inputString} ||    {res}
      </p>
    </div>
  );
};

export default Algoritm;
