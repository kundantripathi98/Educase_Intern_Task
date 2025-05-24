import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap" ;

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
      }));
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b pb-3 profile">
          Admin Profile
        </h2>

        <div className="flex items-center gap-4 mt-6 profile">
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11l6.293-6.293a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414L11 15H7v-4l2-2z"
                />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 profile">{user.fullName}</h3>
            <p className="text-sm text-gray-600 profile">{user.email}</p>
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
