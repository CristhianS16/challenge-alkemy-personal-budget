const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();

router.get('/get/income', (req,res) => {
    mysqlConnection.query('select * from income', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});

router.post('/post/income', (req,res) => {
    const {id, concept, amount, date} = req.body;
    const query = `
        call incomeCRUD(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Income Saved'});
        } else {
            console.log(err);
        };
    });
});

router.put('/put/income/:id', (req,res) => {
    const { concept, amount, date } = req.body;
    const { id } = req.params;
    const query = `
        call incomeCRUD(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Income Updated'});
        } else {
            console.log(err);
        };
    });
});

router.delete('/delete/income/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query('delete from income where id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Income Deleted'});
        } else {
            console.log(err);
        };
    })
});

module.exports = router;