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

const LoginPage: React.FC = () => {
  const auth = firebase.auth();
  const linkProps = BumbagLink.useProps();
  const history = useHistory();

  return (
    <PageContent>
      <Stack>
        <Heading>Login</Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (data) => {
            try {
              await auth.signInWithEmailAndPassword(data.email, data.password);
              console.log("Successfully logged in.");
              history.push("/");
            } catch (error) {
              console.error("There was an error logging in.");
            }
          }}
        >
          <Form>
            <FieldStack>
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
              <Button type="submit">Log In</Button>
            </FieldStack>
          </Form>
        </Formik>
        <Text.Block>
          Don't have an account?{" "}
          <Link {...linkProps} to="/signup">
            Sign up.
          </Link>
        </Text.Block>
      </Stack>
    </PageContent>
  );
};

export default LoginPage;
