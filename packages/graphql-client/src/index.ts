import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type Basic = {
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type Friend = {
  __typename?: 'Friend';
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  friends: Array<Maybe<Friend>>;
};


export type QueryFriendsArgs = {
  userId: Scalars['ID'];
};

export type User = Basic & {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type FriendsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'Friend', id: string, name: string, profileImageUrl?: string | null, lastAccessedAt: Date } | null> };


export const FriendsDocument = gql`
    query friends($userId: ID!) {
  friends(userId: $userId) {
    id
    name
    profileImageUrl
    lastAccessedAt
  }
}
    `;

/**
 * __useFriendsQuery__
 *
 * To run a query within a React component, call `useFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFriendsQuery(baseOptions: Apollo.QueryHookOptions<FriendsQuery, FriendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FriendsQuery, FriendsQueryVariables>(FriendsDocument, options);
      }
export function useFriendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendsQuery, FriendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FriendsQuery, FriendsQueryVariables>(FriendsDocument, options);
        }
export type FriendsQueryHookResult = ReturnType<typeof useFriendsQuery>;
export type FriendsLazyQueryHookResult = ReturnType<typeof useFriendsLazyQuery>;
export type FriendsQueryResult = Apollo.QueryResult<FriendsQuery, FriendsQueryVariables>;