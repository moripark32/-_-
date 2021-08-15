import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const PropsUnderstandingApp = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 4:15pm"
          content="here it goes"
          fakerLink={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Felix"
          date="Today at 5:15pm"
          content="you are doing so well"
          fakerLink={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Today at 6:15pm"
          content="im so proud of you"
          fakerLink={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
export default PropsUnderstandingApp;
