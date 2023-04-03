const ProductModel = require('../repositories/MaquiagemRepository');

class MaquiagemController {
    async index(request, response) {
        const products = await ProductModel.findAll();
        response.json(products);
    }

    async show(request, response) {
        const product = await ProductModel.findById(request.params.id);
        response.json(product);
    }

    async store(request, response) {
        try {
            const product = await ProductModel.create(request.body);
            return response.json(product);
        } catch (error) {
            return response.status(400).json({ error: 'Erro ao publicar maquiagem' });
        }
    }


    async update(request, response) {
        const product = await ProductModel.update(request.params.id, request.body);
        response.json(product);
    }

    async delete(request, response) {
        await ProductModel.delete(request.params.id);
        response.send();
    }
}


module.exports = new MaquiagemController();
