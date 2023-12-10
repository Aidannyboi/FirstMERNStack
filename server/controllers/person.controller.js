const { request, response } = require("express");

const Person = require('../models/person.models');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World!"
    })
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeope = (request, response) => {
    Person.find({})
        .then(persons => {
            console.log(persons);
            response.json(persons);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.updatePerson = (requestm, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}