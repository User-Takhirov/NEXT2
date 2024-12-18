import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { ProfileCard } from "@/components/profile-card/profile-card";
export interface dataType {
  id: number;
  name: string;
  username?: string;
  email: string;
}

const Adress = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();

  return (
    <>
      <div className="flex  flex-wrap gap-[20px]">
        {res?.map((item: dataType) => (
          <div key={item.id}>
            <Link href={`/profile/adress/${item.id}`}>
              <ProfileCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Adress;
