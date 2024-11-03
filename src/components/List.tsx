import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Character from "./Character";
import { CharacterType } from "../types";

function List() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);

  const inlineStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "42px",
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await data.json();

      setCharacters(
        results.map(
          (entry): CharacterType => ({
            id: entry.id,
            name: entry.name,
            origin: entry.origin?.name,
            image: entry.image,
          })
        )
      );
      setLoading(false);
    }

    fetchData();
  }, [characters.length]);

  return (
    <>
      <Typography variant="h2">Characters</Typography>
      <div style={inlineStyle}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          ))
        )}
      </div>
    </>
  );
}

export default List;
