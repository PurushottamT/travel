import Image from "next/image";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={banner}
          alt="Banner Image"
          className="w-full max-h-[90vh] z-0"
        />
        <div className="absolute inset-x-0 inset-y-1/2 top-1/3 text-center text-blue-700">
          <h2 className="inset-x-0 font-extrabold text-4xl mb-2">
            Explore The Mountains
          </h2>
          <button className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4 sm:px-6 bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">
            Explore Now
          </button>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-[7rem]"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          fillOpacity={1}
          d="M0,128L34.3,154.7C68.6,181,137,235,206,261.3C274.3,288,343,288,411,240C480,192,549,96,617,90.7C685.7,85,754,171,823,181.3C891.4,192,960,128,1029,101.3C1097.1,75,1166,85,1234,101.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Banner;
