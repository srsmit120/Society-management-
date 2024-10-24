import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Society Management</span>
      </div>
      <div className="flex items-center">
        <span className="text-lg">Username</span>
      </div>
    </nav>
  );
};

export default Navbar;
