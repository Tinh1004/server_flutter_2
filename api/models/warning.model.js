const mongoose = require('mongoose');

const WarningSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Warning', WarningSchema);
