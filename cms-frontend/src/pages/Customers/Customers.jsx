import { useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  console.log("Customers", customers);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [editId, setEditId] = useState(null);

  // ---------------- FETCH ----------------
  const fetchCustomers = async () => {
    const res = await api.get("/customers");
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // ---------------- INPUT CHANGE ----------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- CREATE ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await api.put(`/customers/${editId}`, form);
      toast.success("Customer updated successfully!");
      setEditId(null);
    } else {
      await api.post("/customers", form);
      toast.success("Customer created successfully!");
    }

    setForm({ name: "", email: "", phone: "", company: "" });
    fetchCustomers();
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete?")) {
        await api.delete(`/customers/${id}`);
        toast.success("Customer deleted successfully!");
        fetchCustomers();
      }
    } catch (error) {
      toast.error(
        "Delete failed!",
        error.response?.data?.message || error.message,
      );
    }
  };

  // ---------------- EDIT ----------------
  const handleEdit = (customer) => {
    setForm({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      company: customer.company,
    });
    setEditId(customer._id);
  };

  // ---------------- SEARCH FILTER ----------------
  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>

        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 rounded"
          />

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          title={editId ? "Update existing customer" : "Create new customer"}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editId ? "Update Customer" : "Add Customer"}
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.company}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(c)}
                    title="Edit this customer"
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(c._id)}
                    title="Delete this customer"
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
