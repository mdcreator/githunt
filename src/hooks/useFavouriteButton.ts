import React, { useState } from "react";
import { useActions } from "../hooks/actions";

const useFavouriteButton = (url: string) => {
  const { addFavourite, removeFavourite } = useActions();

  const [isFav, setIsFav] = useState(false);

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(url);
    setIsFav(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(url);
    setIsFav(false);
  };

  return { isFav, addToFavourite, removeFromFavourite };
};

export default useFavouriteButton;
