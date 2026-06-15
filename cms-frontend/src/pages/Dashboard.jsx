import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
    const [customers, setCustomers] = useState([]);

    // ---------------- FETCH ----------------
  const fetchCustomers = async () => {
    const res = await api.get("/customers");
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-gray-500">Total Customers</h3>
          <p className="text-2xl font-bold">{customers.length}</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-gray-500">Active Users</h3>
          <p className="text-2xl font-bold">{customers.length}</p>
        </div>

        {/* <div className="bg-white p-5 rounded shadow">
          <h3 className="text-gray-500">New Leads</h3>
          <p className="text-2xl font-bold">32</p>
        </div> */}

      </div>

    </div>
  );
}