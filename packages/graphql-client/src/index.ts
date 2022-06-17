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

export type Base = {
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type Friend = {
  __typename?: 'Friend';
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  profileImageUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  applying: Array<Maybe<Friend>>;
  friend?: Maybe<Friend>;
  friends: Array<Maybe<Friend>>;
  pending: Array<Maybe<Friend>>;
  user?: Maybe<User>;
};


export type QueryApplyingArgs = {
  id: Scalars['ID'];
};


export type QueryFriendArgs = {
  id: Scalars['ID'];
};


export type QueryFriendsArgs = {
  id: Scalars['ID'];
};


export type QueryPendingArgs = {
  id: Scalars['ID'];
};

export type User = Base & {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  profileImageUrl: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ApplyingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ApplyingQuery = { __typename?: 'Query', applying: Array<{ __typename?: 'Friend', id: string, name: string, profileImageUrl: string, lastAccessedAt: Date } | null> };

export type FriendQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FriendQuery = { __typename?: 'Query', friend?: { __typename?: 'Friend', id: string, name: string, profileImageUrl: string, lastAccessedAt: Date } | null };

export type FriendsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'Friend', id: string, name: string, profileImageUrl: string, lastAccessedAt: Date } | null> };

export type PendingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PendingQuery = { __typename?: 'Query', pending: Array<{ __typename?: 'Friend', id: string, name: string, profileImageUrl: string, lastAccessedAt: Date } | null> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, createdAt: Date, updatedAt: Date, name: string, email: string, profileImageUrl: string, lastAccessedAt: Date } | null };


export const ApplyingDocument = gql`
    query applying($id: ID!) {
  applying(id: $id) {
    id
    name
    profileImageUrl
    lastAccessedAt
  }
}
    `;

/**
 * __useApplyingQuery__
 *
 * To run a query within a React component, call `useApplyingQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplyingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplyingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApplyingQuery(baseOptions: Apollo.QueryHookOptions<ApplyingQuery, ApplyingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApplyingQuery, ApplyingQueryVariables>(ApplyingDocument, options);
      }
export function useApplyingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplyingQuery, ApplyingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApplyingQuery, ApplyingQueryVariables>(ApplyingDocument, options);
        }
export type ApplyingQueryHookResult = ReturnType<typeof useApplyingQuery>;
export type ApplyingLazyQueryHookResult = ReturnType<typeof useApplyingLazyQuery>;
export type ApplyingQueryResult = Apollo.QueryResult<ApplyingQuery, ApplyingQueryVariables>;
export const FriendDocument = gql`
    query friend($id: ID!) {
  friend(id: $id) {
    id
    name
    profileImageUrl
    lastAccessedAt
  }
}
    `;

/**
 * __useFriendQuery__
 *
 * To run a query within a React component, call `useFriendQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFriendQuery(baseOptions: Apollo.QueryHookOptions<FriendQuery, FriendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FriendQuery, FriendQueryVariables>(FriendDocument, options);
      }
export function useFriendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendQuery, FriendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FriendQuery, FriendQueryVariables>(FriendDocument, options);
        }
export type FriendQueryHookResult = ReturnType<typeof useFriendQuery>;
export type FriendLazyQueryHookResult = ReturnType<typeof useFriendLazyQuery>;
export type FriendQueryResult = Apollo.QueryResult<FriendQuery, FriendQueryVariables>;
export const FriendsDocument = gql`
    query friends($id: ID!) {
  friends(id: $id) {
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
 *      id: // value for 'id'
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
export const PendingDocument = gql`
    query pending($id: ID!) {
  pending(id: $id) {
    id
    name
    profileImageUrl
    lastAccessedAt
  }
}
    `;

/**
 * __usePendingQuery__
 *
 * To run a query within a React component, call `usePendingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePendingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePendingQuery(baseOptions: Apollo.QueryHookOptions<PendingQuery, PendingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PendingQuery, PendingQueryVariables>(PendingDocument, options);
      }
export function usePendingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PendingQuery, PendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PendingQuery, PendingQueryVariables>(PendingDocument, options);
        }
export type PendingQueryHookResult = ReturnType<typeof usePendingQuery>;
export type PendingLazyQueryHookResult = ReturnType<typeof usePendingLazyQuery>;
export type PendingQueryResult = Apollo.QueryResult<PendingQuery, PendingQueryVariables>;
export const UserDocument = gql`
    query user {
  user {
    id
    createdAt
    updatedAt
    name
    email
    profileImageUrl
    lastAccessedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;