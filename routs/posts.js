const express = require('express');
const Posts = require('../models/posts');
const Poats2 = require('../models/reasons');
const router = express.Router();

//(create) Save posts
router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//(read) get post

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post
router.get("/post/:id",(req,res)=>{
    let postID = req.params.id;

    Posts.findById(postID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
    
});

//update post
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json( {error:err} );
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete post
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{

        if(err) return res.status(400).json({
                massage:"Delete Unsuccesfull",err
            });
            return res.json({
                massage:"Delete Succesfull",deletePost
            });
    });
})

//////////////////////////////////////////////
// reasontSchema

//(create) Save posts
router.post('/post2/save',(req,res)=>{
    let newPost = new Poats2(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//(read) get post

router.get('/posts2',(req,res)=>{
    Poats2.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post
router.get("/post2/:id",(req,res)=>{
    let postID = req.params.id;

    Poats2.findById(postID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
    
});

//update post
router.put('/post2/update/:id',(req,res)=>{
    Poats2.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json( {error:err} );
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete post
router.delete('/post2/delete/:id',(req,res)=>{
    Poats2.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{

        if(err) return res.status(400).json({
                massage:"Delete Unsuccesfull",err
            });
            return res.json({
                massage:"Delete Succesfull",deletePost
            });
    });
})




module.exports = router;