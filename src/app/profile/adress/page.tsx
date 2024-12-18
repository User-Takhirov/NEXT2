import Link from "next/link";
import React from "react";
import { Metadata } from "next";
interface dataType {
  id: number;
  name: string;
  username?: string;
  email: string;
}
type Params = Promise<{ id: string[] }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: dataType = await res.json();
  const metadata: Metadata = {
    title: data.name,
    description: data.email,
  };
  return metadata;
}

const Adress = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();

  return (
    <>
      <div className="flex  flex-wrap gap-[20px]">
        {res?.map((item: dataType) => (
          <div key={item.id} className="shadow-2xl p-[20px] ">
            <Link href={`/profile/adress/${item.id}`}>
              <h1>{item?.name}</h1>
              <h3>{item.email}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Adress;
