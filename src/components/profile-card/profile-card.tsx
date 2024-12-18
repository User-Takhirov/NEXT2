import { dataType } from "@/app/profile/adress/page";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ item }: { item: dataType }) {
  const metadata: Metadata = {
    title: "loremsdfsdjykfgtsdyjfgs",
    description: item.email,
  };
  return metadata;
}
export const ProfileCard = ({ item }: { item: dataType }) => {
  return (
    <div className="flex flex-col shadow-2xl p-[20px] rounded-[10px]">
      <h1>{item.name}</h1>
      <h3>{item.email}</h3>
    </div>
  );
};
