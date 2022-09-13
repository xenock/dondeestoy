import { useState, useEffect } from "react";
import "./App.css";
import questions from "./data";

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Question = ({ data, setStep, addPoint }) => {
  const { image, options } = data;
  const [selected, setSelected] = useState(null);
  const [answered, setAnwered] = useState(false);
  const correctAnswer = options.findIndex((option) => option.isCorrect);

  const selectResponse = (response) => () => {
    if (!answered) {
      setSelected(response);
      setAnwered(true);

      if (response === correctAnswer) addPoint();

      setTimeout(() => {
        setStep();
        setSelected(null);
        setAnwered(false);
      }, 500);
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
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const nextStep = (nextStep) => {
    setStep(step + 1);
  };

  const addPoint = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <main>
      <Question data={questions[step]} setStep={nextStep} addPoint={addPoint} />
    </main>
  );
}

export default App;
