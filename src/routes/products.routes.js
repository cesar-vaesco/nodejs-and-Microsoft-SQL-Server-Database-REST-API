
import { Router } from 'express';

import { createNewProducts, getProducts } from '../controllers/products.controller';

const router = Router();


router.get('/products', getProducts);

router.get('/products', getProducts);

router.post('/products', createNewProducts);

router.delete('/products', getProducts);

router.put('/products', getProducts);

export default router;
