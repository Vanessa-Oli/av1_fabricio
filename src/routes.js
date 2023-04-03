const ProductController = require('./app/controllers/MaquiagemController');
const express = require('express');
const router = express.Router();

router.get('/maquiagem', ProductController.index);
router.get('/maquiagem/:id', ProductController.show);
router.post('/maquiagem', ProductController.store);
router.put('/maquiagem/:id', ProductController.update);
router.delete('/maquiagem/:id', ProductController.delete);

module.exports = router;
