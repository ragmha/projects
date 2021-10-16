import React, { Component, SFC } from "react";

type InnerContentProps = { config: object };
const InnerContent: SFC<InnerContentProps> = ({ config }) => (
  <>
    <p>Loerm Ipsum</p>
    <pre>{JSON.stringify(config)}</pre>
  </>
);

type SomeFeatureProps = { who: string } & InnerContentProps;
const SomeFeature: SFC<SomeFeatureProps> = ({ who, config }) => (
  <div>
    <InnerContent config={config} />
    By: <div>{who}</div>
  </div>
);
