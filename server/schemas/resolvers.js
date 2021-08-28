const { User } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async (parent, context) => {
            if (context.user) {
                const foundUser = await User.findOne({
                    $or: [{ _id: context.user._id }, { username: context.user.username }],
                });
                return foundUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;
