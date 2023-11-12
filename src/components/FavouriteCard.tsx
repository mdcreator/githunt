import useFavouriteButton from "../hooks/useFavouriteButton";
import { FavouriteCardProps } from "../models/models";

const FavouriteCard: React.FC<FavouriteCardProps> = ({ url }) => {
  const { removeFromFavourite } = useFavouriteButton(url);

  return (
    <div className="border border-teal-800 py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-teal-400 text-white transition-all">
      <li key={url}>
        <a href={url} target="_blank">
          {url}
        </a>
        <div>
          <button
            className="py-2 px-4 mt-2 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

export default FavouriteCard;
