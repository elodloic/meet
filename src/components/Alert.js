import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0, 128, 128)"; // teal
    this.bgColor = "rgb(210, 245, 245)"; // light teal
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(153, 0, 0)"; // deep crimson
    this.bgColor = "rgb(255, 230, 230)"; // soft pink
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(184, 134, 11)"; // dark mustard
    this.bgColor = "rgb(255, 250, 205)"; // light cream
  }
}
export { InfoAlert, ErrorAlert, WarningAlert };
