const express = require('express');
const router = express.Router();
const path = require('path');

//Invoke the Database
const connection = require('../models/connection');
connection.query('USE crud_db_codo_a_codo');

//Get the routes
router.get('/', (req, res) => {
    //connection.query('USE crud_db_codo_a_codo');
    connection.query('SELECT * FROM books', (error, results)=>{
        if(error){
            throw error;
        }else{
            //console.log(results);
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

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacto | CRUD MVC'
    });
});


router.get('/edit/:id',(req, res)=>{
    const id = req.params.id;
    connection.query('SELECT * FROM books WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{
                title:'Edit | CRUD MVC', 
                book:results[0]
            });
        };
    });
});

router.get('/delete/:id',(req, res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM books WHERE id=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        };
    });
});


//Invoke the methods for the CRUD of books
const bookController = require('../controllers/bookController');
router.post('/save', bookController.save )
router.post('/update', bookController.update);


module.exports = router;
