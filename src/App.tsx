import { Suspense } from "react";
import { Baner } from "./components/Baner";
import { Navbar } from "./components/NavBar";
import Players from "./components/Players/Players";
import type { PlayersTypes } from "./Types/Types";

const playersfatch = async (): Promise<PlayersTypes[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // console.log(playersPromise);
  const playersPromise = playersfatch();

  return (
    <>
      <Navbar />
      <Baner />
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
