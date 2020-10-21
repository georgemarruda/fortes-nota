const { remove } = require('../models/answer.model');
const AnswertModel = require('../models/answer.model') 

module.exports = {
  async create(request, h) {
    const answer = new AnswertModel({
      produto: request.payload.produto,
      dev: request.payload.dev,
      qa: request.payload.qa,
      card: request.payload.card,
      data: request.payload.data,
      nota: request.payload.nota,   
      retorno: request.payload.retorno,    
      comentario: request.payload.comentario
    })

    answer.save()

  },


    async list(request, h) {
      const answer = await AnswertModel.find().exec();
      return answer;
    },

    async remove(request, h) {
      try {
        await AnswertModel.deleteOne({ _id: request.params.answerId })
        return h.response({}).code(204)
      } catch (error) {
        return h.response(error).code(500)
      }
    },
}
