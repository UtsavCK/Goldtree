import Sidebar from "../Sidebar";
import Graph from "../../assets/graph.jpg";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full p-4 bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-4/5 p-6 overflow-y-auto bg-gray-50 h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Financial Dashboard
          </h1>
          <p className="text-gray-600">Overview of your financial position</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg text-gray-800">
                  Total Receivables
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-semibold text-green-600">
                    ₹23,48,764.00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Overdue:</span>
                  <span className="font-semibold text-red-600">
                    ₹21,33,454.62
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Current vs Overdue</span>
                  <span>52.4% Current</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${(2348764 / (2348764 + 2133454.62)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg text-gray-800">
                  Total Payables
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-semibold text-blue-600">
                    ₹31,74,41,096.91
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Overdue:</span>
                  <span className="font-semibold text-red-600">
                    ₹4,32,47,957.95
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Current vs Overdue</span>
                  <span>88.0% Current</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (317441096.91 / (317441096.91 + 43247957.95)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-lg text-gray-800">
                Cash Flow Analysis
              </h4>
            </div>

            <div className="flex flex-row p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl w-full gap-6">
              <div className="h-64 w-full mb-6">
                <img
                  src={Graph}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                  alt="Cash Flow Bar Chart"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
                <div className="flex-1 text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Incoming</p>
                  <p className="font-bold text-green-600">₹9,17,489.98</p>
                </div>
                <div className="flex-1 text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Outgoing</p>
                  <p className="font-bold text-red-600">₹13,33,396.81</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
