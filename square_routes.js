var express = require('express');
var my_math_module =  require('./02_define_modules')
var route = express.Router();

route.get('/square/:width', (req,res) => {
    let width = req.params['width'];
    let s = my_math_module.area(width);
    res.send(`<h1> The square of with width ${width} is ${s} </h1>`)
})

route.get('/square/perim/:width', (req,res) => {
    let width= req.params['width'];
    let s = my_math_module.perimeter(width);
    res.send(`<h1> The perimeter of with width ${width} is ${s} </h1>`)
})

route.get('/circle/area/:radius', (req,res) => {
    let r = req.params['radius'];
    let s = my_math_module.area_circle(r);
    res.send(`<h1> The area of a circle with radius ${r} is ${s} </h1>`)
})

route.get('/circle/perim/:radius', (req,res) => {
    let r = req.params['radius'];
    let s = my_math_module.perim_circle(r);
    res.send(`<h1> The perimeter of a circle with radius ${r} is ${s} </h1>`)
})

route.get('/sphere/volume/:radius', (req,res) => {
    let r = req.params['radius'];
    let s = my_math_module.volume_sphere(r);
    res.send(`<h1> The volume of a sphere with radius ${r} is ${s} </h1>`)
})


route.get('/cylinder/volume/:radius/:height', (req,res) => {
    let r = req.params['radius'];
    let h = req.params['height'];
    let s = my_math_module.volume_cylinder(r,h);
    res.send(`<h1> The volume of a cylinder with radius ${r} and height ${h} is ${s} </h1>`)
})

module.exports = route