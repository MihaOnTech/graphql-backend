import { Message } from '../../../db/models';

const messageQueries = {
    messages: async (_, args) => {
        const messages = await Message.find();

        return messages;
    },
    message: async (_, args) => {
        const message = await Message.findById();

        return message;
    },
};

export default messageQueries;