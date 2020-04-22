import React from "react";
import Todo from "./pages/Todo";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  );
}

export default App;
