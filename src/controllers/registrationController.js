const db = require('../models/db');

// Fetch metadata for dropdowns
const getMetadata = async (req, res) => {
    try {
        const [instituteTypes] = await db.query('SELECT * FROM InstituteTypes');
        const [boards] = await db.query('SELECT * FROM EducationBoards');
        const [mediums] = await db.query('SELECT * FROM Mediums');
        const [classCategories] = await db.query('SELECT * FROM ClassCategories');
        const [universities] = await db.query('SELECT * FROM Universities');
        const [degrees] = await db.query('SELECT * FROM Degrees');
        const [exams] = await db.query('SELECT * FROM Exams');

        res.status(200).json({
            instituteTypes,
            boards,
            mediums,
            classCategories,
            universities,
            degrees,
            exams,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Register an institute
const registerInstitute = async (req, res) => {
    try {
        const {
            instituteTypeId,
            educationBoardId,
            mediumId,
            classCategoryId,
            standardId,
            subjects,
            universityId,
            degreeId,
            examId,
        } = req.body;

        const [result] = await db.query(
            `INSERT INTO Registrations 
            (institute_type_id, education_board_id, medium_id, class_category_id, standard_id, subjects, university_id, degree_id, exam_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                instituteTypeId,
                educationBoardId || null,
                mediumId || null,
                classCategoryId || null,
                standardId || null,
                JSON.stringify(subjects) || null,
                universityId || null,
                degreeId || null,
                examId || null,
            ]
        );

        res.status(201).json({ message: 'Registration successful', registrationId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getMetadata, registerInstitute };
