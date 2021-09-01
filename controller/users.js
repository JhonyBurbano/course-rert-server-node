const { response } = require('express')
const User = require('../models/user')

const user = (req, res = response) => {
    res.json({
        msg: 'get Api - Controller'
    })
}

const update = (req, res = response) => {
    res.json({
        msg: 'put Api - Controller'
    })
}

const store = async(req, res = response) => {
    const body = req.body
    const user = new User(body);
    await user.save()
    res.json({
        msg: 'post Api - Controller',
        user
    })
}

const destroy = (req, res = response) => {
    res.json({
        msg: 'delete Api - Controller'
    })
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - Controller'
    })
}

module.exports = {
    user,
    update,
    store,
    destroy,
    userPatch
}