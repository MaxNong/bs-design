import React from 'react';
import { Calendar } from 'bs-design';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default () => (
  <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
);
