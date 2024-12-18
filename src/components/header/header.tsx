import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="bg-black flex gap-[50px] mx-auto text-center justify-center">
        <div>
          <Link className="text-green-400" href={"/"}>
            Home
          </Link>
        </div>
        <div>
          <Link className="text-blue-600" href={"/about"}>
            About
          </Link>
        </div>
        <div>
          <Link className="text-pink-700" href={"/profile/adress"}>
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};
