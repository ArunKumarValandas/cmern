export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "auto",
        padding: 0,
        lineHeight: 0,
        backgroundColor: "#06264A",
      }}
    >
      <img
  className="footer-image"
  src={`${process.env.PUBLIC_URL}/images/footer.png`}
  alt="ICIFMEDE 2027 conference footer"
 style={{
  display: "block",
  width: "100%",
  height: "169px",
  objectFit: "fill",
  border: 0,
  margin: 0,
}}
/>
      
    </footer>
  );
}