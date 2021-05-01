import ReactDOM from "react-dom";
import "./index.css";
import reducers from "./reducers";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  rootElement
);
