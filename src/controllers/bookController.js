//Invoke the Database
const connection = require('../models/connection');
connection.query('USE crud_db_codo_a_codo');

//Method to save the books
exports.save = (req,res)=>{
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const cover = req.body.cover

    //console.log(title + '-' + author + '-' + year + '-' + cover)
    //connection.query('USE crud_db_codo_a_codo');
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
        };
    });
};

//Method to edit the books
exports.update = (req, res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    const cover = req.body.cover;

    connection.query('UPDATE books SET ? WHERE id=?',[{
        title:title, 
        author:author,
        year:year,
        cover:cover
    }, id], (error, results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('/');
        };
    });
};

//Method to delete the books

// exports.delete = (req, res)=>{
//     connection.query('DELETE FROM books WHERE id=?',[id],(error, results)=>{
//         if(error){
//             console.error(error);
//         }else{
//             res.redirect('/');
//             };
//         });
//     };
