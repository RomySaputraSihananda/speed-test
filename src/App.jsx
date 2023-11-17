import React from "react";
import speedtest from "./utils/speed";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: null,
    };
  }

  handleSpeed = async () => {
    const speed = await speedtest();
    console.log(speed);
    // this.setState({ speed });
  };

  render = () => {
    const { speed } = this.state;

    return (
      <div>
        <h1>Speed Test</h1>

        <button onClick={this.handleSpeed}>Test dong</button>
        {speed && (
          <div>
            <p>download : {speed.download}</p>
            <p>upload : {speed.upload}</p>
          </div>
        )}
      </div>
    );
  };
}

export default App;
