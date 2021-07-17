import React, { useState } from "react";
import { PageContent, Heading, Stack, Tabs, Card, Set, Button } from "bumbag";

const mockRewardPages: RewardPageType[] = [
  {
    title: "Mock Reward Page",
    description: "This is a mock reward page.",
    id: "0",
  },
];

type RewardPageType = {
  title: string;
  description?: string;
  id: string;
};

const HomePage: React.FC = () => {
  const [myPages, setMyPages] = useState<RewardPageType[]>(mockRewardPages);
  const [myRewards, setMyRewards] = useState<RewardPageType[]>(mockRewardPages);

  return (
    <PageContent>
      <Stack>
        <Heading>Home</Heading>
        <Tabs isFitted>
          <Tabs.List align="center">
            <Tabs.Tab tabId="my-pages">My Pages</Tabs.Tab>
            <Tabs.Tab tabId="my-rewards">My Rewards</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel tabId="my-pages" marginTop="major-2">
            <Stack>
              {myPages.map((p) => (
                <Card
                  key={p.id}
                  title={p.title}
                  headerAddon={
                    <Button
                      iconBefore="solid-trash"
                      palette="danger"
                      variant="ghost"
                    >
                      Delete
                    </Button>
                  }
                  footer={
                    <Set>
                      <Button palette="primary">View</Button>
                      <Button>Edit</Button>
                    </Set>
                  }
                >
                  {p.description}
                </Card>
              ))}
            </Stack>
          </Tabs.Panel>
          <Tabs.Panel tabId="my-rewards" marginTop="major-2">
            My Rewards
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </PageContent>
  );
};

export default HomePage;
