import { gql } from "@apollo/client";

export const GET_ALL_POOLS = gql`
  query GetAllPools {
    pools(first: 100) {
      id
      createdAtTimestamp
      createdAtBlockNumber
      token0 {
        id
        symbol
        name
        decimals
        totalSupply
        volume
        volumeUSD
        untrackedVolumeUSD
        feesUSD
        txCount
        poolCount
        totalValueLocked
        totalValueLockedUSD
        totalValueLockedUSDUntracked
        derivedETH
      }
      token1 {
        id
        symbol
        name
        decimals
        totalSupply
        volume
        volumeUSD
        untrackedVolumeUSD
        feesUSD
        txCount
        poolCount
        totalValueLocked
        totalValueLockedUSD
        totalValueLockedUSDUntracked
        derivedETH
      }
      feeTier
      liquidity
      sqrtPrice
      feeGrowthGlobal0X128
      feeGrowthGlobal1X128
      token0Price
      token1Price
      tick
      observationIndex
      volumeToken0
      volumeToken1
      volumeUSD
      untrackedVolumeUSD
      feesUSD
      txCount
      collectedFeesToken0
      collectedFeesToken1
      collectedFeesUSD
      totalValueLockedToken0
      totalValueLockedToken1
      totalValueLockedETH
      totalValueLockedUSD
      totalValueLockedUSDUntracked
      liquidityProviderCount
    }
  }
`;
