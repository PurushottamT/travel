"use client";
import { useParams } from "next/navigation";
import Packages from "../../../pages/singlePackage/package";
import GetPackage from "../../../pages/interface/package.detail";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../../pages/config/axios.config";

export default function Home() {
  const params = useParams();
  const [detail, setDetail] = useState<GetPackage>();
  const getPackages = useCallback(async () => {
    try {
      const response = await axiosInstance.get<GetPackage>(
        "v1/getOverview/" + params?.slug
      );
      console.log(response);
      setDetail(response.data);
    } catch (err) {
      throw err;
    }
  }, []);
  console.log(">>>>>>>", detail);
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <>
      <Packages detail={detail as GetPackage} />
    </>
  );
}
