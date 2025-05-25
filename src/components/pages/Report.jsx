import React from "react";
import Sidebar from "../Sidebar";
import { BarChart2, Trash2, Eye } from "lucide-react";
import { Download, Upload } from "lucide-react";
import { useState } from "react";

const Report = () => {
  const tableData = [
    { time: "17th May 22, 9:48 AM", type: "SMS", status: "SENDING" },
    {
      time: "16th May 22, 9:48 AM",
      type: "Whatsapp",
      status: "DELIVERED",
    },
    { time: "15th May 22, 9:48 AM", type: "SMS", status: "FAILED" },
    {
      time: "14th May 22, 9:48 AM",
      type: "SMS",
      status: "DELIVERED",
    },
    { time: "17th May 22, 9:48 AM", type: "SMS", status: "SENDING" },
    {
      time: "16th May 22, 9:48 AM",
      type: "Whatsapp",
      status: "DELIVERED",
    },
    { time: "15th May 22, 9:48 AM", type: "SMS", status: "FAILED" },
    {
      time: "14th May 22, 9:48 AM",
      type: "SMS",
      status: "DELIVERED",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const allSelected = selectedRows.length === tableData.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((_, index) => index));
    }
  };

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div className="flex h-screen p-4 bg-gray-50">
      <Sidebar />
      <div className="w-4/5 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Report</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button className="flex gap-2">
              Import <Download className="w-4" />
            </button>
            <button className="flex gap-2">
              Export <Upload className="w-4" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="w-1/3 mx-2 px-3 py-2 border border-gray-300 rounded text-sm w-full"
          />
          <div className="flex gap-2">
            <button>Filter</button>
            <button>Action</button>
          </div>
        </div>

        <table className="w-full text-sm text-left border border-collapse border-gray-200">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-200">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="w-4 h-4"
                  aria-label="Select all rows"
                />
              </th>
              <th className="px-4 py-2 border border-gray-200">Time</th>
              <th className="px-4 py-2 border border-gray-200">From</th>
              <th className="px-4 py-2 border border-gray-200">To</th>
              <th className="px-4 py-2 border border-gray-200">Type</th>
              <th className="px-4 py-2 border border-gray-200">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="px-4 py-4 border border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleRowSelect(index)}
                    className="w-4 h-4"
                    aria-label={`Select row ${index + 1}`}
                  />
                </td>
                <td className="px-4 py-2 border-t border-gray-200">
                  {item.time}
                </td>
                <td className="px-4 py-2 border-t border-gray-200">
                  +91 9876 543 210
                </td>

                <td className="px-4 py-2 border-t border-gray-200">
                  8801701653, +250 more
                </td>
                <td className="px-4 py-2 border-t border-gray-200">
                  {item.type}
                </td>
                <td className="px-4 py-2 border-t border-gray-200">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "DELIVERED"
                        ? "bg-green-100 text-green-700"
                        : item.status === "FAILED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-t border-gray-200 flex items-center justify-center gap-2">
                  <Trash2 className="text-red-500 cursor-pointer size-4" />
                  <Eye className="text-blue-500 cursor-pointer size-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
