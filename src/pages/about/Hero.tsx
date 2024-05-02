import Image from "next/image";
import aboutUs from "../../assets/images/about-us.jpg";

export default function Hero() {
  return (
    <>
      {/* <div className="h-[40rem] w-full bg-gradient-to-tl from-slate-300 to-primaryColor  absolute top-0"> */}
      <Image src={aboutUs} alt="Banner Image" className="absolute top-0 z-0" />
      <div className="uppercase relative bottom-0 top-52">
        <h2 className="uppercase text-center text-blue-100 font-extrabold text-4xl mb-2">
          Adventure Awaits You
        </h2>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="relative bottom-0 top-12"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L34.3,202.7C68.6,181,137,139,206,122.7C274.3,107,343,117,411,122.7C480,128,549,128,617,149.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,272C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      {/* <Image
        src={aboutUs}
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay relative"
        alt="Beautiful view of Mountain"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="relative bottom-0 top-[23rem]"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L34.3,202.7C68.6,181,137,139,206,122.7C274.3,107,343,117,411,122.7C480,128,549,128,617,149.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,272C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      {/* <img
          src="img/about-us.jpg"
          alt=""
          className="absolute h-full w-full object-cover mix-blend-overlay"
        /> */}
      {/* </div> */}
    </>
  );
}
