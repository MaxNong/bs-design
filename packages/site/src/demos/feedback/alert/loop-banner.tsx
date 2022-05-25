import React from 'react';
import { Alert } from 'eh-design';
import { TextLoop } from 'react-text-loop-next';
import Marquee from 'react-fast-marquee';

export default () => (
  <>
    <Alert
      banner
      message={
        <TextLoop mask>
          <div>Notice message one</div>
          <div>Notice message two</div>
          <div>Notice message three</div>
          <div>Notice message four</div>
        </TextLoop>
      }
    />
    <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      }
    />
  </>
);
