import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import { useParams } from "next/navigation";

interface Included {
  title: string;
  description: string;
}

interface Excluded {
  title: string;
  description: string;
}
const Include = () => {
  const [include, setInclude] = useState<Included[]>();
  const [exclude, setExclude] = useState<Excluded[]>();

  const params = useParams();

  const getIncluded = useCallback(async () => {
    try {
      const include = await axiosInstance.get<Included[]>(
        "v1/getInclude/" + params?.slug
      );
      const exclude = await axiosInstance.get<Excluded[]>(
        "v1/getExclude/" + params?.slug
      );
      setExclude(exclude.data);
      setInclude(include.data);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    getIncluded();
  }, []);
  return (
    <>
      <section className="mt-20 container mx-auto w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-primaryColor">
              Include
            </h2>
            <div className="flex flex-col">
              {include?.map((data, index) => (
                <div className="flex items-center" key={index}>
                  <TiTick className="text-green-700 mr-3 text-xl" />
                  <p className="leading-loose">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-primaryColor">
              Exclude
            </h2>
            <div className="flex flex-col">
              {exclude?.map((data, index) => (
                <div className="flex items-center" key={index}>
                  <RxCross2 className="text-red-700 inline-block mr-3 text-xl" />
                  <p className="inline-block leading-loose">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Include;
