import Image from "next/image";

const CardsComponent = (props: {
  image: string;
  link: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex mt-3 flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
      <a href={props.link}>
        <Image
          className="rounded-t-lg"
          src={props.image}
          alt=""
          width={350}
          height={100}
          style={{ height: 190 + "px" }}
        />
      </a>
      <div className="flex flex-col justify-start p-6">
        <a href={props.link}>
          <h5 className="mb-2 text-xl font-medium text-neutral-800">
            {props.title}
          </h5>
        </a>
        <p className="mb-4 text-base text-neutral-600">{props.description}</p>
        <p className="text-xs text-neutral-500">Last updated 3 mins ago</p>
      </div>
    </div>
  );
};

export default CardsComponent;
