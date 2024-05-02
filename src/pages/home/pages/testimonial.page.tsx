import { TbMessages } from "react-icons/tb";
import { MdLuggage } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { BiTime } from "react-icons/bi";
import location from "../../../assets/images/location.png";
import avatar from "../../../assets/images/avatar.png";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-12 bg-[url('/images/upper-mustang.jpg')]">
      <div className="mt-12 text-center text-3xl font-bold uppercase text-white">
        <TbMessages className="mr-3" />
        Customer Reviews
      </div>
      <p className="w-4/5 lg:w-2/5 text-center text-white">
        I should be incapable of drawing a single stroke at the present moment;
        and yet I feel that I never was a greater artist than now. When, while
        the lovely valley teems with vapour around me, and the meridian sun
        strikes the upper surface of the impenetrable foliage of my trees, and
        but a fewer stray gleams steal into the inner.
      </p>
      <div className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt="location"
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
        />
        <p className="text-white">Pasang Sherpa, Country</p>
      </div>
      <div className="flex flex-wrap justify-center space-y-6 lg:space-y-0 lg:space-x-12 lg:flex-row">
        <div className="mb-10 flex flex-col items-center space-y-3">
          <MdLuggage className="text-center text-5xl lg:text-7xl text-white" />
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-white">
            1000.0+
          </h3>
          <p className="text-center text-lg lg:text-xl font-semibold text-gray-400">
            Travelers Joined Us
          </p>
        </div>
        <div className="mb-10 flex flex-col items-center space-y-3">
          <Image
            src={location}
            alt="location"
            className="w-[3rem] h-[3rem] lg:w-[4.5rem] lg:h-[4.5rem]"
          />
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-white">
            100.0+
          </h3>
          <p className="text-center text-lg lg:text-xl font-semibold text-gray-400">
            Beautiful Destinations
          </p>
        </div>
        <div className="mb-10 flex flex-col items-center space-y-3">
          <FaMountainSun className="text-center text-5xl lg:text-7xl text-white" />
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-white">
            50.0+
          </h3>
          <p className="text-center text-lg lg:text-xl font-semibold text-gray-400">
            Mountains
          </p>
        </div>
        <div className="mb-10 flex flex-col items-center space-y-3">
          <BiTime className="text-center text-5xl lg:text-7xl text-white" />
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-white">
            24/7
          </h3>
          <p className="text-center text-lg lg:text-xl font-semibold text-gray-400">
            Every Hour Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
