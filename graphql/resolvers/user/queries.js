import { User } from '../../../db/models';

const userQueries = {
    users: async (_, args) => {
        const users = await User.find();

        return users;
    },
    user: async (_, args) => {
        const user = await User.findById();

        return user;
    },
};

export default userQueries;