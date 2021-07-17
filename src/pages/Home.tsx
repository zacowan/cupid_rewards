import React, { useState, useEffect, useContext } from "react";
import { PageContent, Heading, Stack, Tabs, Card, Set, Button } from "bumbag";
import { Link } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";
import GetRewardsPages from "../api/GetRewardsPages";
import DeleteRewardsPage from "../api/DeleteRewardsPage";
import { RewardsPageWithID } from "../api/utils";

const HomePage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [myPages, setMyPages] = useState<Array<RewardsPageWithID>>([]);
  const [myRewards, setMyRewards] = useState<Array<RewardsPageWithID>>([]);
  const buttonProps = Button.useProps({ marginTop: "major-2", width: "100%" });

  useEffect(() => {
    const loadData = async () => {
      const pages = await GetRewardsPages(user!.uid);
      setMyPages(pages);
    };
    loadData();
  }, [user]);

  const handleDeletePage = async (id: string) => {
    try {
      await DeleteRewardsPage(id);
      let newPages: Array<RewardsPageWithID> = [];
      myPages.forEach((p) => {
        if (p.id !== id) newPages.push(p);
      });
      setMyPages(newPages);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Stack spacing="major-2">
              <Link {...buttonProps} to="/create-rewards-page">
                Create
              </Link>
              {myPages.map((p) => (
                <Card
                  key={p.id}
                  title={p.title}
                  headerAddon={
                    <Button
                      iconBefore="solid-trash"
                      palette="danger"
                      variant="ghost"
                      onClick={() => handleDeletePage(p.id)}
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
