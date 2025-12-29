import { useEffect } from "react";
import { heroAnimation } from "../animations/hero";
import "./Home.css";

function Home() {
  useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section id="home" className="homepage">

     
      <video
        className="hero-video"
        src="/home.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      
      <div className="hero-overlay"></div>

   
      <div className="hero-content">
        <div className="hero-mask">
          <h1 className="hero-title">
            <span>Decoding</span>
            <span>Data</span>
            <span>Dimensions</span>
          </h1>
        </div>

        <p className="hero-subtitle">
          Your Trusted Digital Transformation Enabler
        </p>
      </div>

    </section>
  );
}

export default Home;
