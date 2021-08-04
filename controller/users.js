const { response } = require('express')

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

const store = (req, res = response) => {
    const { name, age } = req.body
    res.json({
        msg: 'post Api - Controller',
        name,
        age
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