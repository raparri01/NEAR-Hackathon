import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type PriceTimeStamp = {
  __typename?: 'PriceTimeStamp';
  timestamp: Scalars['String'];
  value: Scalars['Float'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  transactionsForApp: Transaction;
  userExample?: Maybe<UserExample>;
  userExamples: Array<UserExample>;
};


/** About the Redwood queries. */
export type QuerytransactionsForAppArgs = {
  appName?: InputMaybe<Scalars['String']>;
};


/** About the Redwood queries. */
export type QueryuserExampleArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  price?: Maybe<Array<PriceTimeStamp>>;
  transactions?: Maybe<Array<PriceTimeStamp>>;
};

export type UserExample = {
  __typename?: 'UserExample';
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type HomeQueryVariables = Exact<{
  appName: Scalars['String'];
}>;


export type HomeQuery = { __typename?: 'Query', transactionsForApp: { __typename?: 'Transaction', price?: Array<{ __typename?: 'PriceTimeStamp', value: number, timestamp: string }> | null, transactions?: Array<{ __typename?: 'PriceTimeStamp', value: number, timestamp: string }> | null } };
