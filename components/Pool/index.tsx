import React from "react";
import TokenLogos from "../TokenLogos";
import BigNumber from "bignumber.js";
import { convertToInternationalCurrencySystem } from "../../utils";
import { useRouter } from "next/router";

// Token Pool interface
interface PoolProp {
  id: string;
  token0: any;
  token1: any;
  txCount: string;
  totalValueLockedUSD: string;
  volumeUSD: string;
}

// This is Pool component
const Pool: React.FC<PoolProp> = ({
  id,
  token0,
  token1,
  txCount,
  totalValueLockedUSD,
  volumeUSD,
}) => {
  // Next JS - Router
  const router = useRouter();

  return (
    <tr
      className={
        "border-b border-uniswap-bg-400 hover:opacity-75 cursor-pointer"
      }
      onClick={() => router.push(`/pools/${id}`)}
    >
      <td>
        <div className={"text-left py-6 flex items-center"}>
          <TokenLogos
            token0={token0.symbol.toLowerCase()}
            token1={token1.symbol.toLowerCase()}
          />
          <h1 className={"ml-5 font-semibold"}>
            {token0.symbol}/{token1.symbol}
          </h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>{txCount}</h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>
            {"$"}
            {convertToInternationalCurrencySystem(
              parseInt(totalValueLockedUSD)
            )}
          </h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>
            {"$"}
            {convertToInternationalCurrencySystem(parseInt(volumeUSD))}
          </h1>
        </div>
      </td>
    </tr>
  );
};

export default Pool;
