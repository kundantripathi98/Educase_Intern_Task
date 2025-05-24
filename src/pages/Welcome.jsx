// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap" ;

const Welcome = () => {
  useGSAP(()=>{
    gsap.from(".doc",{
      y: "100%",
      opacity: 0,
      duration: 1,
      delay: 3.4,
      stagger: 0.2,
      ease: "power3.inOut"
    })
  }, []);
//   const navigate = useNavigate();

  return (
    <>
    <Loader/>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
      <div className="w-[375px] min-h-screen bg-white flex flex-col justify-end gap-[2.5vw] px-6 py-10">
        <div className="doc">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>


        <div className="flex flex-col gap-[1.5vw] doc">
          <Link to="/signup">
            <button className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg cursor-pointer">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="w-full bg-violet-200 text-black font-semibold py-3 rounded-lg cursor-pointer">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Welcome;
