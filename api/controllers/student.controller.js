const db = require('../db/dbConn.js');

const postStudent = async(req, res) => {
    const sql = "INSERT INTO student_info (`name`, `email`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email
    ];

    db.query(sql, [values], (err, result) => {
        if(err) return res.json({Message: 'Server Error'})
        return res.json(result);
    })
}

const editStudent = async(req, res) => {
    const sql = "UPDATE student_info SET `name`=?, `email`=? WHERE ID=?";
    const id = req.params.id;
    // const name = req.body.name;
    // const email = req.body.email;

    db.query(sql, [req.body.name, req.body.email, Number(id)], (err, result) => {
        if(err) {
            console.log(err)
            return res.json({Message: 'Server Error'})
        }
        return res.json(result);
    })
}

const getStudent = async(req, res) => {

    const sql = "SELECT * FROM student_info";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: 'Server Error'});
        return res.json(result);
    })
}

const getRead = async(req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM student_info WHERE ID = ?";

    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Server Error"})
        return res.json(result);
    })
}

const deleteStudent = async(req, res) => {

}

module.exports = {
    postStudent,
    editStudent,
    getStudent,
    getRead,
    deleteStudent
}