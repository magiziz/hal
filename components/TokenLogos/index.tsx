import React from "react";
import Image from "../Image";

// Token Logo Prop interface
interface TokenLogoProp {
  token0: string;
  token1: string;
  className?: string;
  imageClassname?: string;
}

// This is Token Logos component
const TokenLogos: React.FC<TokenLogoProp> = ({
  token0,
  token1,
  className,
  imageClassname,
}) => {
  return (
    <div className={"flex items-center"}>
      <Image
        src={`https://assets.coincap.io/assets/icons/${token0}@2x.png`}
        className={`border border-white relative z-5 ${className}`}
        imageClassname={imageClassname}
      />
      <Image
        src={`https://assets.coincap.io/assets/icons/${token1}@2x.png`}
        className={`-ml-3 border border-white ${className}`}
        imageClassname={imageClassname}
      />
    </div>
  );
};

export default TokenLogos;
