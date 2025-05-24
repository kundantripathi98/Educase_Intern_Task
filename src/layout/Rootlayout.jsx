import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className="overflow-hidden">
      <Outlet/>
    </div>
  );
};

export default Rootlayout;