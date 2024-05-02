import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaMountain,
  FaCalendar,
} from "react-icons/fa";
import { BiSolidHotel } from "react-icons/bi";
import { GiMeal, GiVibratingShield } from "react-icons/gi";
import { TbTrekking } from "react-icons/tb";
import GetPackage from "../interface/package.detail";
const Overview = ({ detail }: { detail: GetPackage }) => {
  return (
    <>
      <section className="mt-11 container mx-auto w-3/4">
        <div>
          <h2 className="text-3xl mb-11 font-extrabold text-primaryColor">
            Overview
          </h2>
          <p className="text-justify leading-loose">{detail?.description}</p>
          <div className="bg-gray-100 mt-11 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              <div className="flex">
                <FaPlaneArrival className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Arrival City</span>
                  <h2 className="font-semibold text-xl">Kathmandu, Nepal</h2>
                </div>
              </div>
              <div className="flex">
                <FaPlaneDeparture className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Departure City</span>
                  <h2 className="font-semibold text-xl">Kathmandu, Nepal</h2>
                </div>
              </div>
              <div className="flex">
                <BiSolidHotel className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Lodging</span>
                  <h2 className="font-semibold text-xl">Tea House</h2>
                </div>
              </div>
              <div className="flex">
                <GiMeal className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Meals</span>
                  <h2 className="font-semibold text-xl">B, L & D</h2>
                </div>
              </div>
              <div className="flex">
                <GiVibratingShield className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Trip Difficulty</span>
                  <h2 className="font-semibold text-xl">
                    {detail?.activities}
                  </h2>
                </div>
              </div>
              <div className="flex">
                <FaMountain className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Altitude</span>
                  <h2 className="font-semibold text-xl">{detail?.altitude}</h2>
                </div>
              </div>
              <div className="flex">
                <FaCalendar className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Trip Length</span>
                  <h2 className="font-semibold text-xl">
                    {detail?.tripLength}
                  </h2>
                </div>
              </div>
              <div className="flex">
                <TbTrekking className="text-7xl text-secondaryColor" />
                <div className="ml-4 mt-3">
                  <span className="font-bold text-2xl">Activities</span>
                  <h2 className="font-semibold text-xl">
                    {detail?.travelStyle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
