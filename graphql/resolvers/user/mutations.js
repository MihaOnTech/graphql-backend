import { User, Participant } from '../../../db/models';

const userMutations = {
    createUser: async (_, { user }) => {
        const newUser = new User(user);

        return newUser.save();
    },
    updateUser: async (_, { id, user }) => {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                $set: { ...user},
            },
            {
                new: true
            }
        );

        return updatedAuthor;
    },
    addUserToConversation: async (_, { id, conversation }) => {
        const user = await User.findById(id);
        
        if (user){
            const newParticipant = new Participant({ conversation, user: id });
            await newParticipant.save();
        }
        
        return user;
    },
};

export default userMutations;