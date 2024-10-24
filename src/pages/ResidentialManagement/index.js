import React from "react";

const ResidentialManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Residential Management</h1>
      <p className="text-gray-700 mb-6">
        Manage your residential properties efficiently with our comprehensive
        management tools. Below are the key features available:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Property Listings</h2>
          <p>View and manage your property listings in one place.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Tenant Management</h2>
          <p>Keep track of tenant information, leases, and payments.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Maintenance Requests</h2>
          <p>Handle maintenance requests from tenants efficiently.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Financial Reports</h2>
          <p>Access detailed financial reports and analytics.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Communication Tools</h2>
          <p>Communicate with tenants directly through the platform.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-semibold text-lg">Compliance Tracking</h2>
          <p>Ensure all properties comply with local regulations.</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentialManagement;
