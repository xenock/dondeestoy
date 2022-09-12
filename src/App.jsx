import "./App.css";
import { useState } from "react";
import questions from "./data";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Question = ({ data }) => {
  const { image, options } = data;
  const [selected, setSelected] = useState("");

  const selectResponse = (response) => () => {
    console.log(`Response ${response}`);
  };

  return (
    <article>
      <img alt="" src={`/${image}.jpg`} />
      <p>¿Dónde estoy?</p>
      <div className="buttons">
        {options.map(({ response }, index) => (
          <Button key={index} onClick={selectResponse(response)}>
            {response}
          </Button>
        ))}
      </div>
    </article>
  );
};

function App() {
  return (
    <main>
      <Question data={questions[0]} />
    </main>
  );
}

export default App;
