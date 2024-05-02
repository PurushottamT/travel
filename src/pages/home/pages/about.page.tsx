"use client";
import { BsPentagonFill } from "react-icons/bs";
import trekImg from "../../../assets/images/trek1.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../config/axios.config";
import Link from "next/link";

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
function FrontOfCard(props: { image: string; title: string }) {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <Image
        src={`http://localhost:8000/public/mainImage/${props?.image}`}
        alt={props?.title}
        width={318}
        height={500}
      />
    </div>
  );
}

function BackOfCard(props: {
  link: string;
  title: string;
  description: string;
}) {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white transition-all z-10 card-back">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-primaryColor text-2xl font-bold">
          {" "}
          {props.title}{" "}
        </h2>
        <p className="text-black text-center">
          {limit(props.description, 100)}
        </p>
        <Link
          href={`/packages/${props.link}`}
          className="text-blue-600 text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
interface GetPackage {
  activities: string;
  altitude: string;
  category_id: number;
  description: string;
  group_size: string;
  image: string;
  name: string;
  parent_id: string;
  parent_order: string;
  price: string;
  slug: string;
  status: string;
  travel_style: string;
  trip_length: string;
}

const AboutPage = () => {
  const [detail, setDetail] = useState<GetPackage[]>([]);
  const getPackages = useCallback(async () => {
    try {
      const response = await axiosInstance.get<GetPackage[]>("/v1/overview/");
      console.log(response);
      setDetail(response.data);
    } catch (err) {
      throw err;
    }
  }, []);
  useEffect(() => {
    getPackages();
  }, []);
  return (
    <>
      <div className="container mx-auto sm:w-full md:w-3/4 mt-10 relative">
        <h2 className="text-center text-secondaryColor uppercase font-bold text-2xl sm:text-3xl lg:text-4xl">
          Find Your Perfect Trek!
        </h2>
        <h2 className="text-center text-primaryColor font-semibold text-2xl">
          Created by Mountains Lover, For Mountains Lover
        </h2>
        <BsPentagonFill className="text-amber-400 rotate-45 absolute top-0 right-20 opacity-60" />
        <BsPentagonFill className="text-amber-400 rotate-45 absolute top-10 right-5" />
        <BsPentagonFill className="text-amber-400 rotate-45 absolute top-20 right-36 opacity-30" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 overflow-auto">
          <div className="relative sm:mt-4 md:mt-8 lg:mt-12">
            <div className="flex flex-col">
              <div className="relative flex items-center w-full border border-gray-700 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="peer h-full w-3/4 outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
                <button className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">
                  Search
                </button>
              </div>
              <div className="overflow-y-scroll h-[30rem]">
                {detail.map((data, index) => (
                  <div
                    key={index}
                    className="relative w-80 h-48 rounded-2xl mt-5 text-white overflow-hidden cursor-pointer transition-all duration-700 card"
                  >
                    <FrontOfCard image={data.image} title={data.name} />
                    <BackOfCard
                      description={data.description}
                      title={data.name}
                      link={data.slug}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:block h-[85%] absolute left-1/2 min-h-[1em] w-0.5 self-stretch bg-neutral-500 opacity-100"></div>
          <div className="flex flex-col justify-center items-center">
            <Image src={trekImg} alt="Trekking Clip Art" />
            <p className="text-center mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="p-3 sm:p-4 bg-blue-600 rounded-lg text-white w-28 sm:w-32 lg:w-36 text-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
