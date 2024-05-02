"use client";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import Image from "next/image";
import Link from "next/link";
import GetPackage from "../interface/package.detail";

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}

function EvenHero({ data }: { data: GetPackage }) {
  let urlLink = `packages/` + data.slug;
  return (
    <>
      <div className="border-t-4 border-blue-600 pt-12 border-l-4 pl-12">
        <Image
          src={`http://localhost:8000/public/mainImage/${data.image}`}
          width={466}
          height={100}
          alt={data.name}
          className=""
          style={{ height: 300 + "px" }}
        />
      </div>
      <div className="border-b-4 border-blue-600 pb-12 border-r-4 pr-12">
        <h2 className="text-3xl mb-8 text-ce">{data.name}</h2>
        <p>{limit(data.description, 900)}</p>
        <Link
          href={urlLink}
          className="inline-flex items-center rounded-lg bg-primaryColor mt-3  px-3 py-2 text-center text-sm font-medium text-white hover:bg-primaryColor focus:outline-none focus:ring-4 focus:ring-blue-300 "
        >
          Read more
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule={"evenodd"}
            ></path>
          </svg>
        </Link>
      </div>
    </>
  );
}

function OddHero({ data }: { data: GetPackage }) {
  let urlLink = `packages/` + data.slug;
  return (
    <>
      <div className="border-t-4 border-blue-600 pt-12 border-l-4 pl-12">
        <h2 className="text-3xl mb-8 text-ce">{data.name}</h2>
        <p>{limit(data.description, 900)}</p>
        <Link
          href={urlLink}
          className="inline-flex items-center rounded-lg bg-primaryColor mt-3  px-3 py-2 text-center text-sm font-medium text-white hover:bg-primaryColor focus:outline-none focus:ring-4 focus:ring-blue-300 "
        >
          Read more
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule={"evenodd"}
            ></path>
          </svg>
        </Link>
      </div>
      <div className="border-b-4 border-blue-600 pb-12 border-r-4 pr-12">
        <Image
          src={`http://localhost:8000/public/mainImage/${data.image}`}
          width={466}
          height={100}
          alt={data.name}
          className=""
          style={{ height: 300 + "px" }}
        />
      </div>
    </>
  );
}

const Section = () => {
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
      <div className="container mx-auto my-24 pt-24 relative w-3/4">
        {detail.map((data, index) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 mb-14 gap-4"
            key={index}
          >
            {index % 2 === 0 && <EvenHero data={data} />}
            {index % 2 !== 0 && <OddHero data={data} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
