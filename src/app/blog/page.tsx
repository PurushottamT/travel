"use client";
import { useCallback, useEffect, useState } from "react";
import PackageComponent from "../../pages/home/components/package.component";
import axiosInstance from "../../pages/config/axios.config";

interface BlogInterface {
  title: string;
  description: string;
  image: string;
  slug: string;
}

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
export default function Home() {
  const [detail, setDetail] = useState<BlogInterface[]>([]);
  const blogDetail = useCallback(async () => {
    try {
      const response = await axiosInstance.get<BlogInterface[]>("v1/blog");
      console.log(response.data);
      setDetail(response.data);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    blogDetail();
  }, []);
  return (
    <>
      <div className="container mx-auto w-3/4">
        <h2 className="mt-14 text-center text-3xl font-bold">Blogs</h2>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {detail.map((data, index) => (
            <PackageComponent
              key={index}
              image={`http://localhost:8000/public/blog/${data.image}`}
              title={data.title}
              description={limit(data.description, 350)}
              link={`blog/` + data.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
