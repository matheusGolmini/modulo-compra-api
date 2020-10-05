import { Router } from 'express';
import * as ControllerProduto from '../controllers/produto'

const router = Router();

router.get('/',ControllerProduto.buscar);
router.get('/:id',ControllerProduto.buscarPorId);


export default router;