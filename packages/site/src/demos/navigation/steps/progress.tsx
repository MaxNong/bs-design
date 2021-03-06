import React from 'react';
import { Steps } from 'bs-design';

const { Step } = Steps;

export default () => (
  <Steps current={1} percent={60}>
    <Step title="Finished" description="This is a description." />
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Step title="Waiting" description="This is a description." />
  </Steps>
);
