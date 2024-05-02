import { BiDollarCircle } from "react-icons/bi";
import { BsHandThumbsUp, BsStar } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
const BookWithUs = () => {
  return (
    <div className="mt-10 flex h-full w-full flex-col justify-end bg-[url('/images/bookwithus.jpg')]">
      <div className="mx-auto my-16 lg:my-32 flex flex-col gap-5 p-6 lg:p-12 text-center">
        <h2 className="text-3xl font-bold text-white">Why Booking With Us?</h2>
        <p className="text-lg text-white">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Aenean eu leo quam. Pellentesque ornare sem lacinia.
        </p>

        <div className="mx-auto text-left">
          <div className="flex items-center gap-3">
            <BsHandThumbsUp className="text-3xl text-white" />
            <span className="text-xl text-white">
              All packages and activities are carefully picked by us.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BiDollarCircle className="text-3xl text-white" />
            <span className="text-xl text-white">
              Best price guarantee & Hassle-free!
            </span>
          </div>
          <div className="flex items-center gap-3">
            <GiSelfLove className="text-3xl text-white" />
            <span className="text-xl text-white">
              Trusted by more than 5000 customers
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BsStar className="text-3xl text-white" />
            <span className="text-xl text-white">
              We are an award-winning agency
            </span>
          </div>
        </div>
        <div className="mx-auto mt-5">
          <button className="text-semibold rounded-lg border-2 bg-white p-2 lg:p-3 text-lg text-primaryColor hover:bg-primaryColor hover:text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookWithUs;
