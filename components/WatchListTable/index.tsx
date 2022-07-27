import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

// Watch List Table component
// This is the table of watch list
const WatchListTable = () => {
  return (
    <div
      className={
        "flex flex-col rounded-xl w-full border border-cyan-900 px-3 pt-3 mt-4 text-white"
      }
    >
      <table className={"w-full"}>
        <thead>
          <tr className={"border-b border-cyan-900"}>
            <th className={"text-left pb-5"}>Pool</th>
            <th className={"text-right pb-5 "}>TX Count</th>
            <th className={"text-right pb-5"}>TVL (USD)</th>
            <th className={"text-right pb-5 "}>Volume (USD)</th>
          </tr>
        </thead>

        <tbody>
          <tr
            className={
              "border-b border-cyan-900 hover:opacity-75 cursor-pointer"
            }
          >
            <td>
              <div className={"text-left py-6 "}>
                <h1>Pool #1</h1>
              </div>
            </td>
            <td>
              <div className={"text-right py-6"}>
                <h1>Pool #1</h1>
              </div>
            </td>
            <td>
              <div className={"text-right py-6 "}>
                <h1>Pool #1</h1>
              </div>
            </td>
            <td>
              <div className={"text-right py-6"}>
                <h1>Pool #1</h1>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={"w-full flex items-center justify-center py-4"}>
        <ArrowLeft size={20} className={"mr-2 opacity-50 cursor-pointer"} />{" "}
        Page 1 of 5 <ArrowRight size={20} className={"ml-2 cursor-pointer"} />
      </div>
    </div>
  );
};

export default WatchListTable;
