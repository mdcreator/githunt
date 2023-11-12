import { IRepo } from "../models/models";

import useFavouriteButton from "../hooks/useFavouriteButton";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { isFav, addToFavourite, removeFromFavourite } = useFavouriteButton(
    repo.html_url
  );

  return (
    <div className="border border-teal-800 py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-teal-400 text-white transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold ">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFav && (
          <button
            className="py-2 px-4 bg-yellow-400 mr-2 mt-2 rounded hover:shadow-md transition-all"
            onClick={addToFavourite}
          >
            Add
          </button>
        )}

        {isFav && (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
