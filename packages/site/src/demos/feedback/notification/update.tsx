import React from 'react';
import { Button, notification } from 'bs-design';

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

export default () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
