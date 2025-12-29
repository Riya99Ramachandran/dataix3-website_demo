import { useEffect } from "react";
import { reveal } from "../animations/reveal";
import "./About.css";

function About() {
  useEffect(() => {
    reveal(".about", ".about-title span");
    reveal(".about", ".about-text");
    reveal(".about", ".process-item");
  }, []);

  return (
    <section id="about">
    <section className="aboutt">

      
      <div className="about-title-mask">
        <h2 className="about-title">
          <span>About Us</span>
        </h2>
        <h4 className="about-subtitle">Welcome to Dataix3</h4>
      </div>

     
      <p className="about-text">
        We are a technology company focused on scalable digital systems.
      </p>

      <p className="about-text">
        Our teams build reliable, future-ready digital experiences for
        modern businesses.
      </p>

  
      <div className="process">
        <h3 className="process-title">Our 6-C Process</h3>

        <div className="process-list">
          <div className="process-item">
            <span className="process-number">01</span>
            <h4>Concept</h4>
            <p>
              We understand your vision and define the right strategy to bring
              your ideas to life.
            </p>
          </div>

          <div className="process-item">
            <span className="process-number">02</span>
            <h4>Collaboration</h4>
            <p>
              We work closely with you to ensure alignment, clarity, and smooth
              execution.
            </p>
          </div>

          <div className="process-item">
            <span className="process-number">03</span>
            <h4>Creation</h4>
            <p>
              Our team designs and develops high-quality solutions with
              precision.
            </p>
          </div>

          <div className="process-item">
            <span className="process-number">04</span>
            <h4>Checking</h4>
            <p>
              Every detail is tested and reviewed to ensure performance and
              reliability.
            </p>
          </div>

          <div className="process-item">
            <span className="process-number">05</span>
            <h4>Communication</h4>
            <p>
              We keep you informed at every stage with clear feedback and
              transparency.
            </p>
          </div>

          <div className="process-item">
            <span className="process-number">06</span>
            <h4>Completion</h4>
            <p>
              We deliver on time with excellence, ensuring long-term success.
            </p>
          </div>
        </div>
      </div>

    </section>
    </section>
  );
}

export default About;
