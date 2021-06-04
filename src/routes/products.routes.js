
import { Router } from 'express';

import { createNewProducts, getProducts, getProductsById, deleteProductById } from '../controllers/products.controller';

const router = Router();


router.get('/products', getProducts);

router.get('/products/:id', getProductsById);

router.post('/products', createNewProducts);

router.delete('/products/:id', deleteProductById);

router.put('/products', getProducts);

export default router;
