// import { FiBell, FiUser } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>

      <div className="flex items-center gap-4">

        {/* <FiBell className="text-xl cursor-pointer" /> */}

        {/* <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          <FiUser />
          <span className="text-sm">Admin</span>
        </div> */}

      </div>
    </div>
  );
}