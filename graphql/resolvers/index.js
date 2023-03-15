import { userQueries, userMutations } from "./user";
import { participantQueries, participantMutations } from "./participant";
import { conversationQueries, conversationMutations } from "./conversation";
import { messageQueries, messageMutations } from "./message";

const resolvers = {
    Query: {
        ...userQueries,
        ...participantQueries,
        ...conversationQueries,
        ...messageQueries,
    },
    Mutation: {
        ...userMutations,
        ...participantMutations,
        ...conversationMutations,
        ...messageMutations,
    },
};

export default resolvers;
