import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";

import '../styles/sidebar.scss'
import { MoviesContext } from "../hooks/MoviesContext";

export function SideBar() {
  const { selectedGenreId, handleClickButton, genres } = useContext(MoviesContext)

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
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
  )
}