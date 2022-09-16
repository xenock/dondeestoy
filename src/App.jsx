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
  return (
    {
      [actions.nextStep]: {
        ...state,
        step: state.step + 1,
      },
      [actions.nextQuestionStep]: {
        ...state,
        questionStep: state.questionStep + 1,
      },
      [actions.addPoint]: {
        ...state,
        score: state.score + 1,
      },
      [actions.selectOption]: {
        ...state,
        selected: action.payload,
        answered: true,
      },
      [actions.reset]: {
        ...state,
        selected: null,
        answered: false,
      },
    }[action.type] || state
  );
};

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Question = ({
  state,
  dispatch,
  data,
  nextQuestionStep,
  addPoint,
  nextStep,
}) => {
  const { image, options } = data;
  const correctAnswer = options.findIndex((option) => option.isCorrect);

  const selectResponse = (response) => () => {
    if (!state.answered) {
      dispatch({ type: actions.selectOption, payload: response });

      if (response === correctAnswer) addPoint();

      setTimeout(() => {
        dispatch({ type: actions.reset });
        dispatch({ type: actions.nextQuestionStep });
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextQuestionStep = () => {
    dispatch({ type: actions.nextQuestionStep });
  };

  const nextStep = () => {
    dispatch({ type: actions.nextStep });
  };

  const addPoint = () => {
    dispatch({ type: actions.addPoint });
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
          addPoint={addPoint}
          data={questions[state.questionStep]}
          nextStep={nextStep}
          nextQuestionStep={nextQuestionStep}
        />
      </Stepper>
    </main>
  );
}

export default App;
