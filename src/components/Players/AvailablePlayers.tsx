import type { PlayersTypes } from "../../Types/Types";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ usePlayer }) => {
  console.log("Players from Available Players", usePlayer);

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {usePlayer.map((player: PlayersTypes) => {
        return <PlayerCard player={player} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
