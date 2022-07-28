import { gql } from "@apollo/client";

const queryValues = `
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
      liquidityProviderCount`;

const queryValuesTransaction = `
  id
  blockNumber
  timestamp
  gasUsed
  gasPrice
  mints {
    id
    transaction {
      id
    }
    timestamp
    pool {
      id
    }
    token0 {
      id
    }
    token1 {
      id
    }
    owner
    sender
    origin
    amount
    amount0
    amount1
    amountUSD
    tickLower
    tickUpper
    logIndex
  }
  
  burns {
        id
    transaction {
      id
    }
    timestamp
    pool {
      id
    }
    token0 {
      id
    }
    token1 {
      id
    }
    owner
    origin
    amount
    amount0
    amount1
    amountUSD
    tickLower
    tickUpper
    logIndex
  }
  
  swaps {
    id
    transaction {
      id
    }
    timestamp
    pool {
      id
    }
    token0 {
      id
    }
    token1 {
      id
    }
    sender
    origin
    amount0
    amount1
    amountUSD
    logIndex
  }
`;

export const GET_ALL_POOLS = gql`
  query GetAllPools {
    pools(first: 100) {
     ${queryValues}
    }
  }
`;

export const GET_POOL_DETAIL = gql`
  query GetPoolDetail($poolId: String!) {
    pool(id: $poolId) {
     ${queryValues}
    }
  }
`;

export const GET_POOL_TRANSACTIONS = gql`
  query GetTransactions {
    transactions(first: 300) {
      id
      blockNumber
      timestamp
      gasUsed
      gasPrice
      mints {
        id
        transaction {
          id
        }
        timestamp
        pool {
          id
        }
        token0 {
          id
        }
        token1 {
          id
        }
        owner
        sender
        origin
        amount
        amount0
        amount1
        amountUSD
        tickLower
        tickUpper
        logIndex
      }

      burns {
        id
        transaction {
          id
        }
        timestamp
        pool {
          id
        }
        token0 {
          id
        }
        token1 {
          id
        }
        owner
        origin
        amount
        amount0
        amount1
        amountUSD
        tickLower
        tickUpper
        logIndex
      }

      swaps {
        id
        transaction {
          id
        }
        timestamp
        pool {
          id
        }
        token0 {
          id
        }
        token1 {
          id
        }
        sender
        origin
        amount0
        amount1
        amountUSD
        logIndex
      }
    }
  }
`;
