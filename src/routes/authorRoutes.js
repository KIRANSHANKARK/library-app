const express = require("express");
const authorRouter = express.Router();
function router(nav){

    var author = [
        {
            title:"Joseph barbera",
            author:"tom & jerry",
            genre:"cartoon",
            img:"joseph.jpg"
        },
        {
            title:"J K Rowlings",
            author:"Harry Potter",
            genre:"fantacy",
            img:"jk rowlings.jpg"
        },
        {
            title:"Nolan",
            author:"Interstellar",
            genre:"fiction",
            img:"nolan.jpg"
        }
    ]
    
    
    authorRouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            title:'authors',
            heading:'Authors',
            author
        });
        })
        authorRouter.get('/:i',(req,res)=>{
        const id = req.params.i;
        res.render("author",
        {
            nav,
            title:"Author",
            heading:'Author',
            author: author[id]

        }
        
        
        )



        })
        return authorRouter
    }
    module.exports = router;