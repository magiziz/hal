import React from "react";

interface TitleProp {
  value: string;
}

const Title: React.FC<TitleProp> = ({ value }) => {
  return <h1 className={"text-3xl font-semibold text-white"}>{value}</h1>;
};

export default Title;
