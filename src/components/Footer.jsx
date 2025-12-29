function Footer() {
  return (
    <footer
      style={{
        padding: "120px 80px",
        background: "#007197ff",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "2vw", marginBottom: "20px" }}>
        Request Service
      </h2>

      <input
        placeholder="Name"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          background: "transparent",
          border: "1px solid #e1e1e1ff",
          color: "white",
        }}
      />

      <input
        placeholder="Email"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          background: "transparent",
          border: "1px solid #cececeff",
          color: "white",
        }}
      />

      <textarea
        placeholder="Service requirement"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          background: "transparent",
          border: "1px solid #e5e5e5ff",
          color: "white",
        }}
      />

      <button onClick={() => (alert('Thank you for contacting us! We will get back to you shortly.'))}
        style={{
          padding: "12px 20px",
          background: "white",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
        
      </button>
    <h1 style={{ marginTop: "40px", fontSize: "14px", color: "#f6f6f6ff" }}>Contact us </h1>
    <p>Infopark Campus, Kochi, IN</p>
          <p>mail@dataix3.com</p>
          <p>+91 8590 945 369</p>
      <p style={{ marginTop: "30px", fontSize: "14px", color: "#f6f6f6ff" }}>
        copyright © 2025 Dataix3. All rights reserved.
      </p>
     
    </footer>
  );
}

export default Footer;
