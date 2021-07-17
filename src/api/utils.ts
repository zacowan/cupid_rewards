// Firebase constants
export const REWARDS_PAGES_COLLECTION = "rewards_pages";
// Types
export type RewardsPage = {
  title: string;
  description?: string;
  created_by: string;
  listeners: Array<string>;
  rewards: Array<Reward>;
};

export type Reward = {
  title: string;
  description?: string;
  redeemed: boolean;
};
