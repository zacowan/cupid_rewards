import firebase from "firebase/app";
import {
  REWARDS_PAGES_COLLECTION,
  RewardsPage,
  RewardsPageWithID,
} from "./utils";

const store = firebase.firestore();

const GetRewardsPages = async (): Promise<Array<RewardsPageWithID>> => {
  const snapshot = await store.collection(REWARDS_PAGES_COLLECTION).get();
  let ret: Array<RewardsPageWithID> = [];
  snapshot.forEach((doc) => {
    const data = doc.data() as RewardsPage;
    ret.push({ ...data, id: doc.id });
  });
  return ret;
};

export default GetRewardsPages;
