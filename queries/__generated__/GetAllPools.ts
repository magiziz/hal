/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPools
// ====================================================

export interface GetAllPools_pools_token0 {
  __typename: "Token";
  id: string;
  symbol: string;
  name: string;
  decimals: any;
  totalSupply: any;
  volume: any;
  volumeUSD: any;
  untrackedVolumeUSD: any;
  feesUSD: any;
  txCount: any;
  poolCount: any;
  totalValueLocked: any;
  totalValueLockedUSD: any;
  totalValueLockedUSDUntracked: any;
  derivedETH: any;
}

export interface GetAllPools_pools_token1 {
  __typename: "Token";
  id: string;
  symbol: string;
  name: string;
  decimals: any;
  totalSupply: any;
  volume: any;
  volumeUSD: any;
  untrackedVolumeUSD: any;
  feesUSD: any;
  txCount: any;
  poolCount: any;
  totalValueLocked: any;
  totalValueLockedUSD: any;
  totalValueLockedUSDUntracked: any;
  derivedETH: any;
}

export interface GetAllPools_pools {
  __typename: "Pool";
  id: string;
  createdAtTimestamp: any;
  createdAtBlockNumber: any;
  token0: GetAllPools_pools_token0;
  token1: GetAllPools_pools_token1;
  feeTier: any;
  liquidity: any;
  sqrtPrice: any;
  feeGrowthGlobal0X128: any;
  feeGrowthGlobal1X128: any;
  token0Price: any;
  token1Price: any;
  tick: any | null;
  observationIndex: any;
  volumeToken0: any;
  volumeToken1: any;
  volumeUSD: any;
  untrackedVolumeUSD: any;
  feesUSD: any;
  txCount: any;
  collectedFeesToken0: any;
  collectedFeesToken1: any;
  collectedFeesUSD: any;
  totalValueLockedToken0: any;
  totalValueLockedToken1: any;
  totalValueLockedETH: any;
  totalValueLockedUSD: any;
  totalValueLockedUSDUntracked: any;
  liquidityProviderCount: any;
}

export interface GetAllPools {
  pools: GetAllPools_pools[];
}
