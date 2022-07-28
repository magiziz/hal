import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POOL_TRANSACTIONS } from "../../queries";
import Transaction from "../Transaction";
import Dropdown from "../Dropdown";
import { Spinner } from "@chakra-ui/react";
import { GetTransactions_transactions } from "../../queries/__generated__/GetTransactions";
import { ArrowLeft, ArrowRight } from "react-feather";

// Transcations Table component
const TransactionsTable = () => {
  // useQuery - Fetch all transactions
  const {
    loading,
    error,
    data: transactionsData,
  } = useQuery(GET_POOL_TRANSACTIONS);

  // total (the number that needs to be sliced with an array which begins with 0 and adds up 10)
  const [total, setTotal] = useState<number>(0);

  // clicked (amount times we have clicked on the arrows)
  const [clicked, setClicked] = useState<number>(1);

  // useState active overlay
  const [activeOverlay, setActiveOverlay] = useState(false);

  // useState option setOption
  const [option, setOption] = useState("Swap");

  // Check if transactions are empty and assign variable
  const transactions = transactionsData?.transactions || [];

  // Use the array based on the option that you selected via useState (React-Hook)
  const filteredTransactions = transactions.filter(
    (transaction: GetTransactions_transactions) =>
      option === "Swap"
        ? transaction.swaps.length
        : option === "Mint"
        ? transaction.mints.length
        : transaction.burns.length
  );

  // total sliced pages (number of total pages we can have when we slice the array)
  const totalSlicedPages: number = Math.ceil(filteredTransactions?.length / 10);

  // pools array which is sliced with total - (useState hook)
  const slicedPools: GetTransactions_transactions[] =
    filteredTransactions.slice(total, total + 10);

  return (
    <div
      className={`text-white mt-8 lg:mt-24 ${
        !error && !loading ? "overflow-x-auto" : ""
      }`}
    >
      {loading ? (
        <div className={"flex items-center justify-center"}>
          <Spinner thickness="4px" speed="0.65s" size="xl" />
        </div>
      ) : error ? (
        <div className={"flex items-center justify-center"}>
          <h1>Something went wrong!</h1>
        </div>
      ) : (
        <>
          <div className={"flex items-center"}>
            <h1 className={"text-3xl font-semibold"}>Transactions</h1>
            <Dropdown
              activeOverlay={activeOverlay}
              setActiveOverlay={setActiveOverlay}
              className={"ml-3"}
              option={option}
              setOption={(opt: string) => {
                setOption(opt);
                setClicked(1);
                setTotal(0);
              }}
            />
          </div>

          <div
            className={
              "flex flex-col rounded-xl w-full border border-cyan-900 px-3 pt-3 mt-4 text-white bg-uniswap-bg-600 min-w-[500px]"
            }
          >
            <table className={"w-full table-fixed"}>
              <thead>
                <tr className={"border-b border-uniswap-bg-500"}>
                  <th className={"text-left pb-5"}>Link to Etherscan</th>
                  <th className={"text-right pb-5 "}>TX Type</th>
                  <th className={"text-right pb-5 "}>Token Amount (USD)</th>
                  <th className={"text-right pb-5 "}>Timestamp</th>
                </tr>
              </thead>

              <tbody>
                {slicedPools.map(
                  ({
                    id,
                    swaps,
                    mints,
                    burns,
                    timestamp,
                  }: GetTransactions_transactions) => (
                    <Transaction
                      key={id}
                      txAddress={id}
                      swaps={swaps}
                      mints={mints}
                      burns={burns}
                      timestamp={timestamp}
                      option={option}
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
                  setTotal(total - 10);
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
                  setTotal(total + 10);
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionsTable;
