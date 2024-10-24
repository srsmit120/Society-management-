import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700">
        Welcome to your dashboard! Here you can find an overview of your
        activity, statistics, and other relevant information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Card 1</h2>
          <p>Some relevant information here.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Card 2</h2>
          <p>Some relevant information here.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Card 3</h2>
          <p>Some relevant information here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
