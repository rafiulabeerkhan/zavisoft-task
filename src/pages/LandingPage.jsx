import Categories from "../components/common/Categories";
import NewDrops from "../components/common/NewDrops";
import Reviews from "../components/common/Reviews";
import doItRight from "../assets/MainContent/DoItRight.svg";
import nikeAirMax from "../assets/MainContent/NikeAirMax.svg";

export default function LandingPage() {
  return (
    <>
      <div className="mt-8 flex justify-center">
        <img src={doItRight} alt="Do It Right" loading="lazy" />
      </div>
      <div className="flex justify-center">
        <img src={nikeAirMax} alt="NikeAirMax" loading="lazy" />
      </div>
      <NewDrops />
      <Categories />
      <Reviews />
    </>
  );
}
