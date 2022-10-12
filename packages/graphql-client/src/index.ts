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
  profileImageId?: Maybe<Scalars['String']>;
};

export type LocalLoginInput = {
  email: Scalars['String'];
  isChecked: Scalars['Boolean'];
  password: Scalars['String'];
};

export type LocalSignupInput = {
  confPass: Scalars['String'];
  email: Scalars['String'];
  isChecked: Scalars['Boolean'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  googleOAuth: Scalars['Boolean'];
  localLogin: Scalars['Boolean'];
  localSignup: Scalars['Boolean'];
};


export type MutationLocalLoginArgs = {
  input: LocalLoginInput;
};


export type MutationLocalSignupArgs = {
  input: LocalSignupInput;
};

export type Query = {
  __typename?: 'Query';
  friends: Array<Maybe<Friend>>;
  searchedUser?: Maybe<User>;
  user: User;
};


export type QueryFriendsArgs = {
  userId: Scalars['ID'];
};


export type QuerySearchedUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImageId?: Maybe<Scalars['String']>;
};

export type GoogleOAuthMutationVariables = Exact<{ [key: string]: never; }>;


export type GoogleOAuthMutation = { __typename?: 'Mutation', googleOAuth: boolean };

export type LocalLoginMutationVariables = Exact<{
  input: LocalLoginInput;
}>;


export type LocalLoginMutation = { __typename?: 'Mutation', localLogin: boolean };

export type LocalSignupMutationVariables = Exact<{
  input: LocalSignupInput;
}>;


export type LocalSignupMutation = { __typename?: 'Mutation', localSignup: boolean };

export type FriendsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'Friend', id: string, name: string, profileImageId?: string | null, lastAccessedAt: Date } | null> };

export type SearchedUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SearchedUserQuery = { __typename?: 'Query', searchedUser?: { __typename?: 'User', id: string, name: string, profileImageId?: string | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, profileImageId?: string | null } };


export const GoogleOAuthDocument = gql`
    mutation googleOAuth {
  googleOAuth
}
    `;
export type GoogleOAuthMutationFn = Apollo.MutationFunction<GoogleOAuthMutation, GoogleOAuthMutationVariables>;

/**
 * __useGoogleOAuthMutation__
 *
 * To run a mutation, you first call `useGoogleOAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleOAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleOAuthMutation, { data, loading, error }] = useGoogleOAuthMutation({
 *   variables: {
 *   },
 * });
 */
export function useGoogleOAuthMutation(baseOptions?: Apollo.MutationHookOptions<GoogleOAuthMutation, GoogleOAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleOAuthMutation, GoogleOAuthMutationVariables>(GoogleOAuthDocument, options);
      }
export type GoogleOAuthMutationHookResult = ReturnType<typeof useGoogleOAuthMutation>;
export type GoogleOAuthMutationResult = Apollo.MutationResult<GoogleOAuthMutation>;
export type GoogleOAuthMutationOptions = Apollo.BaseMutationOptions<GoogleOAuthMutation, GoogleOAuthMutationVariables>;
export const LocalLoginDocument = gql`
    mutation localLogin($input: LocalLoginInput!) {
  localLogin(input: $input)
}
    `;
export type LocalLoginMutationFn = Apollo.MutationFunction<LocalLoginMutation, LocalLoginMutationVariables>;

/**
 * __useLocalLoginMutation__
 *
 * To run a mutation, you first call `useLocalLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocalLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [localLoginMutation, { data, loading, error }] = useLocalLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocalLoginMutation(baseOptions?: Apollo.MutationHookOptions<LocalLoginMutation, LocalLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LocalLoginMutation, LocalLoginMutationVariables>(LocalLoginDocument, options);
      }
export type LocalLoginMutationHookResult = ReturnType<typeof useLocalLoginMutation>;
export type LocalLoginMutationResult = Apollo.MutationResult<LocalLoginMutation>;
export type LocalLoginMutationOptions = Apollo.BaseMutationOptions<LocalLoginMutation, LocalLoginMutationVariables>;
export const LocalSignupDocument = gql`
    mutation localSignup($input: LocalSignupInput!) {
  localSignup(input: $input)
}
    `;
export type LocalSignupMutationFn = Apollo.MutationFunction<LocalSignupMutation, LocalSignupMutationVariables>;

/**
 * __useLocalSignupMutation__
 *
 * To run a mutation, you first call `useLocalSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocalSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [localSignupMutation, { data, loading, error }] = useLocalSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocalSignupMutation(baseOptions?: Apollo.MutationHookOptions<LocalSignupMutation, LocalSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LocalSignupMutation, LocalSignupMutationVariables>(LocalSignupDocument, options);
      }
export type LocalSignupMutationHookResult = ReturnType<typeof useLocalSignupMutation>;
export type LocalSignupMutationResult = Apollo.MutationResult<LocalSignupMutation>;
export type LocalSignupMutationOptions = Apollo.BaseMutationOptions<LocalSignupMutation, LocalSignupMutationVariables>;
export const FriendsDocument = gql`
    query friends($userId: ID!) {
  friends(userId: $userId) {
    id
    name
    profileImageId
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
export const SearchedUserDocument = gql`
    query searchedUser($id: ID!) {
  searchedUser(id: $id) {
    id
    name
    profileImageId
  }
}
    `;

/**
 * __useSearchedUserQuery__
 *
 * To run a query within a React component, call `useSearchedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchedUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSearchedUserQuery(baseOptions: Apollo.QueryHookOptions<SearchedUserQuery, SearchedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchedUserQuery, SearchedUserQueryVariables>(SearchedUserDocument, options);
      }
export function useSearchedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchedUserQuery, SearchedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchedUserQuery, SearchedUserQueryVariables>(SearchedUserDocument, options);
        }
export type SearchedUserQueryHookResult = ReturnType<typeof useSearchedUserQuery>;
export type SearchedUserLazyQueryHookResult = ReturnType<typeof useSearchedUserLazyQuery>;
export type SearchedUserQueryResult = Apollo.QueryResult<SearchedUserQuery, SearchedUserQueryVariables>;
export const UserDocument = gql`
    query user {
  user {
    id
    name
    profileImageId
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