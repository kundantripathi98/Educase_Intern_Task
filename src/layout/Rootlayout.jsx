import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className="overflow-hidden  font-[Rubik]">
      <Outlet/>
    </div>
  );
};

export default Rootlayout;