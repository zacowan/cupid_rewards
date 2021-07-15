import React, { useState } from "react";
import { PageContent, Heading, Stack } from "bumbag";

const HomePage: React.FC = () => {
  const rewardsPages = useState([]);

  return (
    <PageContent>
      <Stack>
        <Heading>Rewards Pages</Heading>
        <Stack></Stack>
      </Stack>
    </PageContent>
  );
};

export default HomePage;
