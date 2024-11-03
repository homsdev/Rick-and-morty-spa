//import "./App.css";
import { Typography } from "@mui/material";
import List from "./components/List";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <Typography variant="h1">Rick and Morty</Typography>
      <List></List>
    </>
  );
}

export default App;
