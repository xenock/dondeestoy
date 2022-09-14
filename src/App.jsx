import { useState, useEffect } from "react";
import "./App.css";
import questions from "./data";

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Question = ({ data, nextQuestionStep, addPoint, nextStep }) => {
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
        nextQuestionStep();
        setSelected(null);
        setAnwered(false);
      }, 800);
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

const Welcome = ({ step, nextStep }) => (
  <article>
    <img
      className="logo"
      alt="No es posible cargar la imagen"
      src="/logo.png"
    />
    <h1>Bienvenidos a este juego sobre lugares de Cartaya</h1>
    <p>Descubre cuanto conoces a tu pueblo</p>
    <div className="buttons">
      <button onClick={nextStep}>¡Comenzar!</button>
    </div>
  </article>
);

const Stepper = ({ children, step }) => {
  const Element = () => [...children][step];
  return <Element />;
};

function App() {
  const [questionStep, setQuestionStep] = useState(0);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);

  const nextQuestionStep = () => {
    setQuestionStep(questionStep + 1);
  };

  const nextStep = () => {
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
      <Stepper step={step}>
        <Welcome nextStep={nextStep} />
        <Question
          addPoint={addPoint}
          data={questions[questionStep]}
          nextStep={nextStep}
          nextQuestionStep={nextQuestionStep}
          setStep={setStep}
        />
      </Stepper>
    </main>
  );
}

export default App;
