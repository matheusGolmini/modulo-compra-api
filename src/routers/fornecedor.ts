import { Router } from 'express';
import * as ControllerFornecedor from '../controllers/fornecedor'

const router = Router();

router.get('/',ControllerFornecedor.buscar);
router.get('/:id',ControllerFornecedor.buscarPorId);


export default router;