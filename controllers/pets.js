// express 
const express = require('express')
// require the model
const Pet = require('../models/pet.js');
// express router
const router = express.Router()

// POST + /pets/ 
router.post('/', async (req, res) => {
    try {
        // use the model to insert the data into database 
        // respond with the new pet data 
        const pet = await Pet.create(req.body)
        res.status(201).json({ pet })
    } catch (error) {
        res.status(500).json({ error: 'failed to create pet' })
    }
})

// SHOW GET + /pets/ 
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.status(200).json({ pets })
    } catch (error) {
        res.status(500).json({ error: 'failed to get pet' });
    }
})

// GET + /pets/:id

router.get('/:id', async (req, res) => {
    try {
        //get the id from the req params 
        // use model to find by id 
        // if we don't find it respond 404
        // else send the data // 200 with pet 

        const { id } = req.params;
        const pet = await Pet.findById(id);
        if (!pet) {
            res.status(404).json({ error: 'Pet Not Found' });
        } else {
            res.status(200).json({ pet });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'failed to get pet' })

    }
})

// DELETE + /pets/:id

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findByIdAndDelete(id)
        if (!pet) {
            res.status(404).json({ error: 'Pet Not Found' });
        } else {
            res.status(200).json({ pet });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'failed to get pet' })
    }
})

// UPDATE + /pets/:id 
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findByIdAndUpdate(id)
        if (!pet) {
            res.status(404).json({ error: 'Pet Not Found' });
        } else {
            res.status(200).json({ pet });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'failed to get pet' })
    }
})

// export the router 
module.exports = router; 