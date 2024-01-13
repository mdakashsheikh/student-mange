const db = require('../db/dbConn.js');

const postStudent = async(req, res) => {

}

const editStudent = async(req, res) => {

}

const getStudent = async(req, res) => {

    const sql = "SELECT * FROM student_info";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: 'Server Error'});
        return res.json(result);
    })
}

const deleteStudent = async(req, res) => {

}

module.exports = {
    postStudent,
    editStudent,
    getStudent,
    deleteStudent
}