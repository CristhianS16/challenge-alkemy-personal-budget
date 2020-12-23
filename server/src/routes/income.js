const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();

router.get('/get/income/:until', (req,res) => {
    const {until} = req.params;
    const query = `
      select * from income order by id asc limit ${until};
    `;
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});
router.get('/get/income/operation/:id', (req,res) => {
    const {id} = req.params;
    const query = `
      select * from income where id = ?;
    `;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});
router.post('/post/income', (req,res) => {
    const {id, concept, amount, date, type} = req.body;
    const query = `
        call incomeABM(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date, type], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Income Saved'});
        } else {
            console.log(err);
        };
    });
});

router.put('/put/income/:id', (req,res) => {
    const { concept, amount, date, type} = req.body;
    const { id } = req.params;
    const query = `
        call incomeABM(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, concept, amount, date, type], (err, rows, fields) => {
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