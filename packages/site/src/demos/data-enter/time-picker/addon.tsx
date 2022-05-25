import React from 'react';
import { TimePicker, Button } from 'eh-design';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            OK
          </Button>
        )}
      />
    );
  }
}

export default () => <TimePickerAddonDemo />;
