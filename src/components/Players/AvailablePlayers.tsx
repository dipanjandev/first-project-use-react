import type { PlayersTypes } from "../../Types/Types";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ usePlayer }: { usePlayer: PlayersTypes[] }) => {
  // console.log("Players from Available Players", usePlayer);

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {usePlayer.map((player: PlayersTypes, ind: number) => {
        return <PlayerCard key={ind} player={player} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
