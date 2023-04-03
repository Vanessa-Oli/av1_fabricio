const mongoose = require('mongoose');

const Maquiagem = new mongoose.Schema({
    nome: { type: String, required: true },
    marca: { type: String, required: true },
    categoria: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true }
});


const ProductModel = mongoose.model('Product', Maquiagem);

class ProductRepository {
    static instance = null;

    constructor() {
        if (ProductRepository.instance !== null) {
            throw new Error('Não é possível instanciar mais de uma instância de ProductRepository');
        }
    }

    static getInstance() {
        if (ProductRepository.instance === null) {
            ProductRepository.instance = new ProductRepository();
        }

        return ProductRepository.instance;
    }

    async findAll() {
        return ProductModel.find({});
    }

    async findById(id) {
        return ProductModel.findById(id);
    }

    async create(productData) {
        const product = new ProductModel(productData);
        return product.save();
    }

    async update(id, productData) {
        return ProductModel.findByIdAndUpdate(id, productData, { new: true });
    }

    async delete(id) {
        return ProductModel.findByIdAndDelete(id);
    }
}

module.exports = ProductRepository.getInstance();
