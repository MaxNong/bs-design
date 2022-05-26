import React from 'react';
import { Steps } from 'bs-design';

const { Step } = Steps;

export default () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);
