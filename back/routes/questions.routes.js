
const QuestionController = require('../controllers/question.controller')

module.exports = [
    {
        method: 'GET',
        path: '/questions',
        handler: QuestionController.list
    }
]