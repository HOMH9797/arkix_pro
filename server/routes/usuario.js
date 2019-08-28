const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const app = express();

app.get('/usuario',function(req,res){
   
    Usuario.find()
        .exec((err, usuarios) => {
            if (err) 
                return res.status(500).json({ok: false,err});

            res.json({ok: true,usuarios});
        })
})

app.post('/usuario',function(req,res){
    let body= req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err,usuarioDB)=>{
        if(err){ return res.status(500).json({ok:false,err});}
        
        res.json({ok: true, usuario: usuarioDB})
    })
});

module.exports = app;