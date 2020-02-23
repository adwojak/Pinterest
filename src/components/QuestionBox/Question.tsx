import React from "react";
import "src/components/QuestionBox/Question.scss";

export default (): JSX.Element => {
  return (
    <div className="Question">
      <h2 className="Title">LOREM IPSUM?</h2>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </article>
    </div>
  );
};
