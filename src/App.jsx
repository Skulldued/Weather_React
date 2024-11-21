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
      <div className="w-full bg-black text-white">
        <Weather />
      </div>
    </QueryClientProvider>
  );
};

export default App;
