import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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
  //      window.navigator.geolocation.getCurrentPosition(
  //     (position) => console.log(position),
  //     (err) => console.log(err)
  //   );
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
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <div>
        <Spinner message={"will be loaded soon"} />
      </div>
      //   <div>
      //     Latitude:{this.state.lat}
      //     <br />
      //     Error:{this.state.errorMessage}
      //   </div>
    );
  } // 이부분에 있어서 질문해야함. 여기는 함수처럼 불려서 사용되고 있는데 const 이름 ()=>{} 이렇게 쓰는거나
  //이름 (){} 이렇게 쓰는 것과 무슨차이인지.
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default ClassComponentStudyApp;
