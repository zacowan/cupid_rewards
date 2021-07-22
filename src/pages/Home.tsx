import React, { useState, useEffect, useContext } from "react";
import {
  PageContent,
  Heading,
  Stack,
  Tabs,
  Card,
  Set,
  Button,
  Dialog,
  Modal,
} from "bumbag";
import { Link } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";
import GetRewardsPages from "../api/GetRewardsPages";
import DeleteRewardsPage from "../api/DeleteRewardsPage";
import { RewardsPageWithID } from "../api/utils";

const HomePage: React.FC = () => {
  const [rewardToDelete, setRewardToDelete] = useState<string>();
  const { user } = useContext(AuthContext);
  const [myPages, setMyPages] = useState<Array<RewardsPageWithID>>([]);
  const [myRewards, setMyRewards] = useState<Array<RewardsPageWithID>>([]);
  const deleteButtonProps = Button.useProps({
    variant: "ghost",
    palette: "danger",
  });
  const createButtonProps = Button.useProps({
    width: "100%",
    palette: "primary",
  });
  const manageButtonProps = Button.useProps({
    palette: "primary",
    variant: "outlined",
  });

  useEffect(() => {
    const loadData = async () => {
      const pages = await GetRewardsPages(user!.uid);
      setMyPages(pages);
    };
    loadData();
  }, [user]);

  const handleDeletePage = async () => {
    const id = rewardToDelete;
    if (id) {
      try {
        await DeleteRewardsPage(id);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } catch (error) {
        console.log(error);
      }
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
              <Link {...createButtonProps} to="/create-rewards-page">
                Create
              </Link>
              <Modal.State>
                <Dialog.Modal
                  showActionButtons
                  baseId="confirmDelete"
                  title="Confirm Delete"
                  actionButtonsProps={{
                    submitText: "Delete",
                    palette: "danger",
                    onClickSubmit: handleDeletePage,
                  }}
                >
                  Are you sure you want to delete this reward's page?
                </Dialog.Modal>
                {myPages.map((p) => (
                  <Card
                    key={p.id}
                    title={p.title}
                    footer={
                      <Set>
                        <Link {...manageButtonProps} to="/manage">
                          Manage
                        </Link>
                        <Modal.Disclosure
                          onClick={() => setRewardToDelete(p.id)}
                          {...deleteButtonProps}
                        >
                          Delete
                        </Modal.Disclosure>
                      </Set>
                    }
                  >
                    {p.description}
                  </Card>
                ))}
              </Modal.State>
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
