import React, { use } from "react";
import type { PlayersTypes } from "../../types/types";

interface playerProps {
  playersPromise: Promise<PlayersTypes[]>;
}

const Players = ({ playersPromise }: playerProps) => {
  //   console.log(playersPromise);
  const usePlayer = use(playersPromise);
  console.log("Players Log Test :", usePlayer);

  return <div></div>;
};

export default Players;
