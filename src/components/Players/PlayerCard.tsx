import React from "react";
import type { PlayersTypes } from "../../Types/Types";
import { FaUser } from "react-icons/fa";

const PlayerCard = ({ player }: { player: PlayersTypes }) => {
  return (
    <div className="card bg-base-100 shadow-sm py-4">
      <figure>
        <img src={player.playerPicture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {" "}
          <FaUser />
          {player.playerName}
        </h2>
        <div className="flex justify-between items-center gap-3">
          <p>Player Type: {player.playerType}</p>
          <button className="btn">{player.battingStyle}</button>
        </div>
        <div className="divider" />
        <h2 className="font-semibold">Ratting</h2>
        <div className="flex justify-between items-center gap-3">
          <p>Bowling Style: {player.bowlingStyle}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <h2 className="font-bold text-xl text-blue-900">
            ${player.PlayerPrice}
          </h2>
          <button className="btn ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
