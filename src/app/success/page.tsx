import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center space-y-4">
      <div className="w-[100vw] text-center">
        <p className="text-primary">
          This is a page for showing you loggin correctly and your token was
          saved in your local storage !
        </p>
      </div>
      <div className="w-[100vw] text-center">
        <Link href={"/challenge3"}>
          <button className="button">Back to challenge 3</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
