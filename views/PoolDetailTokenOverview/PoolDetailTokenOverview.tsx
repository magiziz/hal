import React from "react";
import TokenLogos from "../../components/TokenLogos";
import { Smile, Star } from "react-feather";
import { GetAllPools_pools } from "../../queries/__generated__/GetAllPools";
import Image from "../../components/Image";
import { convertToInternationalCurrencySystem } from "../../utils";
import TransactionsTable from "../../components/TransactionsTable";

// Interface Prop PoolDetailTokenProp
interface PoolDetailTokenProp {
  poolDetails: GetAllPools_pools | null;
  addPoolToWatchList: () => void;
  isAlreadyInWatchlist: boolean;
}

// Pool Detail Token Overview component
const PoolDetailTokenOverview: React.FC<PoolDetailTokenProp> = ({
  poolDetails,
  addPoolToWatchList,
  isAlreadyInWatchlist,
}) => {
  return poolDetails ? (
    <div>
      <div
        className={
          "w-full lg:flex items-center justify-between mt-11 lg:mt-20 text-white"
        }
      >
        <div className={"flex items-center"}>
          <TokenLogos
            token0={poolDetails.token0.symbol.toLowerCase()}
            token1={poolDetails.token1.symbol.toLowerCase()}
            className={
              "flex w-16 h-16 items-center justify-center bg-uniswap-bg-600 border-none"
            }
            imageClassname={"w-16 h-16"}
          />
          <h1 className={"ml-6 font-medium text-4xl"}>
            {poolDetails.token0.symbol}/{poolDetails.token1.symbol}
          </h1>
        </div>

        <div
          className={
            "mt-9 lg:mt-0 flex items-center justify-center p-4 rounded bg-uniswap-bg-300 cursor-pointer hover:opacity-75 transition-all"
          }
          onClick={addPoolToWatchList}
        >
          {!isAlreadyInWatchlist ? (
            <Star className={"mr-2"} />
          ) : (
            <Smile className={"mr-2"} />
          )}
          <span>
            {isAlreadyInWatchlist
              ? "This pool is already in watchlist. Click to remove!"
              : "Add to Watchlist"}{" "}
          </span>
        </div>
      </div>

      <div
        className={
          "flex justify-between bg-uniswap-bg-300 lg:max-w-md mt-5 lg:mt-16 rounded p-5"
        }
      >
        <div className={"text-white"}>
          <h1 className={"text-uniswap-bg-200 font-semibold text-1xl"}>
            Tokens Value (USD)
          </h1>

          <div className={"mt-5 flex items-center"}>
            <Image
              src={`https://assets.coincap.io/assets/icons/${poolDetails.token0.symbol.toLowerCase()}@2x.png`}
              className={
                "border border-white relative z-5 flex items-center justify-center"
              }
            />

            <h1 className={"ml-3 font-medium text-md"}>
              <span className={"mr-1"}>{poolDetails.token0.symbol}</span>
              {"->"}
              <span className={"ml-1"}>{"$"}</span>
              {convertToInternationalCurrencySystem(
                parseInt(poolDetails.token0.volumeUSD)
              )}
            </h1>
          </div>

          <div className={"mt-5 flex items-center"}>
            <Image
              src={`https://assets.coincap.io/assets/icons/${poolDetails.token1.symbol.toLowerCase()}@2x.png`}
              className={
                "border border-white relative z-5 flex items-center justify-center"
              }
            />

            <h1 className={"ml-3 font-medium text-md"}>
              <span className={"mr-1"}>{poolDetails.token1.symbol}</span>
              {"->"}
              <span className={"ml-1"}>{"$"}</span>
              {convertToInternationalCurrencySystem(
                parseInt(poolDetails.token1.volumeUSD)
              )}
            </h1>
          </div>
        </div>
        <div className={"text-white"}>
          <h1 className={"text-uniswap-bg-200 font-semibold text-1xl"}>
            TX Count
          </h1>
          <div className={"mt-6 flex items-center"}>
            <h1 className={"ml-3 font-medium text-md"}>
              {poolDetails.token0.txCount}
            </h1>
          </div>
          <div className={"mt-6 flex items-center"}>
            <h1 className={"ml-3 font-medium text-md"}>
              {poolDetails.token1.txCount}
            </h1>
          </div>
        </div>
      </div>

      <TransactionsTable />
    </div>
  ) : null;
};

export default PoolDetailTokenOverview;
