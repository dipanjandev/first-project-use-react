import type { Dispatch, SetStateAction } from "react";
import type { PlayersTypes } from "../../Types/Types";
import PlayerCard from "./PlayerCard";

interface iAvailableProps {
  usePlayer: PlayersTypes[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ usePlayer, coin, setCoin }: iAvailableProps) => {
  // console.log("Players from Available Players", usePlayer);
  // console.log(coin, setCoin, "from available");

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {usePlayer.map((player: PlayersTypes, ind: number) => {
        return (
          <PlayerCard key={ind} player={player} coin={coin} setCoin={setCoin} />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
