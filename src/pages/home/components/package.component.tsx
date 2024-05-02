import Image from "next/image";
import Link from "next/link";

const PackageComponent = (props: {
  image: string;
  title: string | undefined;
  description: string | undefined;
  link: string;
}) => {
  return (
    <>
      <div className="mt-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow">
        <a href={props.link}>
          <Image
            className="rounded-t-lg"
            src={props.image}
            alt=""
            width={365}
            height={100}
            style={{ height: 267 + "px" }}
          />
        </a>
        <div className="p-5">
          <a href={props.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">{props.description}</p>
          <Link
            href={props.link}
            className="inline-flex items-center rounded-lg bg-primaryColor px-3 py-2 text-center text-sm font-medium text-white hover:bg-primaryColor focus:outline-none focus:ring-4 focus:ring-blue-300 "
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
      </div>
    </>
  );
};
export default PackageComponent;
