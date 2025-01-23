"use client";

import React from "react";
import { useParams } from "next/navigation";

const Mainboard = () => {
  //나중에 메인보드 하위 컴포넌트 내용으로 옮길 예정(use client 하위로 옮기기)
  const params = useParams();
  const clubId = params?.id;

  return (
    <div>
      <div>{clubId}</div>
    </div>
  );
};

export default Mainboard;
