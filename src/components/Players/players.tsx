import { use } from "react";
import AvailablePlayers from "./AvailablePlayers";
import type { PlayersTypes } from "../../Types/Types";

interface playerProps {
  playersPromise: Promise<PlayersTypes[]>;
}

const Players = ({ playersPromise }: playerProps) => {
  //   console.log(playersPromise);
  const usePlayer = use(playersPromise);
  //   console.log("Players Log Test :", usePlayer);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 my-2">
        <h2 className="font-bold text-xl">AvailAble Players</h2>
        <div>
          <button className="btn btn-primary">Available</button>
          <button className="btn">Selected</button>
        </div>
      </div>
      <div>
        <AvailablePlayers usePlayer={usePlayer} />
      </div>
    </div>
  );
};

export default Players;
