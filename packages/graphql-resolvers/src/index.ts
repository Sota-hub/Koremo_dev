import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type ImageId = {
  __typename?: 'ImageId';
  imageId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  applyFriend: Friend;
  approveFriend: Friend;
  createProduct: Product;
  updateUser: User;
  uploadImage: ImageId;
};


export type MutationApplyFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationApproveFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  price: Scalars['String'];
  productImageId?: Maybe<Scalars['String']>;
  productName: Scalars['String'];
  shopName: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
  supplement?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  friends: Array<Maybe<FriendUser>>;
  pending: Array<Maybe<FriendUser>>;
  searchedUser?: Maybe<User>;
  user: User;
};


export type QuerySearchedUserArgs = {
  id: Scalars['ID'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Basic: never;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateProductInput: CreateProductInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Friend: ResolverTypeWrapper<Friend>;
  FriendUser: ResolverTypeWrapper<FriendUser>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageId: ResolverTypeWrapper<ImageId>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserInput: UpdateUserInput;
  UploadImageInput: UploadImageInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Basic: never;
  Boolean: Scalars['Boolean'];
  CreateProductInput: CreateProductInput;
  Date: Scalars['Date'];
  Friend: Friend;
  FriendUser: FriendUser;
  ID: Scalars['ID'];
  ImageId: ImageId;
  Int: Scalars['Int'];
  Mutation: {};
  Product: Product;
  Query: {};
  String: Scalars['String'];
  UpdateUserInput: UpdateUserInput;
  UploadImageInput: UploadImageInput;
  User: User;
};

export type BasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Basic'] = ResolversParentTypes['Basic']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FriendResolvers<ContextType = any, ParentType extends ResolversParentTypes['Friend'] = ResolversParentTypes['Friend']> = {
  friendId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FriendUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['FriendUser'] = ResolversParentTypes['FriendUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastAccessedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageId'] = ResolversParentTypes['ImageId']> = {
  imageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  applyFriend?: Resolver<ResolversTypes['Friend'], ParentType, ContextType, RequireFields<MutationApplyFriendArgs, 'friendId'>>;
  approveFriend?: Resolver<ResolversTypes['Friend'], ParentType, ContextType, RequireFields<MutationApproveFriendArgs, 'friendId'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  uploadImage?: Resolver<ResolversTypes['ImageId'], ParentType, ContextType, RequireFields<MutationUploadImageArgs, 'input'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productImageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shopName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  supplement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  friends?: Resolver<Array<Maybe<ResolversTypes['FriendUser']>>, ParentType, ContextType>;
  pending?: Resolver<Array<Maybe<ResolversTypes['FriendUser']>>, ParentType, ContextType>;
  searchedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySearchedUserArgs, 'id'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Basic?: BasicResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Friend?: FriendResolvers<ContextType>;
  FriendUser?: FriendUserResolvers<ContextType>;
  ImageId?: ImageIdResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

