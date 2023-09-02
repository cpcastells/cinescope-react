import React from "react";

interface SwitchButtonProps {
  onMoviesClick: () => void;
  onSeriesClick: () => void;
  isMovies: boolean;
  isSeries: boolean;
}

const SwitchButton = ({
  onMoviesClick,
  onSeriesClick,
  isMovies,
  isSeries,
}: SwitchButtonProps): React.ReactElement => {
  return (
    <div className="flex items-center justify-center h-10 w-[257px] relative font-semibold text-white text-xl rounded-full border border-solid border-cyan-300 bg-transparent">
      <div
        className={`${
          isMovies
            ? "w-[130.5px] -left-[2px]"
            : "w-[130.5px] translate-x-[63px] "
        } transition-transform duration-200 ease-in-out h-10 absolute z-10  rounded-full bg-gradient-to-l from-cyan-300 to-indigo-500`}
      ></div>
      <button
        className={`${
          isMovies ? "text-black " : "text-white"
        } w-1/2 z-20  font-semibold`}
        onClick={onMoviesClick}
      >
        Movies
      </button>
      <button
        className={`${
          isSeries ? "text-black " : "text-white"
        } w-1/2 z-30  font-semibold`}
        onClick={onSeriesClick}
      >
        Series
      </button>
    </div>
  );
};

export default SwitchButton;
