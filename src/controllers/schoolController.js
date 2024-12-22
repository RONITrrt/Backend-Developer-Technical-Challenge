const School = require('../models/School');

exports.createSchool = async (req, res) => {
    try {
        const school = new School(req.body);
        await school.save();
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
