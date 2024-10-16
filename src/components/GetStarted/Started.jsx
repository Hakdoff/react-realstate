import React, { useState } from "react";
import "./Started.css";

const Started = () => {
  return (
    <section className="s-wrapper" id="started">
      <div className="paddings innerWidth s-container">
        <div className="flexColCenter inner-container">
          <span class="primaryText">Get started with Homyz</span>
          <span class="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button class="button">
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Started;
