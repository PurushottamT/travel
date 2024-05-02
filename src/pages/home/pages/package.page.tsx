"use client";
import axiosInstance from "../../config/axios.config";
import PackageComponent from "../components/package.component";
import { useEffect, useCallback, useState } from "react";

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

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}

const Packages = () => {
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
  }, [detail]);
  return (
    <>
      <div className="container mx-auto w-3/4">
        <h2 className="mt-14 text-center text-3xl font-bold">Packages</h2>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {detail.map(
            (data, index) =>
              index < 3 && (
                <PackageComponent
                  key={index}
                  image={`http://localhost:8000/public/mainImage/${data.image}`}
                  title={data.name}
                  description={limit(data.description, 350)}
                  link={`packages/` + data.slug}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Packages;
