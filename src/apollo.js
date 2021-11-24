import { ApolloClient, HttpLink, InMemoryCache, makeVar } from "@apollo/client";

export const addressReactive = makeVar(null);
export const isConnected = makeVar(false);
export const addressDetails = makeVar({});
export const signedVote = makeVar(null);
export const hasClaimed = makeVar(false);
export const network = makeVar(null);
export const delegates = makeVar({});
export const delegatedTo = makeVar({});
export const tokensOwned = makeVar({});

export let apolloClientInstance;

const typePolicies = {
  Query: {
    fields: {
      isConnected: {
        read() {
          return isConnected();
        },
      },
      address: {
        read() {
          return addressReactive()
            ? addressReactive().toLowerCase()
            : addressReactive();
        },
      },
      addressDetails: {
        read() {
          return addressDetails();
        },
      },
      signedVote: {
        read() {
          return signedVote();
        },
      },
      network: {
        read() {
          return network();
        },
      },
      hasClaimed: {
        read() {
          return hasClaimed();
        },
      },
      delegates: {
        read() {
          return delegates();
        },
      },
      tokensOwned: {
        read() {
          return tokensOwned();
        },
      },
      delegatedTo: {
        read() {
          return delegatedTo();
        },
      },
    },
  },
};

const getGraphqlUri = (operation) => {
  const { operationName } = operation;
  if (operationName === "Votes") {
    return "https://hub.snapshot.org/graphql";
  }
  return "https://api.thegraph.com/subgraphs/name/ensdomains/ens";
};

export const initApolloClient = () => {
  apolloClientInstance = new ApolloClient({
    link: new HttpLink({
      uri: getGraphqlUri,
    }),
    cache: new InMemoryCache({ typePolicies }),
  });
  return apolloClientInstance;
};
