// Put togerther all the query resolvers(name as Query to match with Query type from graphql-resolvers)
const user = {
  id: 1,
  createdAt: 1,
  updatedAt: 1,
  name: "A",
  email: "A",
  profileImageUrl: "A",
  lastAccessedAt: 1,
  friends: [],
  waiting: [],
};

const Query = {
  friend: () => user,
};

export default Query;
