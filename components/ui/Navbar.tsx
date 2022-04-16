/* eslint-disable @next/next/link-passhref */
import { Container, Button, Text } from "@nextui-org/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container
      display="flex"
      justify="space-between"
      alignItems="center"
      fluid
      style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}
    >
      <div>
        <Link href="/">
          <Text color="white" h2 css={{ cursor: "pointer" }}>
            Pokedex
          </Text>
        </Link>
      </div>
      <div>
        <Link href="/favorites">
          <Button bordered color="gradient" size="sm">
            Favoritos
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
