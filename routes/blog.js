const express = require("express")
const { createPost,getPost,getPosts } = require("../controllers/blog")
const router = express.Router()



router.post("/create",createPost);
router.get("/",getPosts);
router.get("/blog/:id",getPost);



module.exports=router