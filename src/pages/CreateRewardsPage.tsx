import React from "react";
import {
  PageContent,
  Heading,
  FieldStack,
  InputField,
  Button,
  Stack,
  TextareaField,
  Link as BumbagLink,
  Set,
} from "bumbag";
import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";

import CreateRewardsPage from "../api/CreateRewardsPage";

const CRPPage: React.FC = () => {
  const linkProps = BumbagLink.Block.useProps();
  const buttonProps = Button.useProps();
  const history = useHistory();

  return (
    <PageContent>
      <Stack>
        <Link {...linkProps} to="/">
          Back
        </Link>
        <Heading use="h2">New Rewards Page</Heading>
        <Formik
          initialValues={{ title: "", description: "" }}
          onSubmit={async (data) => {
            try {
              await CreateRewardsPage(data);
              history.push("/");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Form>
            <FieldStack>
              <Field
                component={InputField.Formik}
                name="title"
                label="Title"
                placeholder="New Page"
              />
              <Field
                component={TextareaField.Formik}
                name="description"
                label="Description"
                placeholder="A short description for your page."
              />
              <Set>
                <Button palette="primary" type="submit">
                  Create
                </Button>
                <Link {...buttonProps} to="/">
                  Cancel
                </Link>
              </Set>
            </FieldStack>
          </Form>
        </Formik>
      </Stack>
    </PageContent>
  );
};

export default CRPPage;
