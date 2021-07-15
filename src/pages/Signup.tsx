import React from "react";
import firebase from "firebase/app";
import {
  PageContent,
  Heading,
  Stack,
  FieldStack,
  InputField,
  Button,
  Link as BumbagLink,
  Text,
} from "bumbag";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const SignupPage: React.FC = () => {
  const auth = firebase.auth();
  const linkProps = BumbagLink.useProps();
  const history = useHistory();

  return (
    <PageContent>
      <Stack>
        <Heading>Sign Up</Heading>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirm: "" }}
          onSubmit={async (data) => {
            try {
              const creds = await auth.createUserWithEmailAndPassword(
                data.email,
                data.password
              );
              await creds.user?.updateProfile({ displayName: data.name });
              console.log("Successfully created account.");
              history.push("/");
            } catch (error) {
              console.error("There was an error signing up.");
            }
          }}
        >
          <Form>
            <FieldStack>
              <Field
                component={InputField.Formik}
                name="name"
                label="Name"
                placeholder="First Last"
              />
              <Field
                component={InputField.Formik}
                name="email"
                label="Email"
                placeholder="example@gmail.com"
              />
              <Field
                component={InputField.Formik}
                name="password"
                label="Password"
              />
              <Field
                component={InputField.Formik}
                name="confirm"
                label="Confirm Password"
              />
              <Button type="submit">Sign Up</Button>
            </FieldStack>
          </Form>
        </Formik>
        <Text.Block>
          Already have an account?{" "}
          <Link {...linkProps} to="/login">
            Log in.
          </Link>
        </Text.Block>
      </Stack>
    </PageContent>
  );
};

export default SignupPage;
