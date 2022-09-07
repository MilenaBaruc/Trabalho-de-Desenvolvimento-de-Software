const { response } = require("express");
const user = require("../models/user");

module.exports = {
    async index(request, response) {
        try{
            const Users = await user.find();
            return response.status(200).json({ Users });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }
}