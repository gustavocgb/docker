const modelController = require('../models/Controller')

// index, show, store, update, destroy

module.exports = {

    async index (req, resp) {},

    async store (req, resp) { 

        try{
            const { name, date } = req.body;

            const props = {
                name: name,
                date: date
            }

            await modelController.writeJson(props)            
            return resp.send({status:200})
        
        }catch(error){
            console.log(error)
            return resp.send({status:500})
        }

    },

    async destroy (req, resp) {},

    async update (req, resp) {},

};
