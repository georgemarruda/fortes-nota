
const QuestiontModel = require('../models/question.model')

module.exports = {
    async list(request, h) {
      const questions = await QuestiontModel.find().exec();
      return questions;
    }
}
