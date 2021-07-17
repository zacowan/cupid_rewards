import { store, auth, ValidateAuth } from "./utils";

const CreateRewardsPage = async () => {
  ValidateAuth();
  console.log("Test");
};

export default CreateRewardsPage;
