const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    capacity: { type: Number, required: true },
    resources: { type: String },
});

module.exports = mongoose.model('Classroom', classroomSchema);
