const express = require('express')
const router = express.Router();
const Car = require('../models/car')
const checkauth = require('../check-auth')

router.get('', (req,res)=> {
    Car.find().then((cars)=>{
        res.json(
            {
                message: 'Cars found',
                cars:cars
            }
        )
    })
})

router.post('', checkauth, (req, res) =>{
    const car = new Car(
        {
            id: req.body.id,
            name:req.body.name
        }
    )
    car.save();
    res.status(201).json({
        message: 'Car created',
        car:car
    })
})

router.delete('/:id', checkauth,(req, res)=>{
    Car.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message: "Car deleted"});
    });
})

module.exports = router