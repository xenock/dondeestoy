import "./App.css";
import { useEffect, useState } from "react";
import questions from "./data";

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Question = ({ data }) => {
  const { image, options } = data;
  const [selected, setSelected] = useState(null);
  const [answered, setAnwered] = useState(false);
  const correctAnswer = options.findIndex((option) => option.isCorrect);

  const selectResponse = (response) => () => {
    if (!answered) {
      setSelected(response);
      setAnwered(true);
    }
  };

  const printProperColor = (index) => {
    const isRelevantOption = index === correctAnswer || index === selected;

    if (answered && isRelevantOption) {
      return index === correctAnswer ? "correct" : "wrong";
    } else {
      return "";
    }
  };

  return (
    <article>
      <img alt="No es posible cargar la imagen" src={`/${image}.jpg`} />
      <p>¿Dónde estoy?</p>
      <div className="buttons">
        {options.map(({ response, isCorrect }, index) => (
          <Button
            key={index}
            className={printProperColor(index)}
            onClick={selectResponse(index)}
          >
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
