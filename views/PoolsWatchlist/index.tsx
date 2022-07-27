import React from "react";
import Title from "../../components/Title";
import WatchListTable from "../../components/WatchListTable";

// Pools Watch List view
const PoolsWatchList = () => {
  return (
    <div className={"pt-20"}>
      <Title value={"Pools Watchlist"} />
      <WatchListTable />
    </div>
  );
};

export default PoolsWatchList;
