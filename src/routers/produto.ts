import { Router } from 'express';
import * as ControllerProduto from '../controllers/produto'

const router = Router();

router.post('/',ControllerProduto.criar);
router.get('/',ControllerProduto.buscar);
router.get('/:id',ControllerProduto.buscarPorId);
router.delete('/:id',ControllerProduto.deletar);


export default router;