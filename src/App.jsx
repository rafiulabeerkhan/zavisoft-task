import Navbar from "./components/layout/Navbar";

import doItRight from "../src/assets/MainContent/doItRight.svg";
import nikeAirMax from "../src/assets/MainContent/NIkeAirMax.svg";
import NewDrops from "./components/common/NewDrops";

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      {/* <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 bg-[#FAFAFA] mt-5"> */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 mt-5 space-y-8">
        <div className="mt-8 justify-center items-center">
          <img src={doItRight} alt="Do It Right" />
        </div>
        <div>
          <img src={nikeAirMax} alt="NikeAirMax" />
        </div>
        <NewDrops />
      </main>
    </div>
  );
}

export default App;
