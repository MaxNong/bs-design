import React from 'react';
import { Grid, Tag } from 'bs-design';

const { useBreakpoint } = Grid;

function UseBreakpointDemo() {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
}

export default () => <UseBreakpointDemo />;
