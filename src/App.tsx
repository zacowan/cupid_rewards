import React from "react";
import { Provider as BumbagProvider } from "bumbag";
import { AuthProvider } from "./components/AuthContext";

import Routing from "./Routing";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BumbagProvider>
        <div style={{ height: "100%" }}>
          <Routing />
        </div>
      </BumbagProvider>
    </AuthProvider>
  );
};

export default App;
