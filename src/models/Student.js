const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
    enrollmentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);
