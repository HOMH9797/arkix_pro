const PostNews = require('../models/postNews');
const verificaToken = require('../middlewares/authentication');
const express = require('express');
const app = express();

app.post('/postNews', verificaToken, (req, res) => {
    let body = req.body;
    let fecha = new Date();

    let postNews = new PostNews({
        titulo: body.titulo,
        txtContenido:body.contenido,
        fecha:fecha,
        autor:req.usuario._id,
    })

    postNews.save((err,postNewsDB)=>{
        if(err)
            return res.status(400).json({ok:false, err});
        
        res.json({ok:true, postNews: postNewsDB});
    });

});

app.get('/postNewsUsuario',verificaToken,(req,res)=>{
    
    let usuario = req.usuario._id;
    PostNews.find({autor:usuario, estado:true})
    .limit(10)
        .populate('autor','nombre email')
        .exec((err,postNewsDB)=>{
            if (err)
                return res.status(400).json({ ok: false, err });
                
            res.json({ ok: true, postNewsDB });
        })
});

app.delete('/postNews/:id',verificaToken,(req,res)=>{
    let usuario = req.usuario._id;
    let id = req.params.id;
    PostNews.findById(id,(err,postNewsDB)=>{
        if(err)
            return res.status(400).json({ ok: false, err });
        if(!postNewsDB)
            return res.json('El post no existe');
        if(postNewsDB.autor != usuario)
            return res.json('No es el autor de este post');
        
        postNewsDB.estado = false;
        postNewsDB.save((err, postNewActualiza) => {
            if (err)
                return res.status(500).json({ok: false,err});
                
            res.json({ ok: true,  postNewActualiza});
        });
    
    });
});

app.get('/postNewsFilter/:termino',verificaToken,(req,res)=>{
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');
    // let usuario = req.usuario._id;

    PostNews.find({txtContenido:regex})
        .limit(10)
        .populate('autor','nombre email')
        .exec((err,postNewsDB)=>{
            if (err)
                return res.status(400).json({ ok: false, err });
                
            res.json({ ok: true, postNewsDB });
        })
});

module.exports = app;