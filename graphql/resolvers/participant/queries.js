import { Participant } from '../../../db/models';

const participantQueries = {
    participants: async (_, args) => {
        const participants = await Participant.find();

        return participants;
    },
    participant: async (_, args) => {
        const participant = await Participant.findById();

        return participant;
    },
};

export default participantQueries;