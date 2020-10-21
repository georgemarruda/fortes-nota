
const ProductController = require('../controllers/products.controller')

module.exports = [
    {
        method: 'GET',
        path: '/products',
        handler: ProductController.list
    },

    {
        method: 'Post',
        path: '/products',
        handler: ProductController.create
    },

    {
        method: 'DELETE',
        path: '/products/{productId}',
        handler: ProductController.remove
    }
]

