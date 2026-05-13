import Link from "next/link";
import {
  Heart,
  Home,
  Search,
  MessageCircle,
  SquareUserRound,
} from "lucide-react";
import Image from "next/image";

type NavBar = {
  menu: {
    name: string;
    path: string;
  }[];
};

const getIcon = (type: string) => {
  switch (type) {
    case "home":
      return <Home />;
    case "search":
      return <Search />;
    case "account":
      return <MessageCircle />;
    case "wishlist":
      return <Heart />;
  }
};

const NavBar = ({ menu }: NavBar) => {
  return (
    <nav className="flex justify-between p-6">
      <section>
        <Image
          alt="logo"
          src={"/images/Instagram-icon.avif"}
          width={20}
          height={20}
        />
      </section>
      <section className="flex gap-8">
        {menu.map((item) => (
          <Link key={item.name} href={item.path}>
            {getIcon(item.name)}
          </Link>
        ))}
      </section>
      <section>
        <SquareUserRound />
      </section>
    </nav>
  );
};

export default NavBar;
