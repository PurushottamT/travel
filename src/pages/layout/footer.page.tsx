"use client";
import Image from "next/image";
import footer from "../../../public/footer.png";
import logo from "../../../public/sherpalogowhite.png";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import Link from "next/link";
import { AiOutlineRight, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

interface Cms {
  niceName: string;
  title: string;
  image: string;
  description: string;
}

interface Region {
  name: string;
  slug: string;
}

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
const Footer = () => {
  const [about, setAbout] = useState<Cms>();
  const [regionDet, setRegion] = useState<Region[]>();

  const getDetail = useCallback(async () => {
    const aboutDetail = await axiosInstance.get<Cms>("v1/about-us");
    const regionDetail = await axiosInstance.get<Region[]>("v1/region");
    setAbout(aboutDetail.data);
    setRegion(regionDetail.data);
  }, []);

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="relative">
        <Image
          src={footer}
          width={500}
          height={720}
          alt="footer Image"
          className="w-full relative z-0"
          style={{ height: 720 + "px" }}
        />
        <div className="h-[58rem] bg-primaryColor block sm:hidden"></div>
        <div className="z-10 absolute top-96">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mx-auto container text-white w-3/4">
            <div className="flex justify-center sm:justify-start lg:justify-center">
              <div>
                <Image
                  src={logo}
                  width={150}
                  height={100}
                  alt="Sherpa Travel Partner"
                  className="border-b-4 pb-2 border-cyan-50"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: limit(about?.description, 200),
                  }}
                  className="text-md text-justify my-4"
                ></div>
                <Link href={"/about-us"}>Learn More</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-2xl underline underline-offset-8 mb-7">
                Useful Links
              </h2>
              {regionDet?.map(
                (data, index) =>
                  index < 5 && (
                    <div
                      key={index}
                      className="flex my-2 text-white items-center"
                    >
                      <AiOutlineRight className="mr-2" />
                      <Link href={data.slug}>{data.name}</Link>
                    </div>
                  )
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-2xl underline underline-offset-8 mb-7">
                Our Contact
              </h2>
              <div className="flex my-2 text-white items-center">
                <AiFillPhone className="mr-2 text-2xl" />
                <h2>+977-9840341825, +977-9801849111</h2>
              </div>
              <div className="flex my-2 text-white items-center">
                <AiFillMail className="mr-2 text-2xl" />
                <h2>info@thesherpatravel.com sherpatravelpartner@gmail.com</h2>
              </div>
              <div className="flex my-2 text-white items-center">
                <FaLocationArrow className="mr-2 text-2xl" />
                <h2>Buddha, Kathmandu, Nepal</h2>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl underline underline-offset-8 font-bold text-center text-white md:text-2xl lg:text-left">
                  Get Our Newsletter
                </h1>
                <form className="mt-5 sm:mx-auto flex flex-col sm:max-w-lg lg:mx-0">
                  <input
                    className="block w-full px-5 py-3 mb-3 outline-none border rounded shadow-sm text-gray-300 border-[#3c3c3c] bg-[#121212] focus:border-white focus:ring-1 focus:ring-white"
                    type="email"
                    placeholder="Your e-mail"
                  />
                  <button className="w-28 mt-2.5 py-2 rounded shadow-sm focus:outline-none font-medium text-white bg-blue-600 sm:flex-shrink-0 sm:mt-0 sm:ml-5">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="flex space-x-5 text-white mt-8 text-4xl">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsYoutube />
              </div>
            </div>
          </div>
          <div className="container mt-3 mx-auto w-3/4">
            <hr />
            <div className="mt-3 text-white">
              Copyright © 2023 - Sherpa Travel Partner Pvt. Ltd. All Rights
              Reserved | Designed and Developed by Sherpa Travel Partner
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
