import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "burr its so cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

//질문 자바스크립트 문법에서 new Date ().getMonth() 이게 처음 함수로 만들어지는 곳에서 인자로 넘겨야하는 것이 아닌지.
//왜 아래에서 넘겨지고 있는지. 이게바로 콜백 함수인건지.

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season];
  // seasonConfig[season] 배열로서 season이 전달되고 있는게 이해가 필요할듯
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <div>{text}</div>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
