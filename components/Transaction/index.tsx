import React from "react";
import {
  GetTransactions_transactions_burns,
  GetTransactions_transactions_mints,
  GetTransactions_transactions_swaps,
} from "../../queries/__generated__/GetTransactions";
import moment from "moment";
import { convertToInternationalCurrencySystem } from "../../utils";

// Interface Prop for transaction
interface TransactionProp {
  txAddress: string;
  mints: (GetTransactions_transactions_mints | null)[];
  burns: (GetTransactions_transactions_burns | null)[];
  swaps: (GetTransactions_transactions_swaps | null)[];
  timestamp: string;
  option: string;
}

// Transaction Component
const Transaction: React.FC<TransactionProp> = ({
  txAddress,
  swaps,
  mints,
  burns,
  timestamp,
  option,
}) => {
  // Render transaction type to see what array represents each transaction
  const renderTransactionType = swaps?.length
    ? "Swap"
    : mints?.length
    ? "Mint"
    : burns?.length
    ? "Burnt"
    : "";

  // Render amount usd based on type
  const renderTokenAmountUSD =
    option === "Swap"
      ? swaps?.[0]?.amountUSD || 0
      : option === "Mint"
      ? mints?.[0]?.amountUSD || 0
      : option === "Burnt"
      ? burns?.[0]?.amountUSD || 0
      : 0;

  return (
    <tr
      className={
        "border-b border-uniswap-bg-400 hover:opacity-75 cursor-pointer"
      }
      onClick={() =>
        window.open(`https://etherscan.io/tx/${txAddress}`, "_blank")
      }
    >
      <td>
        <div className={"text-left py-6 flex items-center"}>
          <h1
            className={
              "ml-5 font-semibold underline text-blue-300 max-w-4xl overflow-x-hidden text-ellipsis whitespace-nowrap"
            }
          >
            {`https://etherscan.io/tx/${txAddress}`}
          </h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>{renderTransactionType}</h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>
            {"$"}
            {convertToInternationalCurrencySystem(
              parseInt(renderTokenAmountUSD)
            )}
          </h1>
        </div>
      </td>
      <td>
        <div className={"text-right py-6"}>
          <h1>{moment(parseInt(timestamp) * 1000).format("L")}</h1>
        </div>
      </td>
    </tr>
  );
};

export default Transaction;
