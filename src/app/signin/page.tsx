import Login from "@/components/login/Login";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Login />
    </div>
  );
};

export default page;
