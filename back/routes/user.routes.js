
const UserController = require('../controllers/user.controller')

module.exports = [
    {
        method: 'POST',
        path: '/user',
        handler: UserController.create
    },

    {
        method: 'Post',
        path: '/session',
        handler: UserController.login
    }
]

