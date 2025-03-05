import React from "react";
import "./home.css";

const home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src="/v1.mp4" muted autoPlay loop type="video/mp4"></video>
    </section>
  );
};

export default home;
