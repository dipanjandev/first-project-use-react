// SelectedPlayers.tsx

import type { Dispatch, SetStateAction } from "react";
import type { PlayersTypes } from "../../Types/Types";
import { BiTrash } from "react-icons/bi";

interface iSelectedPlayerProps {
  selectedPlayers: PlayersTypes[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersTypes[]>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
}: iSelectedPlayerProps) => {
  const handleRemovePlayer = (player: PlayersTypes) => {
    const restPlayers = selectedPlayers.filter(
      (selectdplayer) => selectdplayer.playerName != player.playerName,
    );
    // console.log(restPlayers);
    setSelectedPlayers(restPlayers);
  };

  return (
    <div>
      Selected Players
      <div className="grid grid-cols-1 gap-7 mt-6">
        {selectedPlayers.map((player, ind: number) => {
          return (
            <div
              key={ind}
              className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl mb-4 p-6"
            >
              <div className="flex gap-2">
                <img
                  src={player.playerPicture}
                  alt=""
                  className="h-15 w-15 border-2 mr-5 border-gray-400 object-cover object-top rounded-md"
                />
                <div>
                  <h2 className="font-bold text-2xl">{player.playerName}</h2>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <span
                className="text-red-500 font-bold"
                onClick={() => handleRemovePlayer(player)}
              >
                <BiTrash />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedPlayers;
