import Image from "next/image";
import bg from "../../../public/background.jpg";
export default function Background() {
  return (
    <Image src={bg} width={1920} height={600} alt="bg" className="h-full" />
  );
}
