import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div class="content thank-you-page">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for your booking. </p>
            <p>you should receive a confirmation email soon </p><br></br>
            <Link to='/' class="go-home">go home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
