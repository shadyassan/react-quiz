import { createContext, useReducer, useContext } from 'react';
import { fetchQuizById } from '../api/quizApi';

export const QuizStateContext = createContext();
export const QuizDispatchContext = createContext();

export const initialState = {
  activeQuestion: 0,
  isFinished: false,
  quiz: [],
  loading: true,
  results: {},
};

const reducer = (s, v) => ({ ...s, ...v });

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  );
};

export function useQuizState() {
  const state = useContext(QuizStateContext);
  if (!state) {
    throw Error('useQuizState must be used within QuizContextProvider');
  }
  return state;
}

export function useQuizDispatch() {
  const dispatch = useContext(QuizDispatchContext);
  if (!dispatch) {
    throw Error('useQuizDispatch must be used within QuizContextProvider');
  }
  return dispatch;
}

export function useFetchQuiz() {
  const dispatch = useQuizDispatch();

  return async function (id) {
    const quiz = await fetchQuizById(id);
    dispatch({ quiz, loading: false });
  };
}

export const useAnswerClick = () => {
  const { quiz, activeQuestion, results } = useQuizState();
  const dispatch = useQuizDispatch();

  return function (answerId) {
    const question = quiz[activeQuestion];

    if (question.rightAnswerId === answerId) {
      dispatch({
        results: { ...results, [question.id]: 'success' },
      });
    } else {
      dispatch({
        results: { ...results, [question.id]: 'error' },
      });
    }

    if (activeQuestion + 1 === quiz.length) {
      dispatch({
        isFinished: true,
      });
    } else {
      dispatch({
        activeQuestion: activeQuestion + 1,
      });
    }
  };
};

export const useRetryHandler = () => {
  const dispatch = useQuizDispatch();
  return function () {
    dispatch(initialState);
  };
};
