import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  bg-[#F2F5FA]">
      <div className="h-[93vh] p-[30px] shadow-2xl  w-[300px] ">
        <Link href={"/profile/adress"}>Adress</Link>
        <br />
        <Link href={"/profile/settings"}>Settings</Link>
      </div>
      <div className="flex flex-col w-[100%]">
        <div className="shadow-2xl h-[30px] "></div>
        <div className="w-[900px] ml-[30px] mt-[30px]">{children}</div>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default ProfileLayout;
