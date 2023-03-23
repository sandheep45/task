import { MdCloudDownload } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  BsFillCartFill,
  BsDatabaseDown,
  BsDatabaseFillDown,
} from "react-icons/bs";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center py-6 justify-between bg-gradient-to-b from-[#ff2c55] to-[#ff4e2d] w-20">
      <MdCloudDownload className="scale-[2.5] text-white" />

      <div className="flex flex-col flex-1 gap-10 items-center py-10">
        <CiMonitor className="scale-150 text-white" />
        <AiOutlineShoppingCart className="scale-150 text-white" />
        <BsDatabaseDown className="scale-150 text-white" />
        <IoSettingsOutline className="scale-150 text-white" />
      </div>

      <RiLogoutCircleRLine className="scale-150 text-white" />
    </div>
  );
};

export default SideBar;
