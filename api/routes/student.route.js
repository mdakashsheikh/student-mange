const express = require('express');
const { postStudent, getStudent, editStudent, deleteStudent } = require('../controllers/student.controller');
const router = express.Router();

router.post('/post-student', postStudent);
router.post('/edit-student/:id', editStudent);
router.get('/get-student', getStudent);
router.delete('/delete-student/:id', deleteStudent);

module.exports = router;