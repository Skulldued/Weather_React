import React from "react";

import Weather from "./components/Weather";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Weather />
      </div>
    </QueryClientProvider>
  );
};

export default App;
