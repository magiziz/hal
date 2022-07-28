import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import WatchListTable from "../../components/WatchListTable";
import { GetAllPools_pools } from "../../queries/__generated__/GetAllPools";

// Interface type for Pools Watch List
interface PoolsWatchListProp {
  pools: GetAllPools_pools[];
}

// Pool Watch List view
const PoolsWatchList: React.FC<PoolsWatchListProp> = ({ pools }) => {
  // Watchlist react hook
  const [watchList, setWatchList] = useState<GetAllPools_pools[]>([]);

  // Watchlist localstorage
  let poolLocalStorage: any =
    typeof window !== "undefined"
      ? localStorage.getItem("watchlist_pools")
      : [];

  // useEffect get all wathclist pools
  useEffect(() => {
    // Get all pools saved on localStorage e.g watchList
    const storagePool = JSON.parse(poolLocalStorage);

    // Filter pools that are included in the watchlist (We can get real time data by doing this)
    const setFilteredPoolsWithWatchlist =
      storagePool && storagePool.length
        ? pools.filter((pool: GetAllPools_pools) =>
            storagePool.some(
              (poolStorage: GetAllPools_pools) => poolStorage.id === pool.id
            )
          )
        : [];

    // Set Watch List
    setWatchList(setFilteredPoolsWithWatchlist);
  }, [poolLocalStorage]);

  return (
    <div className={"pt-12 md:pt-20"}>
      <Title value={"Pool Watchlist"} />
      <WatchListTable watchList={watchList} />
    </div>
  );
};

export default PoolsWatchList;
