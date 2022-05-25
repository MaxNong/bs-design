import React, { useState } from 'react';
import { TimePicker } from 'eh-design';

const Demo = () => {
  const [value, setValue] = useState(null);

  const onChange = (time) => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

export default Demo;
