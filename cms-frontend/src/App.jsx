import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers/Customers";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="/customers"
          element={
            <DashboardLayout>
              <Customers />
            </DashboardLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}