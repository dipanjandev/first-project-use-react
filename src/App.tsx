import { Suspense } from "react";
import { Baner } from "./components/baner";
import { Navbar } from "./components/navbar";
import Players from "./components/Players/players";
import type { PlayersTypes } from "./types/types";

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
