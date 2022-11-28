import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesLayout from "routes";
import { DEFAULT_QUERY_OPTION } from "utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "store";

const App = () => <RoutesLayout />;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: DEFAULT_QUERY_OPTION,
  },
});

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
