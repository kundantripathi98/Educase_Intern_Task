import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
    const containerRef = useRef(null);

    useEffect(()=>{
        gsap.to()
    }, []);

  return (
    <div ref={containerRef} className="absolute w-full h-[100dvh] bg-black">
      loader
    </div>
  );
};

export default Loader;