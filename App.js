import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Counter from "./components/Counter";
import ReduxThunk from "redux-thunk";

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
