import React from "react";
import { MediaData, MovieData, SerieData } from "../../types";
import pictureError from "/images/error-picture.svg";

interface LargeCardProps {
  media: MediaData;
  isMovies: boolean;
}

const LargeCard = ({ media, isMovies }: LargeCardProps): React.ReactElement => {
  const { poster_path, vote_average } = media;
  const formattedVoteAverage = Number(vote_average).toFixed(1);

  const title = isMovies
    ? (media as MovieData).title
    : (media as SerieData).name;

  const releaseOrFirstDate = isMovies
    ? (media as MovieData).release_date
    : (media as SerieData).first_air_date;

  return (
    <article className="w-[186px] text-white font-montserrat relative">
      <img
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w342/${poster_path}`
            : pictureError
        }
        alt={poster_path ? `poster of ${poster_path}` : `error image`}
        width={186}
        height={279}
        className="h-[279px] rounded-t-[5px] shadow-custom"
      />
      <div className="flex items-center justify-between bg-[#0F111D] p-[10px] rounded-b-[5px] shadow-custom">
        <div className="w-[115px]">
          <h3 className="font-semibold truncate">{title}</h3>
          <span className="text-sm">
            {releaseOrFirstDate ? releaseOrFirstDate : "-"}
          </span>
        </div>
        <span className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-solid border-cyan-300 bg-transparent">
          {formattedVoteAverage}
        </span>
      </div>
    </article>
  );
};

export default LargeCard;
