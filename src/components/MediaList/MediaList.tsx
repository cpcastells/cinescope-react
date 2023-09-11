import React, { useState } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import { MediaData } from "../../types";

interface MediaListProps {
  title: string;
  media: MediaData[];
}

const MediaList = ({ title }: MediaListProps): React.ReactElement => {
  const [isMovies, setIsMovies] = useState(true);
  const [isSeries, setIsSeries] = useState(false);

  const toggleMovies = () => {
    setIsMovies(true);
    setIsSeries(false);
  };

  const toggleSeries = () => {
    setIsSeries(true);
    setIsMovies(false);
  };

  return (
    <>
      <div className="w-3/4 flex flex-col justify-between items-center sm:flex-row">
        <h2 className="text-white text-2xl">{title}</h2>
        <SwitchButton
          isMovies={isMovies}
          isSeries={isSeries}
          onMoviesClick={toggleMovies}
          onSeriesClick={toggleSeries}
        />
      </div>
      <span className="w-3/4 inline-block h-[1px] bg-white -translate-y-4 "></span>
    </>
  );
};

export default MediaList;
