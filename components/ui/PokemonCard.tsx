import { FC } from "react";
import { Card, Row, Text, theme } from "@nextui-org/react";

interface Props {
  pokemon: {
    id: number;
    name: string;
    img: string;
    url: string;
  };
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  return (
    <Card hoverable clickable>
      <Card.Body
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Image src={img} alt={name} width="100%" height={140} />
      </Card.Body>
      <Card.Footer css={{ backgroundColor: theme.colors.accents2 }}>
        <Row wrap="wrap" justify="space-between">
          <Text transform="capitalize" weight="bold">
            {name}
          </Text>
          <Text># {id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
