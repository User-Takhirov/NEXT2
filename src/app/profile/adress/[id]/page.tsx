import React from "react";

const AdressDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>AdressDetail {id}</div>;
};

export default AdressDetail;
