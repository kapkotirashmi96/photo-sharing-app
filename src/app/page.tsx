import { NavBarMenu } from "@/data";
import NavBar from "@/shared/ui/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar menu={NavBarMenu} />
    </div>
  );
}
