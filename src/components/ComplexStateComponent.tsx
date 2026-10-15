import { useReducer } from "react"

interface State {
    count: number
    error: string | null
}

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "SET_ERROR"; payload: string };

const initialState: State = {count: 0, error: null}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload, error: null };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default function ComplexStateComponent() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        decrement
      </button>
      <button>reset</button>
    </div>
  );
}
