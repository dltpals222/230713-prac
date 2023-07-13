import React from "react";
import ReactDOM from "react-dom";

const app = () => {
  return (
    <div>
      <h1>
        나는 신발이 없음을 한탄했는데, <br /> 길에서 발이 없는 사람을 만났다.
      </h1>
    </div>
  );
};

ReactDOM.render(app(), document.getElementById("root"));
