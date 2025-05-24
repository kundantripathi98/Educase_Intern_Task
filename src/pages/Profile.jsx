import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap" ;
import icon from "../assets/camIcon.svg"

const Profile = () => {
  useGSAP(()=>{
    gsap.from(".profile",{
      y: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power3.inOut"
    })
  }, []);

  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    company: "ABC-Comapny",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("popx-user"));
    if (saved) {
      setUser((prev) => ({
        ...prev,
        fullName: saved.fullName || prev.fullName,
        email: saved.email || prev.email,
        company: saved.company || prev.company,
      }));
    }
  }, []);

  return (
    <div className="h-fit flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[100dvh] bg-white p-4">
        <h2 className="text-lg font-[400] text-gray-900 border-b pb-3 profile">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 mt-6 profile">
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-[-2%] p-1">
              <img src={icon} alt="" />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 profile">{user.fullName}</h3>
            <p className="text-sm text-gray-600 profile">{user.email}</p>
            <p className="text-[0.9vw] max-md:text-[3.5vw] text-gray-300 profile">{user.company}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-6 leading-relaxed border-t pt-4 profile">
          {user.description}
        </p>
      </div>
    </div>
  );
};
export default Profile;
