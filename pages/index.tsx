import React, { useEffect } from "react";
import Head from "next/head";
import PoolsWatchList from "../views/PoolsWatchlist";
import AllPools from "../views/AllPools";
import { GET_ALL_POOLS } from "../queries";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { GetAllPools_pools } from "../queries/__generated__/GetAllPools";

// HalHome Component
const HalHome = () => {
  // useQuery to get all uniswap pools data
  const { loading, error, data: poolsData } = useQuery(GET_ALL_POOLS);

  // If loading return Loading component
  if (loading) return <Loading />;

  // If error return Error component
  if (error) return <Error />;

  // pools with generated types
  const pools: GetAllPools_pools[] | never[] = poolsData?.pools || [];

  // Otherwise return results
  return (
    <div
      className={
        "min-h-screen w-full bg-uniswap-bg-500 px-5 pb-12 md:px-28 pb-28"
      }
    >
      <Head>
        <title>Hal - Home</title>
        <link rel="icon" href="/HAL-svg.svg" type="image/x-icon" />
      </Head>
      <PoolsWatchList pools={pools} />
      <AllPools pools={pools} />
    </div>
  );
};

export default HalHome;
