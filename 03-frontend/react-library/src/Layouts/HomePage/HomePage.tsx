import { Carousel } from "./Components/Carousel";
import { ExploreTopBooks } from "./Components/ExploreTopBooks";
import { Heros } from "./Components/Heroes";
import { LibraryServices } from "./Components/LibraryServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
