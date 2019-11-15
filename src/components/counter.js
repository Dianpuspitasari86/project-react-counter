import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.buttonClocked = this.buttonClocked.bind(this);
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  buttonClocked(event) {
    if (this.state.value === 0) {
      alert("Sudah 0");
    } else {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <div className="counter">
        <div>{this.state.value}</div>
        <center>
          <button onClick={this.buttonClicked}>Tambah</button>
          <button onClick={this.buttonClocked}>Kurang</button>
        </center>
      </div>
    );
  }
}

export default Counter;
