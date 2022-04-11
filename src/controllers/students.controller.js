const studentCtrl = {}
const Student = require('../models/Student')

studentCtrl.getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        return res.json({
            ok: true,
            students
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

studentCtrl.createStudent = async (req, res) => {
    const { university_code, password, last_name, first_name, institutional_mail, photo, activated_account, logged_in, personal_mail, personal_phone, preference_campus } = req.body;
    const newStudent = new Student({
        university_code, password, last_name, first_name, institutional_mail, photo, activated_account, logged_in, personal_mail, personal_phone, preference_campus
    })
    newStudent.password = await newStudent.encryptPassword(newStudent.password)
    await newStudent.save((err, studentDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newStudent: studentDB
        })
    })
}

studentCtrl.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        if (!student) {
            return res.json({
                ok: false, message: "Student not found"
            })
        }
        res.json({ ok: true, student })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

studentCtrl.validateActivation = async (req, res) => {
    try {
        const student = await Student.findOne({ university_code: { $eq: req.params.id } })        
        if (!student) {
            return res.json({
                ok: false, message: "Student not found"
            })
        }
        // Validation
        if (student.activated_account)
            res.json({ok: true, activated: true})
        else
            res.json({ok: true, activated: false})
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

// Login
studentCtrl.login = async (req, res) => {
    const { university_code, password } = req.body;
    Student.find({ university_code: university_code }, async (err, studentDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        // Validate university code
        if (!studentDB[0]) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Incorrect university code"
                }
            })
        }
        // Validate password
        const validPassword = await studentDB[0].validatePassword(password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Incorrect password",
                },
                correctPassword: false
            })
        }
        // Validated user
        res.json({
            ok: true,
            student: studentDB[0]
        })
    })
}

studentCtrl.updateStudent = async (req, res) => {
    try {
        const { password } = req.body;
        if (password) {
            const studentPassword = new Student({
                password
            })
            req.body.password = await studentPassword.encryptPassword(studentPassword.password)  
        }
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!updatedStudent) {
            return res.json({ ok: false, message: "Student not found" })
        }
        res.json({
            ok: true, student: updatedStudent
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

studentCtrl.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.json({
                ok: false, message: "Student not found"
            })
        }
        res.json({ ok: true, message: "Deleted student" })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

module.exports = studentCtrl