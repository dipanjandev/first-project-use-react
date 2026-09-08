import type { PlayersTypes } from "../../Types/Types";
import { FaUser } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";

const PlayerCard = ({ player }: { player: PlayersTypes }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top Section: Media & Header */}
      <div>
        {/* Image Container with fixed ratio */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[16/10] mb-4">
          <img
            src={player.playerPicture}
            alt={player.playerName}
            className="w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle Role Badge */}
          <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
            {player.playerType}
          </span>
        </div>

        {/* Player Name */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm">
            <FaUser />
          </div>
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            {player.playerName}
          </h2>
        </div>

        {/* Style Highlights */}
        <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <GiCricketBat className="text-sm" /> Batting
            </span>
            <span className="font-semibold text-gray-800 text-xs bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-lg">
              {player.battingStyle}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <MdSportsCricket className="text-sm" /> Bowling
            </span>
            <span className="font-semibold text-gray-800 text-xs bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-lg">
              {player.bowlingStyle}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Pricing & Action */}
      <div className="border-t border-gray-100 mt-5 pt-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
            Price
          </p>
          <p className="text-base font-extrabold text-gray-900">
            {player.PlayerPrice}
          </p>
        </div>

        <button className="bg-[#E7FE29] hover:bg-[#d8ed22] text-black font-semibold text-sm px-4 py-2 rounded-xl border border-black/10 shadow-xs hover:shadow transition-all duration-200 active:scale-95 cursor-pointer">
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
