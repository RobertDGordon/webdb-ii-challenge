const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        // res.json(await db.select('*').from('cars'))
        res.json(await db('cars').select())
    }catch (err){
        next(err)
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const post = await db('cars').where('id', req.params.id).select()
        res.json(post)
    }catch (err){
        next(err)
    }
});

router.post('/', async(req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents
        }
        const [id] = await db('cars').insert(payload)
        res.json(await db ('cars').where('id', id).first())
    }catch (err){
        next(err)
    }
});

router.put('/:id', async(req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents
        }
        await db('cars').where('id', req.params.id).update(payload)
        res.json(await db ('cars').where('id', id).first())
    }catch (err){
        next(err)
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        await db ('cars').where('id', id).first()
        res.status(204).end();
    }catch (err){
        next(err)
    }
});

module.exports = router;