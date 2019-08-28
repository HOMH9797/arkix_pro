const express = require("express");
const app = express();
const PostNews = require('../models/postNews');
const upload = require('../services/file-upload');
const singleUpload= upload.single('image');
const verificaToken = require('../middlewares/authentication');

app.post('/file-upload/:id', verificaToken, function(req,res){

    let id = req.params.id;

    singleUpload(req,res, function(err){

        if(err)
            return res.status(400).send({errors: [{title: 'File Upload Error', detail: err.message}] });

        // return res.json({'imageUrl': req.file.location})
        PostNews.findById(id,(err,postNewsDB)=>{
            postNewsDB.imgPostNew = req.file.location;
            postNewsDB.save((err, postNewActualiza) => {
                if (err)
                    return res.status(500).json({ok: false,err});
                
                res.json({ ok: true,  postNewActualiza});
            });
        })
        
    });
});

module.exports = app;