import React from "react";
import firebase from "firebase/app";
import {
  PageContent,
  Heading,
  Stack,
  FieldStack,
  InputField,
  Button,
} from "bumbag";
import { Formik, Form, Field } from "formik";

const LoginPage: React.FC = () => {
  const auth = firebase.auth();

  return (
    <PageContent>
      <Stack>
        <Heading>Login</Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (data) => {
            try {
              const creds = await auth.signInWithEmailAndPassword(
                data.email,
                data.password
              );
              console.log("Successfully logged in.");
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
              <Button type="submit">Login</Button>
            </FieldStack>
          </Form>
        </Formik>
      </Stack>
    </PageContent>
  );
};

export default LoginPage;
