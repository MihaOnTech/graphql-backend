import { Message } from '../../../db/models';

const messageMutations = {
    createMessage: async (_, { message }) => {
        const newMessage = new Message(message);

        return newMessage.save();
    },
    updateMessage: async (_, { id, message }) => {
        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            {
                $set: { ...message },
            },
            {
                new: true
            }
        );

        return updatedMessage;
    },
};

export default messageMutations;