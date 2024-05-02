"use client";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BiSad } from "react-icons/bi";
import Overview from "./overview.page";
import Itinerary from "./itinerary.page";
import Include from "./include.page";
import GetPackage from "../interface/package.detail";

const Packages = (props: { detail: GetPackage }) => {
  if (!props.detail) {
    return <></>;
  }

  return (
    <>
      <div className="relative">
        <Image
          src={`http://localhost:8000/public/mainImage/${props.detail?.image}`}
          alt="Banner Image"
          objectFit="cover"
          width={1000}
          height={2000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-60 bg-blue-900">
          <h2 className="text-white text-4xl font-extrabold uppercase text-center mb-20">
            {props.detail?.name}
          </h2>
        </div>
      </div>

      <Overview detail={props.detail as GetPackage} />
      <Itinerary />
      <div className="container mx-auto w-3/4 p-3 mt-11 bg-primaryColor text-white rounded-md">
        <div className="sm:flex sm:justify-evenly sm:items-center">
          <BiSad className="text-5xl mr-5" />
          <div className="flex flex-col sm:flex-row">
            <h3 className="text-xl text-center sm:text-left">Not Satisfied?</h3>
            <h4>
              Are you interested in planning a custom trip now? It only takes
              2-5 minutes!
            </h4>
          </div>
          <div>
            <button className="bg-white text-black border-2 rounded-md p-2">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
      <Include />
    </>
  );
};

export default Packages;
