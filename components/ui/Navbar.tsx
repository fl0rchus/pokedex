import { Container, Button, Text } from "@nextui-org/react";
import HeartIcon from "./HeartIcon";

const Navbar = () => {
  return (
    <Container
      display="flex"
      justify="space-between"
      alignItems="center"
      fluid
      style={{ marginTop: 10 }}
    >
      <div>
        <Text color="white" h2>
          Pokedex
        </Text>
      </div>
      <div>
        <Button bordered color="gradient" icon={<HeartIcon />}>
          Favoritos
        </Button>
      </div>
    </Container>
  );
};

export default Navbar;
