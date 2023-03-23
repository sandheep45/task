import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex items-center relative py-5 px-5 shadow-xl bg-white">
      <h1 className="text-[#ff5877] font-black text-xl">Cloud Inventory</h1>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff5877] absolute right-5 -bottom-5 shadow-teal-900">
        <IoMdAdd className="scale-[1.3] text-white" />
      </span>
    </header>
  );
};

export default Header;
