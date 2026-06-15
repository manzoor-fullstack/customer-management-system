import { NavLink } from "react-router-dom";
import { FiHome, FiUsers, } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-full p-4">

      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        CMS Panel
      </h1>

      <nav className="space-y-2">

        <NavLink to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
          <FiHome /> Dashboard
        </NavLink>

        <NavLink to="/customers" className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
          <FiUsers /> Customers
        </NavLink>

        {/* <NavLink to="/add-customer" className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
          <FiPlus /> Add Customer
        </NavLink> */}

        {/* <NavLink to="/settings" className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
          <FiSettings /> Settings
        </NavLink> */}

      </nav>
    </div>
  );
}