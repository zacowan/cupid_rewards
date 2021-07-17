import firebase from "firebase/app";
import { REWARDS_PAGES_COLLECTION, RewardsPage } from "./utils";

const auth = firebase.auth();
const store = firebase.firestore();

type CreateRewardsPageData = {
  title: string;
  description?: string;
};

const CreateRewardsPage = async (data: CreateRewardsPageData) => {
  const docData: RewardsPage = {
    title: data.title,
    description: data.description,
    created_by: auth.currentUser!.uid,
    listeners: [],
    rewards: [],
  };

  await store.collection(REWARDS_PAGES_COLLECTION).add(docData);
};

export default CreateRewardsPage;
