const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/get/lastmovements', (req,res) => {
    const query = `
        ((select * from expenses) union (select * from income)) order by str_to_date(date, '%d/%m/%Y') desc limit 10;
    `;
    pool.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});
router.get('/get/lastmovements/totalincome', (req,res) => {
    const query = `
        select sum(amount) as totalIncome from income;
    `;
    pool.query(query, (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});
router.get('/get/lastmovements/totalexpenses', (req,res) => {
    const query = `
        select sum(amount) as totalExpenses from expenses;
    `;
    pool.query(query, (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        };
    });
});

module.exports = router;
