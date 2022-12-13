//Invoke the Database
const connection = require('../models/connection');

exports.save = (req,res)=>{
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const cover = req.body.cover

    //console.log(title + '-' + author + '-' + year + '-' + cover)
    connection.query('USE crud_db_codo_a_codo');
    connection.query('INSERT INTO books SET ?', {
        title:title, 
        author:author,
        year:year,
        cover:cover
    },(error, results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('/');
        }
    });
};