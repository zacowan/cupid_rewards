import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

const auth = firebase.auth();

interface AuthContextInterface {
  user: firebase.User | null | undefined;
}

export const AuthContext = React.createContext<AuthContextInterface>({
  user: undefined,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
