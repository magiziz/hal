import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ArrowLeft, Smile, Star } from "react-feather";
import { useQuery } from "@apollo/client";
import { GET_POOL_DETAIL } from "../../queries";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { GetAllPools_pools } from "../../queries/__generated__/GetAllPools";
import PoolDetailTokenOverview from "../../views/PoolDetailTokenOverview/PoolDetailTokenOverview";

// Pool Detail Page Component
const PoolDetailPage = () => {
  // Watchlist react hook
  const [watchList, setWatchList] = useState([]);

  // Next JS - Router
  const router = useRouter();

  // Query Id (Pathname)
  const id = router.query.id || "(Unknown pool)";

  // Watchlist localstorage
  let poolLocalStorage: any =
    typeof window !== "undefined"
      ? localStorage.getItem("watchlist_pools")
      : [];

  // useEffect get all wathclist pools
  useEffect(() => {
    setWatchList(JSON.parse(poolLocalStorage));
  }, [poolLocalStorage]);

  // useQuery to get all uniswap pools data
  const {
    loading,
    error,
    data: poolDetailsData,
  } = useQuery(GET_POOL_DETAIL, { variables: { poolId: id } });

  // If loading return Loading component
  if (loading) return <Loading />;

  // poolDetails variable to see if we have pools information
  const poolDetails = poolDetailsData?.pool || null;

  // If error or if no poolDetails return Error component
  if (error || !poolDetails) return <Error />;

  const isAlreadyInWatchlist =
    watchList && watchList.length
      ? watchList.some((pool: GetAllPools_pools) => pool.id === poolDetails.id)
      : false;

  // Add Pool To WatchList
  const addPoolToWatchList = () => {
    let newLocalStorage = JSON.parse(poolLocalStorage);

    // If already in watch list remove it
    // Filter logic and set real time update
    if (isAlreadyInWatchlist) {
      newLocalStorage = newLocalStorage.filter(
        (pool: GetAllPools_pools) => pool.id !== poolDetails?.id
      );
      setWatchList(newLocalStorage);
      localStorage.setItem("watchlist_pools", JSON.stringify(newLocalStorage));
      return;
    }

    // If no pools watchlist create a pools watchlist and add it to localstorage
    // Else take existing array and add an object
    if (!poolLocalStorage) {
      newLocalStorage = [{ ...poolDetails }];
    } else if (poolLocalStorage && poolLocalStorage.length) {
      newLocalStorage = [...JSON.parse(poolLocalStorage), { ...poolDetails }];
    }

    // Set new localstorage
    if (newLocalStorage) {
      setWatchList(newLocalStorage);
      localStorage.setItem("watchlist_pools", JSON.stringify(newLocalStorage));
    }
  };

  return (
    <div
      className={
        "min-h-screen w-full bg-uniswap-bg-500 pt-8 px-8 pb-8 lg:pt-20 lg:px-28 lg:pb-28"
      }
    >
      <Head>
        <title>Hal Pool Info - {id}</title>
        <link rel="icon" href="/HAL-svg.svg" type="image/x-icon" />
      </Head>
      <h1
        className={"text-white flex items-center cursor-pointer font-medium"}
        onClick={() => router.push("/")}
      >
        <ArrowLeft size={20} className={"mr-2"} /> Back to Pools
      </h1>
      <PoolDetailTokenOverview
        poolDetails={poolDetails}
        addPoolToWatchList={addPoolToWatchList}
        isAlreadyInWatchlist={isAlreadyInWatchlist}
      />
    </div>
  );
};

export default PoolDetailPage;
