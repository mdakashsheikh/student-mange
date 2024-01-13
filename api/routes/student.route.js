const express = require('express');
const { postStudent, getStudent, editStudent, deleteStudent, getRead } = require('../controllers/student.controller');
const router = express.Router();

router.post('/post-student', postStudent);
router.put('/edit-student/:id', editStudent);
router.get('/get-student', getStudent);
router.get('/get-read/:id', getRead);
router.delete('/delete-student/:id', deleteStudent);

module.exports = router;