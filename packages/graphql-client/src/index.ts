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

export type CreateProductInput = {
  ownerId: Scalars['String'];
  price: Scalars['String'];
  productImageId?: InputMaybe<Scalars['String']>;
  productName: Scalars['String'];
  shopName: Scalars['String'];
  supplement?: InputMaybe<Scalars['String']>;
};

export type Friend = {
  __typename?: 'Friend';
  friendId: Scalars['ID'];
  id: Scalars['ID'];
  status: Scalars['Int'];
  userId: Scalars['ID'];
};

export type FriendUser = {
  __typename?: 'FriendUser';
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  profileImageId?: Maybe<Scalars['String']>;
};

export type FriendsAndProductsLength = {
  __typename?: 'FriendsAndProductsLength';
  id: Scalars['ID'];
  lastAccessedAt: Scalars['Date'];
  name: Scalars['String'];
  productsLength: Scalars['Int'];
  profileImageId?: Maybe<Scalars['String']>;
};

export type ImageId = {
  __typename?: 'ImageId';
  imageId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  applyFriend: Friend;
  approveFriend: Friend;
  checkProduct: Product;
  createProduct: Product;
  deleteProduct: Scalars['ID'];
  updateProduct: Product;
  updateUser: User;
  uploadImage: ImageId;
};


export type MutationApplyFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationApproveFriendArgs = {
  userId: Scalars['ID'];
};


export type MutationCheckProductArgs = {
  productId: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageInput;
};

export type Product = Basic & {
  __typename?: 'Product';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  ownerId: Scalars['String'];
  price: Scalars['String'];
  productImageId?: Maybe<Scalars['String']>;
  productName: Scalars['String'];
  shopName: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  supplement?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  friends: Array<Maybe<FriendUser>>;
  friendsAndProductsLength: Array<FriendsAndProductsLength>;
  pending: Array<Maybe<FriendUser>>;
  product: Product;
  products: Array<Maybe<Product>>;
  searchedUser?: Maybe<User>;
  user: User;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  userId: Scalars['ID'];
};


export type QuerySearchedUserArgs = {
  id: Scalars['ID'];
};

export type UpdateProductInput = {
  id: Scalars['String'];
  price: Scalars['String'];
  productImageId?: InputMaybe<Scalars['String']>;
  productName: Scalars['String'];
  shopName: Scalars['String'];
  supplement?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  name: Scalars['String'];
  profileImageId?: InputMaybe<Scalars['String']>;
};

export type UploadImageInput = {
  fileBody: Scalars['String'];
  fileName: Scalars['String'];
  fileType: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImageId?: Maybe<Scalars['String']>;
};

export type ApplyFriendMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type ApplyFriendMutation = { __typename?: 'Mutation', applyFriend: { __typename?: 'Friend', id: string, userId: string, friendId: string, status: number } };

export type ApproveFriendMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type ApproveFriendMutation = { __typename?: 'Mutation', approveFriend: { __typename?: 'Friend', id: string, userId: string, friendId: string, status: number } };

export type CheckProductMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type CheckProductMutation = { __typename?: 'Mutation', checkProduct: { __typename?: 'Product', id: string, createdAt: Date, updatedAt: Date, ownerId: string, productImageId?: string | null, productName: string, shopName: string, price: string, supplement?: string | null, status?: number | null } };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, createdAt: Date, updatedAt: Date, ownerId: string, productImageId?: string | null, productName: string, shopName: string, price: string, supplement?: string | null, status?: number | null } };

export type DeleteProductMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: string };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string, createdAt: Date, updatedAt: Date, ownerId: string, productImageId?: string | null, productName: string, shopName: string, price: string, supplement?: string | null, status?: number | null } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name: string, profileImageId?: string | null } };

export type UploadImageMutationVariables = Exact<{
  input: UploadImageInput;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage: { __typename?: 'ImageId', imageId: string } };

export type FriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'FriendUser', id: string, name: string, profileImageId?: string | null, lastAccessedAt: Date } | null> };

export type FriendsAndProductsLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendsAndProductsLengthQuery = { __typename?: 'Query', friendsAndProductsLength: Array<{ __typename?: 'FriendsAndProductsLength', id: string, name: string, profileImageId?: string | null, lastAccessedAt: Date, productsLength: number }> };

export type PendingQueryVariables = Exact<{ [key: string]: never; }>;


export type PendingQuery = { __typename?: 'Query', pending: Array<{ __typename?: 'FriendUser', id: string, name: string, profileImageId?: string | null, lastAccessedAt: Date } | null> };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, createdAt: Date, updatedAt: Date, ownerId: string, productImageId?: string | null, productName: string, shopName: string, price: string, supplement?: string | null, status?: number | null } };

export type ProductsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, createdAt: Date, updatedAt: Date, ownerId: string, productImageId?: string | null, productName: string, shopName: string, price: string, supplement?: string | null, status?: number | null } | null> };

export type SearchedUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SearchedUserQuery = { __typename?: 'Query', searchedUser?: { __typename?: 'User', id: string, name: string, profileImageId?: string | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, profileImageId?: string | null } };


export const ApplyFriendDocument = gql`
    mutation applyFriend($friendId: ID!) {
  applyFriend(friendId: $friendId) {
    id
    userId
    friendId
    status
  }
}
    `;
export type ApplyFriendMutationFn = Apollo.MutationFunction<ApplyFriendMutation, ApplyFriendMutationVariables>;

/**
 * __useApplyFriendMutation__
 *
 * To run a mutation, you first call `useApplyFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyFriendMutation, { data, loading, error }] = useApplyFriendMutation({
 *   variables: {
 *      friendId: // value for 'friendId'
 *   },
 * });
 */
export function useApplyFriendMutation(baseOptions?: Apollo.MutationHookOptions<ApplyFriendMutation, ApplyFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApplyFriendMutation, ApplyFriendMutationVariables>(ApplyFriendDocument, options);
      }
export type ApplyFriendMutationHookResult = ReturnType<typeof useApplyFriendMutation>;
export type ApplyFriendMutationResult = Apollo.MutationResult<ApplyFriendMutation>;
export type ApplyFriendMutationOptions = Apollo.BaseMutationOptions<ApplyFriendMutation, ApplyFriendMutationVariables>;
export const ApproveFriendDocument = gql`
    mutation approveFriend($userId: ID!) {
  approveFriend(userId: $userId) {
    id
    userId
    friendId
    status
  }
}
    `;
export type ApproveFriendMutationFn = Apollo.MutationFunction<ApproveFriendMutation, ApproveFriendMutationVariables>;

/**
 * __useApproveFriendMutation__
 *
 * To run a mutation, you first call `useApproveFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveFriendMutation, { data, loading, error }] = useApproveFriendMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useApproveFriendMutation(baseOptions?: Apollo.MutationHookOptions<ApproveFriendMutation, ApproveFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveFriendMutation, ApproveFriendMutationVariables>(ApproveFriendDocument, options);
      }
export type ApproveFriendMutationHookResult = ReturnType<typeof useApproveFriendMutation>;
export type ApproveFriendMutationResult = Apollo.MutationResult<ApproveFriendMutation>;
export type ApproveFriendMutationOptions = Apollo.BaseMutationOptions<ApproveFriendMutation, ApproveFriendMutationVariables>;
export const CheckProductDocument = gql`
    mutation checkProduct($productId: ID!) {
  checkProduct(productId: $productId) {
    id
    createdAt
    updatedAt
    ownerId
    productImageId
    productName
    shopName
    price
    supplement
    status
  }
}
    `;
export type CheckProductMutationFn = Apollo.MutationFunction<CheckProductMutation, CheckProductMutationVariables>;

/**
 * __useCheckProductMutation__
 *
 * To run a mutation, you first call `useCheckProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkProductMutation, { data, loading, error }] = useCheckProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useCheckProductMutation(baseOptions?: Apollo.MutationHookOptions<CheckProductMutation, CheckProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckProductMutation, CheckProductMutationVariables>(CheckProductDocument, options);
      }
export type CheckProductMutationHookResult = ReturnType<typeof useCheckProductMutation>;
export type CheckProductMutationResult = Apollo.MutationResult<CheckProductMutation>;
export type CheckProductMutationOptions = Apollo.BaseMutationOptions<CheckProductMutation, CheckProductMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    createdAt
    updatedAt
    ownerId
    productImageId
    productName
    shopName
    price
    supplement
    status
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($productId: ID!) {
  deleteProduct(productId: $productId)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    createdAt
    updatedAt
    ownerId
    productImageId
    productName
    shopName
    price
    supplement
    status
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    profileImageId
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UploadImageDocument = gql`
    mutation uploadImage($input: UploadImageInput!) {
  uploadImage(input: $input) {
    imageId
  }
}
    `;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const FriendsDocument = gql`
    query friends {
  friends {
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
 *   },
 * });
 */
export function useFriendsQuery(baseOptions?: Apollo.QueryHookOptions<FriendsQuery, FriendsQueryVariables>) {
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
export const FriendsAndProductsLengthDocument = gql`
    query friendsAndProductsLength {
  friendsAndProductsLength {
    id
    name
    profileImageId
    lastAccessedAt
    productsLength
  }
}
    `;

/**
 * __useFriendsAndProductsLengthQuery__
 *
 * To run a query within a React component, call `useFriendsAndProductsLengthQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendsAndProductsLengthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendsAndProductsLengthQuery({
 *   variables: {
 *   },
 * });
 */
export function useFriendsAndProductsLengthQuery(baseOptions?: Apollo.QueryHookOptions<FriendsAndProductsLengthQuery, FriendsAndProductsLengthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FriendsAndProductsLengthQuery, FriendsAndProductsLengthQueryVariables>(FriendsAndProductsLengthDocument, options);
      }
export function useFriendsAndProductsLengthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendsAndProductsLengthQuery, FriendsAndProductsLengthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FriendsAndProductsLengthQuery, FriendsAndProductsLengthQueryVariables>(FriendsAndProductsLengthDocument, options);
        }
export type FriendsAndProductsLengthQueryHookResult = ReturnType<typeof useFriendsAndProductsLengthQuery>;
export type FriendsAndProductsLengthLazyQueryHookResult = ReturnType<typeof useFriendsAndProductsLengthLazyQuery>;
export type FriendsAndProductsLengthQueryResult = Apollo.QueryResult<FriendsAndProductsLengthQuery, FriendsAndProductsLengthQueryVariables>;
export const PendingDocument = gql`
    query pending {
  pending {
    id
    name
    profileImageId
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
 *   },
 * });
 */
export function usePendingQuery(baseOptions?: Apollo.QueryHookOptions<PendingQuery, PendingQueryVariables>) {
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
export const ProductDocument = gql`
    query product($id: ID!) {
  product(id: $id) {
    id
    createdAt
    updatedAt
    ownerId
    productImageId
    productName
    shopName
    price
    supplement
    status
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query products($userId: ID!) {
  products(userId: $userId) {
    id
    createdAt
    updatedAt
    ownerId
    productImageId
    productName
    shopName
    price
    supplement
    status
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
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