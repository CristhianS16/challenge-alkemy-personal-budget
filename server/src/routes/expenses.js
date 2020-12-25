const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/get/expenses/:until', (req,res) => {
    const {until} = req.params;
    const query = `
      select * from expenses order by id asc limit ${until};
    `;
    pool.query(query, (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});
router.get('/get/expenses/operation/:id', (req,res) => {
    const {id} = req.params;
    const query = `
      select * from expenses where id = ?;
    `;
    pool.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});

router.post('/post/expenses', (req,res) => {
    const {id, concept, amount, date, type} = req.body;
    const query = `
        call expensesABM(?, ?, ?, ?, ?);
    `;
    pool.query(query, [id, concept, amount, date, type], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Expense Saved'});
        } else {
            console.log(err);
        };
    });
});

router.put('/put/expenses/:id', (req,res) => {
    const { concept, amount, date, type} = req.body;
    const { id } = req.params;
    const query = `
        call expensesABM(?, ?, ?, ?, ?);
    `;
    pool.query(query, [id, concept, amount, date, type], (err, rows, fields) => {
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
    pool.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Expense Deleted'});
        } else {
            console.log(err);
        };
    })
});


module.exports = router;