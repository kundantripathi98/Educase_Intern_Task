import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
    const containerRef = useRef(null);

    useGSAP(()=>{
        let tl = gsap.timeline();

        tl.from(".char",{
            opacity: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power3.inOut"
        })
        tl.to(containerRef.current, {
            y: "-=100%",
            duration: 1,
            ease: "power3.inOut"
        })
    }, []);

  return (
    <div ref={containerRef} className="absolute w-full h-[100dvh] bg-black flex justify-center items-center">
      <h1 className="text-white text-[4.5vw] max-md:text-[12.5vw] tracking-[0.4vw] capitalize tit">
        {
            "loading...".split("").map((elem, index)=>(
                <span key={index} className="capitalize inline-block char">{elem}</span>
            ))
        }
      </h1>
    </div>
  );
};

export default Loader;