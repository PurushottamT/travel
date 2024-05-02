import Image from "next/image";
import aboutUs from "../../assets/images/about-us.jpg";
const Hero = () => {
  return (
    <>
      <div className="relative h-[30rem] w-full bg-gradient-to-tl from-slate-300 to-primaryColor">
        <Image
          src={aboutUs}
          alt="Beautiful Mountain view"
          objectFit="cover"
          className="mix-blend-overlay"
          style={{ height: 30 + "rem" }}
        />
      </div>
    </>
  );
};

export default Hero;
