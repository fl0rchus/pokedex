import { FC } from "react";
import { Container, Text } from "@nextui-org/react";

interface Prop {
  message: string;
}

const ErrorMessage: FC<Prop> = ({ message }) => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      css={{ marginTop: 20 }}
    >
      <Text h2 color="error">
        {message}
      </Text>
    </Container>
  );
};

export default ErrorMessage;
