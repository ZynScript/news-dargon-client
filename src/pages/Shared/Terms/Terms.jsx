import React from "react";
import {Link} from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cumque
        modi odit non, ut, cupiditate dolore doloremque neque, illo ea nulla
        error harum rem reiciendis assumenda! Magni, quasi? Ipsa, illo!
      </p>
      <p>
        Go Back To Register <Link to="/register"></Link>
      </p>
    </div>
  );
};

export default Terms;
