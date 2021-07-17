import React from "react";
import { Provider as BumbagProvider, ThemeConfig } from "bumbag";
import { faTrash, faAddressBook } from "@fortawesome/free-solid-svg-icons";

// Local imports
import { AuthProvider } from "./components/AuthContext";
import Routing from "./Routing";

const theme: ThemeConfig = {
  icons: {
    iconSets: [
      {
        icons: [faTrash, faAddressBook],
        type: "font-awesome",
        prefix: "solid",
      },
    ],
  },
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BumbagProvider theme={theme}>
        <div style={{ height: "100%" }}>
          <Routing />
        </div>
      </BumbagProvider>
    </AuthProvider>
  );
};

export default App;
