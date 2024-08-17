import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import { router } from "./route/route";
import './styles/index.css'
import { Provider } from 'react-redux';
import {store} from "./store/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);