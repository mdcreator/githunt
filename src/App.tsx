import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="w-[650px] m-10 mx-auto h-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
