import React from "react";
import Title from "../../components/Title";
import AllPoolsTable from "../../components/AllPoolsTable";

// This is All Pools view
const AllPools = () => {
  return (
    <div className={"pt-20"}>
      <Title value={"Pools Watchlist"} />
      <AllPoolsTable />
    </div>
  );
};

export default AllPools;
