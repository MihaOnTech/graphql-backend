const mongoose = require('mongoose');
const ParticipantSchema = require('./Participant');

const ConversationSchema = new mongoose.Schema({
    participantIds: {
        type: [{
            userId: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' 
            },
            conversationId: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Conversation'  
            }
        }],
        ref: 'Participant'
    },
    latestMessageId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message' 
    }  

})

module.exports = mongoose.model('Conversation', ConversationSchema);