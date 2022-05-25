import React from 'react';
import { Button, notification } from 'eh-design';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600,
    },
  });
};

export default () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
