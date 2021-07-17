import React from "react";
import {
  PageContent,
  Heading,
  Paragraph,
  Stack,
  Link as BumbagLink,
  Set,
} from "bumbag";
import { Link } from "react-router-dom";

const NoMatchPage: React.FC = () => {
  const linkProps = BumbagLink.useProps();

  return (
    <PageContent>
      <Stack>
        <Heading>Oh No!</Heading>
        <Paragraph>
          Looks like the page you were looking for doesn't exist.
        </Paragraph>
        <Set>
          <Link {...linkProps} to="/">
            Home
          </Link>
          <Link {...linkProps} to="/login">
            Login
          </Link>
          <Link {...linkProps} to="/signup">
            Sign Up
          </Link>
        </Set>
      </Stack>
    </PageContent>
  );
};

export default NoMatchPage;
