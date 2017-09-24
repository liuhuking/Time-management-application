var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    goal: {
        type: String
    },
    deliverable: {
        type: String
    },
    priority: {
        type: Number,
        required: true,
        default: 1
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    reminder: {
        type: String
    },
    process: {
        type: [String]
    }
    // ,
    // projectId: {
    //     type: Schema.Types.ObjectId
    // },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     required: true
    // }
},
{
    timestamps: true
});

taskSchema.methods.setPassword = function(password) {
};

mongoose.model('Task', taskSchema);