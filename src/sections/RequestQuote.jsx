function RequestQuote() {
  return (
    <section
      id="quote"
      style={{
        padding: "80px 20px",
        background: "#ffffffff",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "16px",
          fontWeight: "500",
        }}
      >
        Would you like to start a project with us?
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 32px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "rgba(0, 0, 0, 0.85)",
        }}
      >
        We’d love to collaborate with you. Contact our team to discuss your
        goals and find the best way to achieve them together.
      </p>

      <button
        onClick={() => (window.location.href = "/contact")}
        style={{
          padding: "14px 32px",
          fontSize: "16px",
          background: "grey",
          color: "black",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "#9e9e9eff")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "white")
        }
      >
        Connect with us
      </button>
    </section>
  );
}

export default RequestQuote;
