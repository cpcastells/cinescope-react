import React from "react";
import Slider from "react-slick";
import { MediaData } from "../../types";
import LargeCard from "../LargeCard/LargeCard";

interface ListProps {
  mediaList: MediaData[];
  isMovies: boolean;
}

const List = ({ mediaList, isMovies }: ListProps): React.ReactElement => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 5,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1516,
        settings: {
          slidesToShow: 4,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 794,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          centerPadding: "45px",
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center pb-[25px]">
      <Slider {...settings}>
        {mediaList.map((media) => (
          <LargeCard media={media} isMovies={isMovies} key={media.id} />
        ))}
      </Slider>
    </section>
  );
};

export default List;
