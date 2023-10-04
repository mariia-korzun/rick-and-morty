import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootStore from "./redux/store"
import AppRoutes from "./layout/Routes";

import './App.css';


function App(): JSX.Element {
  return (
    <Provider store={rootStore}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
