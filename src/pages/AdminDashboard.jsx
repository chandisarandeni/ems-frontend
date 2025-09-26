import React, { useState } from "react";
import { FiUsers, FiHome, FiLayers, FiLogOut } from "react-icons/fi";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [employees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      dept: "Development",
      role: "Employee",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      dept: "QA",
      role: "Admin",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      dept: "HR",
      role: "Employee",
    },
    {
      id: 4,
      name: "Sara Williams",
      email: "sara@example.com",
      dept: "Finance",
      role: "Employee",
    },
  ]);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="text-3xl font-bold p-6 border-b border-blue-500">
          EMS Admin
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded cursor-pointer">
              <FiHome /> <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded cursor-pointer">
              <FiUsers /> <span>Employees</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded cursor-pointer">
              <FiLayers /> <span>Departments</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded cursor-pointer">
              <FiLogOut /> <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin!</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Employee Table */}
        <div className="bg-white shadow rounded-lg overflow-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{emp.id}</td>
                  <td className="px-4 py-2">{emp.name}</td>
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.dept}</td>
                  <td className="px-4 py-2">{emp.role}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination (Sample) */}
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            3
          </button>
        </div>
      </div>
    </div>
  );
}
