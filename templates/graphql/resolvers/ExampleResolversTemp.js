const { ForbiddenError } = require('apollo-server');
const { combineResolvers } = require('graphql-resolvers');
const { Example } = require('../../models');

module.exports = {
  Query: {
    examples: combineResolvers(async (parent, args, context, info) => {
      try {
        const responses = await Example;
        return responses;
      } catch (error) {
        throw new ForbiddenError('Get Example Error:', error);
      }
    }),
  },
};
