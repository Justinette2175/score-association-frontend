import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./Router";
import { CloudinaryContextProvider } from "./Contexts/CloudinaryContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CloudinaryContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CloudinaryContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
