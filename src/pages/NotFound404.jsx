import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  const glitchRef = useRef(null);

  useEffect(() => {
    const glitchText = glitchRef.current;

    // GSAP glitch timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(glitchText, {
      x: -5,
      y: -2,
      color: "#f472b6", // pink
      duration: 0.05,
    })
      .to(glitchText, {
        x: 5,
        y: 2,
        color: "#60a5fa", // blue
        duration: 0.05,
      })
      .to(glitchText, {
        x: 0,
        y: 0,
        color: "#fff",
        duration: 0.05,
      });

    return () => tl.kill(); // clean up on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <h1
        ref={glitchRef}
        className="text-[10rem] font-extrabold relative select-none"
      >
        404
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4 mb-6 text-center">
        Well, this page took a coffee break ☕ — and forgot to come back!
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300"
      >
        ← Back to Reality
      </Link>
    </div>
  );
};

export default NotFound404;
