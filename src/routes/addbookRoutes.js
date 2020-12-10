const express = require("express");
const addBookRouter = express.Router();
function router(){

addBookRouter.get('/',(req,res)=>{

res.render("addbook")

})


return addBookRouter;


}
module.exports = router;