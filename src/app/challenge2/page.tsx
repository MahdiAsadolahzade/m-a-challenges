"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [mode, setMode] = useState<"dark" | "light">("light");


  useEffect(() => {
    const savedMode = localStorage.getItem("Mode") as "dark" | "light" | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);


  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

    }
    localStorage.setItem("Mode", mode); 
  }, [mode]);

  const handleAction = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <button
        className="button "
        onClick={handleAction}
      >
        {mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Page;