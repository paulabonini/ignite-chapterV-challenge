import { memo } from "react";
import { Star, Clock } from "react-feather";

import "./styles.scss";

interface MovieCardProps {
  movieCard: {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
  };
}

function MovieCardComponente({ movieCard }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={movieCard.poster} alt={movieCard.title} />

      <div>
        <div className="movie-info">
          <span>{movieCard.title}</span>
          <div className="meta">
            <div>
              <Star /> {movieCard.rating}
            </div>

            <div>
              <Clock /> {movieCard.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponente, (prevProps, nextProps) => {
  return Object.is(prevProps.movieCard, nextProps.movieCard);
});
