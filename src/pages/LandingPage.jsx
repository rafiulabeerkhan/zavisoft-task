import Categories from "../components/common/Categories";
import NewDrops from "../components/common/NewDrops";
import Reviews from "../components/common/Reviews";
import doItRight from "../assets/MainContent/doItRight.svg";
import nikeAirMax from "../assets/MainContent/NikeAirMax.svg";

export default function LandingPage() {
  return (
    <>
      <div className="mt-8 flex justify-center">
        <img src={doItRight} alt="Do It Right" />
      </div>
      <div className="flex justify-center">
        <img src={nikeAirMax} alt="NikeAirMax" />
      </div>          
      <NewDrops />
      <Categories />
      <Reviews />
    </>
  );
}