import React from "react";
import Image from "next/image";

// This is a Loading component
const Loading = () => {
  return (
    <div
      className={
        "min-h-screen w-full bg-black flex items-center justify-center"
      }
    >
      <div className={"animate-bounce"}>
        <Image src={"/HAL-svg.svg"} width={200} height={200} />
      </div>
    </div>
  );
};

export default Loading;
