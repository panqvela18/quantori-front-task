import bg from "../../public/background.jpg";

export default function about() {
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
      about
    </div>
  );
}
