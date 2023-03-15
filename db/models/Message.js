const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: { type: String },
    senderId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participant' 
    },
    conversationId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    isLastMessage: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

module.exports = mongoose.model('Message', MessageSchema);