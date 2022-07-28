import React from "react";
import Title from "../../components/Title";
import AllPoolsTable from "../../components/AllPoolsTable";
import { GetAllPools_pools } from "../../queries/__generated__/GetAllPools";

// Interface type for AllPools
interface AllPoolsProp {
  pools: GetAllPools_pools[] | never[];
}

// This is All Pool view
const AllPools: React.FC<AllPoolsProp> = ({ pools }) => {
  return (
    <div className={"pt-10 md:pt-20"}>
      <Title value={"All Pool"} />
      <AllPoolsTable pools={pools} />
    </div>
  );
};

export default AllPools;
