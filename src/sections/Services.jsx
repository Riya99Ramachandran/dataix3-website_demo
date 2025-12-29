function Services() {
  const sectionStyle = {
    minHeight: "100vh",
    padding: "160px 80px",
    background: "#f9fafb",
  };

  const titleStyle = {
    fontSize: "clamp(32px, 4vw, 56px)",
    fontWeight: 500,
    marginBottom: "20px",
    letterSpacing: "-0.03em",
  };

  const subtitleStyle = {
    maxWidth: "720px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#444",
    marginBottom: "80px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  };

  const cardStyle = {
    padding: "32px",
    background: "#94d0e0ff",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardTitle = {
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "16px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: 1.8,
    color: "#555",
  };

  return (
    <section id="services" style={sectionStyle}>
      <h2 style={titleStyle}>Services</h2>

      <p style={subtitleStyle}>
        We provide a wide range of Services
We are a data engineering and AI-driven solutions company dedicated to empowering businesses through innovative data systems, smart web technologies, and digital transformation consulting.
      </p>

      <div style={gridStyle}>
    
        <div style={cardStyle}>
          <h3 style={cardTitle}>Web</h3>
          <ul style={listStyle}>
            <li>Website building</li>
            <li>Website relaunching</li>
            <li>E-commerce website development</li>
            <li>Portfolio website building</li>
          </ul>
        </div>

     
        <div style={cardStyle}>
          <h3 style={cardTitle}>Data</h3>
          <ul style={listStyle}>
            <li>Machine Learning model development</li>
            <li>Data engineering</li>
            <li>Data analytics and reporting</li>
          </ul>
        </div>

       
        <div style={cardStyle}>
          <h3 style={cardTitle}>Cloud</h3>
          <ul style={listStyle}>
            <li>Cloud computing services</li>
            <li>ERP solutions</li>
            <li>LMS solutions</li>
          </ul>
        </div>

       
        <div style={cardStyle}>
          <h3 style={cardTitle}>Marketing</h3>
          <ul style={listStyle}>
            <li>Digital marketing</li>
            <li>SEO</li>
            <li>SMM</li>
            <li>Portfolio making</li>
            <li>Personal branding</li>
            <li>Brand outreach</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
