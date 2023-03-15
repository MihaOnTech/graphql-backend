import { Conversation } from '../../../db/models';

const conversationMutations = {
    createConversation: async (_, { conversation }) => {
        const newConversation = new Conversation(conversation);

        return newConversation.save();
    },
    updateConversation: async (_, { id, conversation }) => {
        const updatedConversation = await Conversation.findByIdAndUpdate(
            id,
            {
                $set: { ...conversation },
            },
            {
                new: true
            }
        );

        return updatedConversation;
    },
};

export default conversationMutations;