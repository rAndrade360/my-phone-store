import React from "react";
import "./App.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
