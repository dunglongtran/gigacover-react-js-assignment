import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer";
import { Routes } from "./routes";
import "./styles.css";

const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gigacover Engineering - ReactJS Assessment</h1>
        <h2>The web application should display the trips: </h2>
        <Routes />
      </div>
    </Provider>
  );
}
