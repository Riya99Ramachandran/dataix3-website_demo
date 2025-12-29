import "./Contact.css";


function Contact() {
  return (
    <section id="contact" className="contact">

  
      <div className="contact-form">
        <h2>Contact for IT Services</h2>

        <form>
          <div className="form-group">
            <label>Name </label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email </label>
            <input type="email" placeholder="Your email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

     
      <div className="contact-info">

        
        <div className="contact-map">
          <iframe
            title="Dataix3 Location"
            src="https://www.google.com/maps?q=Infopark%20Campus%20Kochi&output=embed"
            loading="lazy"
          ></iframe>
        </div>

       
        <div className="contact-details">
          <h3>Get In Touch</h3>

          <p><strong>Reach Us</strong></p>
          <p>Infopark Campus, Kochi, IN</p>
          <p>mail@dataix3.com</p>
          <p>+91 8590 945 369</p>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="https://www.linkedin.com/company/dataix3/posts/?feedView=all">LinkedIn</a>
            <a href="#https://www.instagram.com/dataix3/?g=5">Instagram</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;
