import { useEffect, useReducer } from "react";
import "./App.css";
import questions from "./data";

const initialState = {
  questionStep: 0,
  score: 0,
  step: 0,
  selected: null,
  answered: false,
};

const actions = {
  nextStep: "nextStep",
  nextQuestionStep: "nextQuestionStep",
  addPoint: "addPoint",
  selectOption: "selectOption",
  reset: "reset",
};

const reducer = (state, action) => {
  const { nextStep, nextQuestionStep, addPoint, selectOption, reset } = actions;
  return (
    {
      [nextStep]: {
        ...state,
        step: state.step + 1,
      },
      [nextQuestionStep]: {
        ...state,
        questionStep: state.questionStep + 1,
      },
      [addPoint]: {
        ...state,
        score: state.score + 1,
      },
      [selectOption]: {
        ...state,
        selected: action.payload,
        answered: true,
      },
      [reset]: {
        ...state,
        selected: null,
        answered: false,
      },
    }[action.type] || state
  );
};

const Question = ({ state, dispatch, data, addPoint, numberOfQuestions }) => {
  const { image, options } = data;
  const correctAnswer = options.findIndex((option) => option.isCorrect);

  const selectResponse = (response) => () => {
    if (!state.answered) {
      dispatch({ type: actions.selectOption, payload: response });

      if (response === correctAnswer) dispatch({ type: actions.addPoint });

      setTimeout(() => {
        dispatch({ type: actions.reset });

        if (state.questionStep === numberOfQuestions - 1) {
          dispatch({ type: actions.nextStep });
        } else {
          dispatch({ type: actions.nextQuestionStep });
        }
      }, 800);
    }
  };

  const printProperColor = (index) => {
    const isRelevantOption =
      index === correctAnswer || index === state.selected;

    if (state.answered && isRelevantOption) {
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
          <button
            key={index}
            className={printProperColor(index)}
            onClick={selectResponse(index)}
          >
            {response}
          </button>
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

const Score = ({ score }) => (
  <article>
    <img
      className="logo"
      alt="No es posible cargar la imagen"
      src="/logo.png"
    />
    <h1>¡Enhorabuena! Tu puntuación es {score}</h1>
  </article>
);

const Stepper = ({ children, step }) => {
  const Element = () => [...children][step];
  return <Element />;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextStep = () => {
    dispatch({ type: actions.nextStep });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
      <Stepper step={state.step}>
        <Welcome nextStep={nextStep} />
        <Question
          state={state}
          dispatch={dispatch}
          data={questions[state.questionStep]}
          numberOfQuestions={questions.length}
        />
        <Score score={state.score} />
      </Stepper>
    </main>
  );
}

export default App;
