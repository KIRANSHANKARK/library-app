const express = require("express");
const booksRouter = express.Router();
function router(nav){

    var books = [
        {
            title:"Tom and Jerry",
            author:"Joseph barbera",
            genre:"cartoon",
            img:"download.jpg"
        },
        {
            title:"Harry Potter",
            author:"J K Rowlings",
            genre:"fantacy",
            img:"harry.jpg"
        },
        {
            title:"Interstellar",
            author:"Nolan",
            genre:"fiction",
            img:"Interstellar-366875261-large.jpg"
        }
    ]
    
    
    booksRouter.get("/",function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            heading:'Books',
            books
        });
        });
    
    booksRouter.get("/:i",(req,res)=>{
      const id =  req.params.i;
    res.render("book",
    {
        nav,
        title:'book',
        heading:'Books',
        book: books[id]
    
    }
    );
    
    })
    return booksRouter; 
}

module.exports = router;