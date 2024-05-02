// import { useCallback, useEffect, useState } from "react";
// import axiosInstance from "./axios.config";

// interface GetPackage {
//   activities: string;
//   altitude: string;
//   category_id: number;
//   description: string;
//   group_size: string;
//   image: string;
//   name: string;
//   parent_id: string;
//   parent_order: string;
//   price: string;
//   slug: string;
//   status: string;
//   travel_style: string;
//   trip_length: string;
// }
// export function Packages() {
//   const [detail, setDetail] = useState<GetPackage[]>([]);
//   const getPackages = useCallback(async () => {
//     try {
//       const response = await axiosInstance.get<GetPackage[]>("/v1/overview/");
//       console.log(response);
//       setDetail(response.data);
//     } catch (err) {
//       throw err;
//     }
//   }, []);
//   useEffect(() => {
//     getPackages();
//   }, []);
// }
