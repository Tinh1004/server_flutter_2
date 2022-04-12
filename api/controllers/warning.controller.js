const Warning = require('../models/warning.model');
const mongoose = require('mongoose');

const warning = {
    getWarnings: async (req, res) => {
        try {
            const warnings = await Warning.find().sort(
                '-createdAt',
            );
            return res.status(200).json(warnings);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.warning });
        }
    },
    getWarning: async (req, res) => {
        try {
            const id = req.params.id;
            const warning = await Warning.findById(id);
            return res.status(200).json(warning);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.warning });
        }
    },
    createWarning: async (req, res) => {
        const newWarning = new Warning(req.body);
        try {
            const savedWarning = await newWarning.save();
            res.status(200).json(savedWarning);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateWarning: async (req, res) => {
        try {
            const id = req.params.id;
            const warning = await Warning.findById(id);

            const newProduct = await warning.updateOne({ $set: {readed: true} });
            res.status(200).json(newProduct);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.warning });
        }
    },
    deleteWarning: async (req, res) => {
        try {
            const warning = await Warning.findById(req.params.id);
            await warning.deleteOne();
            res.status(200).json(warning);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = warning;
