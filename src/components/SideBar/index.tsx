import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Button } from "../Button";

import "./styles.scss";

// interface SideBarProps {
//   buttonClickCallback: (args: any) => void;
// }

export function SideBar() {
  const { selectedGenreId, setSelectedGenreId } = useContext(MoviesContext);

  const { genres } = useContext(MoviesContext);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
