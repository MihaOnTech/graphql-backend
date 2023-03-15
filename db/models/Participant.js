const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    conversationId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'  
    },

})

module.exports = mongoose.model('Participant', ParticipantSchema);