import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { GetAllPools_pools } from "../../queries/__generated__/GetAllPools";
import Pool from "../Pool";

// Interface prop watchlist
interface WatchListProp {
  watchList: GetAllPools_pools[];
}

// Watch List Table component
// This is the table of watch list
const WatchListTable: React.FC<WatchListProp> = ({ watchList }) => {
  // useState (Hooks)
  // total (the number that needs to be sliced with an array which begins with 0 and adds up 6)
  const [total, setTotal] = useState<number>(0);

  // clicked (amount times we have clicked on the arrows)
  const [clicked, setClicked] = useState<number>(1);

  // total sliced pages (number of total pages we can have when we slice the array)
  const totalSlicedPages: number = Math.ceil(watchList?.length / 4);

  // pools array which is sliced with total - (useState hook)
  const slicedPools: GetAllPools_pools[] | never[] = watchList.slice(
    total,
    total + 4
  );

  return (
    <div
      className={
        "flex flex-col rounded-xl w-full border border-cyan-900 px-3 pt-3 mt-4 text-white bg-uniswap-bg-600 overflow-x-auto"
      }
    >
      {watchList.length ? (
        <>
          <table className={"w-full table-fixed min-w-[500px]"}>
            <thead>
              <tr className={"border-b border-uniswap-bg-400"}>
                <th className={"text-left pb-5"}>Pool</th>
                <th className={"text-right pb-5 "}>TX Count</th>
                <th className={"text-right pb-5"}>TVL (USD)</th>
                <th className={"text-right pb-5 "}>Volume (USD)</th>
              </tr>
            </thead>

            <tbody>
              {slicedPools.map(
                ({
                  id,
                  token0,
                  token1,
                  txCount,
                  totalValueLockedUSD,
                  volumeUSD,
                }: GetAllPools_pools) => (
                  <Pool
                    key={id}
                    id={id}
                    token0={token0}
                    token1={token1}
                    txCount={txCount}
                    totalValueLockedUSD={totalValueLockedUSD}
                    volumeUSD={volumeUSD}
                  />
                )
              )}
            </tbody>
          </table>
          <div className={"w-full flex items-center justify-center py-5"}>
            <ArrowLeft
              size={20}
              className={`mr-2 ${
                clicked === 1 ? "opacity-50 pointer-events-none" : ""
              } cursor-pointer`}
              onClick={() => {
                setClicked(clicked - 1);
                setTotal(total - 4);
              }}
            />
            Page {clicked} of {totalSlicedPages}
            <ArrowRight
              size={20}
              className={`ml-2 ${
                clicked === totalSlicedPages
                  ? "opacity-50 pointer-events-none"
                  : ""
              } cursor-pointer`}
              onClick={() => {
                setClicked(clicked + 1);
                setTotal(total + 4);
              }}
            />
          </div>
        </>
      ) : (
        <h1 className={"pb-3"}>Saved pools will appear here</h1>
      )}
    </div>
  );
};

export default WatchListTable;
