const express = require('express');
const router = express.Router();
const path = require('path');

//Invoke the Database
const connection = require('../models/connection');

router.get('/', (req, res) => {
    connection.query('USE crud_db_codo_a_codo');
    connection.query('SELECT * FROM books', (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('index', {
                title: 'Inicio | CRUD MVC | Maximiliano Torres',
                results:results
            });
            
        }
    });
    
});
    
router.get('/acercade', (req, res) => {
    res.render('acercade', {
        title: 'Acerca De | CRUD MVC'
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create | CRUD MVC'
    });
});

module.exports = router;
