import { TodoStore } from './containers/TodoApp/todoStore';
import { withClientState } from 'apollo-link-state';
import flow from 'lodash/fp/flow';
import assignIn from 'lodash/fp/assignIn';
import map from 'lodash/fp/map';
const reduce = require('lodash/fp/reduce');
const reduceWithDefault = reduce.convert({ cap: false });

// Given an attribute it will merge all objects in a list of
// objects found at that attribute
const mergeGet = (attributeName: any) =>
  flow(
    // pick a single attribute from each object
    map(attributeName),
    // merge all values into a single object
    reduceWithDefault(assignIn, {})
  );

// Local Data Stores
const STORES = [TodoStore];

// Map mutation handlers and default values of our local state
// to the apollo cache
const CreateClientStore = (cache: any) => {
  // Merge all defaults
  const defaults = mergeGet('defaults')(STORES);

  // Merge all mutations
  const mutations = mergeGet('mutations')(STORES);

  // Construct the client state with given mutations and defaults
  return withClientState({
    cache,
    defaults,
    resolvers: {
      Mutation: mutations,
    },
  });
};

export default CreateClientStore;
