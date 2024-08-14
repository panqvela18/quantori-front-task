import bg from "../../public/background.jpg";

export default function contact() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        color: "white",
        fontWeight: 700,
      }}
    >
      contact
    </div>
  );
}
