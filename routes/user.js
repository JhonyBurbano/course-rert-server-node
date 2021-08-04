const { Router } = require('express')
const { user, update, store, destroy, userPatch } = require('../controller/users')

const router = Router()

router.get('/', user)

router.put('/', update)

router.post('/', store)

router.delete('/', destroy)

router.patch('/', userPatch)

module.exports = router;