const mongoose = require('mongoose')
const student = require('../models/studentSchema')
const STUDENT = mongoose.model('student')

exports.student = {
    /*cloneDeep: (array) => {
        return JSON.parse(JSON.stringify(array))
    },*/
    get_by_id: async (req, res) => {
        try {
            const data = await STUDENT.find({ _id: req.query._id })
            if (data[0] == null) {
                res.json({ alert: "record not found" })
            }
            else {
                res.json(data);
            }
        } catch (error) {
            return res.send(error)
        }

    },
    get: async (req, res) => {
        const studentList = await STUDENT.find({})
        return res.json({
            isSuccess: true,
            data: studentList
        })
    },
    add: async (req, res) => {
        try {
            if (req.body.password == req.body.confirmpassword) {
                // (async () => {
                //     STUDENT(req.body).save().then(() => {
                //         res.status(201).send(STUDENT(req.body));
                //     }).catch((err) => {
                //         res.status(400).json(err);
                //     })
                // })();
                const isCreated = await STUDENT.create(req.body);
                if (!isCreated) {
                    return res.json({
                        isSuccess: false,
                        message: "Failed to add student"
                    })
                }
                return res.json({
                    isSuccess: true,
                    message: "Student addedd successfully"
                })
            }
            else {
                return res.json({ alert: "password and confirm password should be same" });
            }
        }
        catch (error) {
            res.json(error.message)
        }
    },

    update: async (req, res) => {
        /*try {
            if (req.body.password == req.body.confirmpassword) {
                const result = await STUDENT.findById(req.body._id);
                Object.assign(result,req.body);
                result.save();
                res.json({data:result});
            }
            else{
                res.json({alert:"password and confirm password should be same"})
            }
        } catch (err) {
            res.status(400).json({alert:"alert"});
        }*/
        try {
            let studentData = await STUDENT.findOne({ _id: req.body._id })
            if (!studentData) {
                return res.json({
                    isSuccess: false,
                    message: "No data found"
                })
            }
            if (req.body.password == req.body.confirmpassword) {
                const filter = { _id: req.body._id };
                const update = req.body;
                const created = await STUDENT.updateOne(filter, update, { runValidators: true });
                if (!created) {
                    return res.json({ message: "file not updated" })
                }
                else {
                    return res.json({
                        message: "file updated",
                    })
                }
            }
            else {
                res.json({ alert: "password Should be same as confirm password" });
            }
        } catch (error) {
            return res.json({ alert: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await STUDENT.deleteOne({ _id: req.query._id })
            if (deleted.deletedCount == 0) {
                return res.json({
                    isSuccess: false,
                    message: "record not found"
                })
            }
            return res.json({
                isSuccess: true,
                message: "Student deleted successfully"
            })
        } catch (error) {
            res.json(error)
        }
    }
}
