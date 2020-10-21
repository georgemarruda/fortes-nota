
const { remove } = require('../models/product.model');
const ProductModel = require('../models/product.model')

module.exports = {
  async create(request, h) {
    const product = new ProductModel({
      name: request.payload.name,
      description: request.payload.description
    })

    product.save()

  },

  async remove(request, h) {
    try {
      await ProductModel.deleteOne({ _id: request.params.productId })
      return h.response({}).code(204)
    } catch (error) {
      return h.response(error).code(500)
    }
  },

  async list(request, h) {
    const product = await ProductModel.find().exec();
    return product;
  } 
}
 