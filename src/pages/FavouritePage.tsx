import { useAppSelector } from "../hooks/redux";

import FavouriteCard from "../components/FavouriteCard";

const FavouritePage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0)
    return <p className="text-center text-white">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen">
      <ul className="list-none">
        {favourites.map((f) => {
          return (
            <>
              <FavouriteCard key={f} url={f} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default FavouritePage;
