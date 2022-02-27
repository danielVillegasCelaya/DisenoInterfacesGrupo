import React from 'react';
import { Button } from 'react-bootstrap';
class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickButton = props.onClickButton;
    this.text = props.text;
  }

  render() {
    return (
      <Button
        variant="primary"
        type="button"
        onClick={() => this.onClickButton()}
      >
        {this.text}
      </Button>
    );
  }
}

export default Boton;