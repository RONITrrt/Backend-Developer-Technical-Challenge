const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    superAdminId: { type: String, required: true },
});

module.exports = mongoose.model('School', schoolSchema);
