import React from "react";
const ApprovalCard = (props) => {
  console.log(props.children); // 여기가 엄마가 품고있는 자식컴포넌트인 commentDetail이 보이는 곳
  //사이에 끼워넣고 있는것도 똑같이 프롭스로 받고있는 것과 같음. 꼭 줄안에서 키를 만드는 것만 프롭스 전달이 아님.
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Deny</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
