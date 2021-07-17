import firebase from "firebase/app";

export const store = firebase.firestore();
export const auth = firebase.auth();

export const AUTH_NOT_VALIDATED_MSG = "Not authorized.";

export const ValidateAuth = () => {
  if (auth.currentUser !== null) {
    return;
  } else {
    throw new Error(AUTH_NOT_VALIDATED_MSG);
  }
};
