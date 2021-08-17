import React from "react";
import SeasonDisplay from "./SeasonDisplay";

// const ClassComponentStudyApp = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div></div>;
// };

class ClassComponentStudyApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage:'' };
  //   }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <div>Loading!</div>
      //   <div>
      //     Latitude:{this.state.lat}
      //     <br />
      //     Error:{this.state.errorMessage}
      //   </div>
    );
  }
}

export default ClassComponentStudyApp;
