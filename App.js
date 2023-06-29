import React from "react";

import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import AppNav from "./src/components/AppNav";

export default function App() {
  return (
    <Provider store={store}>
        <AppNav />
    </Provider>
  );
}