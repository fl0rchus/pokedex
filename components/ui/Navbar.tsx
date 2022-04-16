/* eslint-disable @next/next/link-passhref */
import NextLink from "next/link";
import { Text, Link } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NextLink href="/">
        <Link>
          <Text h2>Pokedex</Text>
        </Link>
      </NextLink>
      <NextLink href="/favorites">
        <Link color="primary" block>
          Favoritos
        </Link>
      </NextLink>
    </nav>
  );
};

export default Navbar;
