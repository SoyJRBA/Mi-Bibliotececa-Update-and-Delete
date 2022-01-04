const express = require ('express');
const router = express.Router();
const model = require('../models/valores')();

const Valor = require ('../models/valores');

router.get('/', async (req,res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });
});

router.post('/add', async (req,res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async (req,res) => {
    console.log(req.body.id);
    const reg = await Valor.findByIdAndRemove(req.params.id);
    console.log(reg);
    res.redirect('/');
});

router.get('/edit/:id', async (req,res) => {
    try {
        const Registro = await Valor.findById(req.params.id).lean();
        res.render("editar", {Registro});
    } catch (error) {
        console.log(error.message);
    }
});

router.post("/edit/:id", async (req, res) => {
    const {id} = req.params;
    await Valor.findByIdAndUpdate (id, req.body);
    res.redirect("/");
});

module.exports = router;