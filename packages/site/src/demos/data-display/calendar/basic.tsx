import React from 'react';
import { Calendar } from 'eh-design';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

export default () => <Calendar onPanelChange={onPanelChange} />;
