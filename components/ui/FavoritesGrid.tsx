import { FC } from "react";
import Link from "next/link";
import { Grid, Card } from "@nextui-org/react";
import { PRIMARY_IMAGE_URL } from "@utils/constants";

interface Prop {
  pokemonsFavs: number[];
}

const FavoritesGrid: FC<Prop> = ({ pokemonsFavs }) => {
  return (
    <Grid.Container gap={4}>
      {pokemonsFavs.map((id) => (
        <Grid xs={12} sm={6} md={3} xl={1} key={id}>
          <Link href={`/pokemon/${id}`} passHref>
            <Card
              hoverable
              clickable
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Body>
                <Card.Image
                  src={`${PRIMARY_IMAGE_URL}${id}.svg`}
                  width={150}
                  height={150}
                />
              </Card.Body>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavoritesGrid;
