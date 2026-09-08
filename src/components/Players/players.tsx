import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import type { PlayersTypes } from "../../Types/Types";
import SelectedPlayers from "./SelectedPlayers";

interface playerProps {
  playersPromise: Promise<PlayersTypes[]>;
}

const Players = ({ playersPromise }: playerProps) => {
  //   console.log(playersPromise);
  const usePlayer = use(playersPromise);
  //   console.log("Players Log Test :", usePlayer);

  const [buttonType, setButtonType] = useState("available");
  // const buttonType = useState("available"); //this Button is only for upperline demo for check button type
  //   console.log(buttonType);
  const handalerSetButtonType = (type: "available" | "selected") => {
    //ekhane togole kora holo
    setButtonType(type);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 my-2">
        <h2 className="font-bold text-xl">
          {buttonType === "available"
            ? "AvailAble Players"
            : "Selected Players"}
        </h2>
        <div>
          <button
            onClick={() => handalerSetButtonType("available")}
            className={`btn ${buttonType === "available" ? "bg-[#E7FE29]" : ""} rounded-l-lg rounded-r-none`}
          >
            {" "}
            Available{" "}
          </button>
          <button
            onClick={() => handalerSetButtonType("selected")}
            className={`btn ${buttonType === "selected" ? "bg-[#E7FE29]" : ""} rounded-r-lg rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      <div>
        {buttonType === "available" ? (
          <AvailablePlayers usePlayer={usePlayer} />
        ) : (
          <SelectedPlayers />
        )}
      </div>
    </div>
  );
};

export default Players;
