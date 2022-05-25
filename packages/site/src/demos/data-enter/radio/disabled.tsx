import React from 'react';
import { Radio, Button } from 'eh-design';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Button
          type="primary"
          onClick={this.toggleDisabled}
          style={{ marginTop: 16 }}
        >
          Toggle disabled
        </Button>
      </>
    );
  }
}

export default App;
