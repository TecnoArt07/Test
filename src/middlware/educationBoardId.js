const db = require('../models/db');

const checkEducationBoardId = async (req, res, next) => {
    const { educationBoardId } = req.body;

    try {
        // If no educationBoardId is provided, skip the check
        if (!educationBoardId) {
            return res.status(400).json({ error: 'EducationBoardId is required.' });
        }

        // Query the database to check if the ID exists
        const [rows] = await db.query('SELECT id FROM EducationBoards WHERE id = ?', [educationBoardId]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Invalid educationBoardId. It does not exist in the database.' });
        }

        // If the ID exists, proceed to the next middleware/controller
        next();
    } catch (err) {
        return res.status(500).json({ error: 'Database error occurred while validating educationBoardId.' });
    }
};

module.exports = checkEducationBoardId;
