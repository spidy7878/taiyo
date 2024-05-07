import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ChartsMaps from "./components/dashboard/ChartsMaps.tsx";
import Contact from "./components/contact/Contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/index.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/charts-and-maps",
    element: <ChartsMaps />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);
