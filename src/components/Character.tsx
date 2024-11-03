import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { CharacterType } from "../types";

function Character(character: CharacterType) {
  return (
    <Card sx={{ display: "flex", width: "400px", marginBottom: "15px" }}>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{ width: 151 }}
      />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Typography variant="subtitle1">{character.origin}</Typography>
      </CardContent>
    </Card>
  );
  //   return (
  //     <div>
  //       <Typography variant="h3">{character.name}</Typography>
  //       <img src={character.image} alt={character.name} width={300} />
  //       <p>{`Origin ${character.origin}`}</p>
  //     </div>
  //   );
}

export default Character;
