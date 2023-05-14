import * as service from '../../services/client.services.js'

function getClient(req, res){
    const section = req.params.section

    service.getClient(section)
    .then(function(clients){
        res.status(200).json(clients)
    })
}

function createClient(req,res){
    const section = req.params.section

    const client = {
        name: req.body.name,
        picture: req.body.picture,
        description: req.body.description
    }
    service.createClient(section, client)
    .then(function(){
        res.status(201).json(client)
    })
}

export {
    getClient,
    createClient
}