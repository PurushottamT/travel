import { useCallback, useEffect, useState } from "react";
import ItineraryDetail from "../interface/itinerary.detail";
import axiosInstance from "../config/axios.config";
import { useParams } from "next/navigation";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState<ItineraryDetail[]>();
  const params = useParams();

  const getDetail = useCallback(async () => {
    try {
      const itinerary = await axiosInstance.get<ItineraryDetail[]>(
        "/v1/getItinerary/" + params?.slug
      );
      setItinerary(itinerary.data);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 mt-11 bg-white min-h-screen container w-3/4">
        <h2 className="text-3xl font-extrabold text-primaryColor">Itinerary</h2>
        <div className="grid divide-y divide-neutral-200 mt-8">
          {itinerary?.map((data, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    Day: {data.day} | {data.title}
                  </span>
                  <span className="transition-transform transform rotate-0 group-hover:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={"1.5"}
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {data.description}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Itinerary;
