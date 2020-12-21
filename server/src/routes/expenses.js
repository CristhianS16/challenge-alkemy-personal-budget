const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();

router.get('/get/expenses', (req,res) => {
    mysqlConnection.query('select * from expenses;', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});

router.post('/post/expenses', (req,res) => {
    const {id, concept, amount, date} = req.body;
    const query = `
        call expensesCRUD(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Expense Saved'});
        } else {
            console.log(err);
        };
    });
});

router.put('/put/expenses/:id', (req,res) => {
    const { concept, amount, date } = req.body;
    const { id } = req.params;
    const query = `
        call expensesCRUD(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Expense Updated'});
        } else {
            console.log(err);
        };
    });
});

router.delete('/delete/expenses/:id', (req,res) => {
    const { id } = req.params;
    const query = `
        delete from expenses where id = ?;
    `;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Expense Deleted'});
        } else {
            console.log(err);
        };
    })
});


module.exports = router;