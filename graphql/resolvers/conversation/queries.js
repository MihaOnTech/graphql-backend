import { Conversation } from '../../../db/models';

const conversationQueries = {
    conversations: async (_, args) => {
        const conversations = await Conversation.find();

        return conversations;
    },
    conversation: async (_, args) => {
        const conversation = await Conversation.findById();

        return conversation;
    },
};

export default conversationQueries;