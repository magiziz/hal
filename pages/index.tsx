import React, { useEffect } from "react";
import Head from "next/head";
import PoolsWatchList from "../views/PoolsWatchlist";
import AllPools from "../views/AllPools";
import { GET_ALL_POOLS } from "../client/queries";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";

// HalHome Component
const HalHome = () => {
  // useEffect to fetch all data from uniswap
  const { loading, error, data: poolsData } = useQuery(GET_ALL_POOLS);

  if (loading) return <Loading />;

  if (error) return <Error />;

  console.log(poolsData);

  return (
    <div className={"min-h-screen w-full px-28 pb-28 bg-uniswap-bg-500"}>
      <Head>
        <title>Hal - Home</title>
      </Head>
      <PoolsWatchList />
      <AllPools />
    </div>
  );
};

export default HalHome;
