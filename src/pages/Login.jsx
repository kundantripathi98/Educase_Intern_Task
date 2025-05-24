import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap" ;

const Login = () => {

   useGSAP(()=>{
    gsap.from(".login",{
      y: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power3.inOut"
    })
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("popx-user"));
    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }
    if (savedUser.email === email && savedUser.password === password) {
      navigate("/profile");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 login">
          Sign in to your PopX account
        </h2>
        <p className="text-gray-600 mt-2 login">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-6 login">
          <label className="text-sm font-semibold text-[#6C25FF] absolute bg-white left-[4%] top-[-10%] pl-[0.4vw] pr-[2vw]">Email address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-3 border rounded-[0.7vw] w-full border-[#CBCBCB] outline-[#CBCBCB]"
          />
        </div>

        <div className="mt-4 login">
          <label className="text-sm font-semibold text-[#6C25FF] absolute bg-white left-[4%] top-[-10%] pl-[0.4vw] pr-[2vw]">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-3 border rounded-[0.7vw] w-full border-[#CBCBCB] outline-[#CBCBCB]"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-violet-600 text-white font-semibold py-3 rounded-lg login"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
