//import react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
//create a react component
// const getButtonText = () => {
//   return "click on me!";
// };
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Today at 4:15pm"
        fakerLink={faker.image.avatar()}
      />
      <CommentDetail
        author="Felix"
        date="Today at 5:15pm"
        fakerLink={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        date="Today at 6:15pm"
        fakerLink={faker.image.avatar()}
      />
    </div>
  );
};

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
