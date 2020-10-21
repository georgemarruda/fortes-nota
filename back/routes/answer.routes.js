
const AnswerController = require('../controllers/answer.controller')

module.exports = [
    {
        method: 'GET',
        path: '/answers',
        handler: AnswerController.list
    },  
    
    {
        method: 'POST',
        path: '/answers',
        handler: AnswerController.create
    },

    {
        method: 'DELETE',
        path: '/answers/{answerId}', 
        handler: AnswerController.remove
    }
] 