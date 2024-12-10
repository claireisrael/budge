import React from 'react';

function Dashboard() {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold">Total Income</h2>
          <p className="text-2xl">$5,000</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold">Total Expenses</h2>
          <p className="text-2xl">$3,200</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold">Remaining Balance</h2>
          <p className="text-2xl">$1,800</p>
        </div>
      </div>
      {/* Expense Chart */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4">Expense Summary</h2>
        <div>
          {/* Add a chart library like Chart.js here */}
          <p>Chart placeholder</p>
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Description</th>
              <th className="text-left p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">2024-12-05</td>
              <td className="p-2">Grocery</td>
              <td className="p-2">-$50</td>
            </tr>
            <tr>
              <td className="p-2">2024-12-04</td>
              <td className="p-2">Salary</td>
              <td className="p-2">$2,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
