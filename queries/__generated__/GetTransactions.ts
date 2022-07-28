/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTransactions
// ====================================================

export interface GetTransactions_transactions_mints_transaction {
  __typename: "Transaction";
  id: string;
}

export interface GetTransactions_transactions_mints_pool {
  __typename: "Pool";
  id: string;
}

export interface GetTransactions_transactions_mints_token0 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_mints_token1 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_mints {
  __typename: "Mint";
  id: string;
  transaction: GetTransactions_transactions_mints_transaction;
  timestamp: any;
  pool: GetTransactions_transactions_mints_pool;
  token0: GetTransactions_transactions_mints_token0;
  token1: GetTransactions_transactions_mints_token1;
  owner: any;
  sender: any | null;
  origin: any;
  amount: any;
  amount0: any;
  amount1: any;
  amountUSD: any | null;
  tickLower: any;
  tickUpper: any;
  logIndex: any | null;
}

export interface GetTransactions_transactions_burns_transaction {
  __typename: "Transaction";
  id: string;
}

export interface GetTransactions_transactions_burns_pool {
  __typename: "Pool";
  id: string;
}

export interface GetTransactions_transactions_burns_token0 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_burns_token1 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_burns {
  __typename: "Burn";
  id: string;
  transaction: GetTransactions_transactions_burns_transaction;
  timestamp: any;
  pool: GetTransactions_transactions_burns_pool;
  token0: GetTransactions_transactions_burns_token0;
  token1: GetTransactions_transactions_burns_token1;
  owner: any | null;
  origin: any;
  amount: any;
  amount0: any;
  amount1: any;
  amountUSD: any | null;
  tickLower: any;
  tickUpper: any;
  logIndex: any | null;
}

export interface GetTransactions_transactions_swaps_transaction {
  __typename: "Transaction";
  id: string;
}

export interface GetTransactions_transactions_swaps_pool {
  __typename: "Pool";
  id: string;
}

export interface GetTransactions_transactions_swaps_token0 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_swaps_token1 {
  __typename: "Token";
  id: string;
}

export interface GetTransactions_transactions_swaps {
  __typename: "Swap";
  id: string;
  transaction: GetTransactions_transactions_swaps_transaction;
  timestamp: any;
  pool: GetTransactions_transactions_swaps_pool;
  token0: GetTransactions_transactions_swaps_token0;
  token1: GetTransactions_transactions_swaps_token1;
  sender: any;
  origin: any;
  amount0: any;
  amount1: any;
  amountUSD: any;
  logIndex: any | null;
}

export interface GetTransactions_transactions {
  __typename: "Transaction";
  id: string;
  blockNumber: any;
  timestamp: any;
  gasUsed: any;
  gasPrice: any;
  mints: (GetTransactions_transactions_mints | null)[];
  burns: (GetTransactions_transactions_burns | null)[];
  swaps: (GetTransactions_transactions_swaps | null)[];
}

export interface GetTransactions {
  transactions: GetTransactions_transactions[];
}
