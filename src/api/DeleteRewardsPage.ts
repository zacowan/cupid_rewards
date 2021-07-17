import firebase from "firebase/app";
import { REWARDS_PAGES_COLLECTION } from "./utils";

const store = firebase.firestore();

const DeleteRewardsPage = async (id: string) => {
  await store.collection(REWARDS_PAGES_COLLECTION).doc(id).delete();
};

export default DeleteRewardsPage;
