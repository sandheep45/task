import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
