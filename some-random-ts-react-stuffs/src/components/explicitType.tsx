// button.tsx
import React, { Component, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button: React.SFC<ButtonProps> = ({ children }) => (
  <button>{children}</button>
);

type UserDetailProps = {
  id: string;
  name: string;
  email: string;
  children?: never;
};

const UserDetail: React.SFC<UserDetailProps> = ({ id, email, name }) => (
  <section>
    <h3>
      {name} : {id}
    </h3>
    <p>Email: {email}</p>
  </section>
);

const App = () => (
  <>
    <Button>click</Button>
    <UserDetail id="421312" email="johnny@five.org" name="Johnny the Fifth" />
  </>
);
