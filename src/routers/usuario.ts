import { Router } from 'express';
import * as ControllerFornecedor from '../controllers/usuario'

const router = Router();

router.post('/',ControllerFornecedor.criar);
router.get('/',ControllerFornecedor.buscar);
router.get('/:id',ControllerFornecedor.buscarPorId);
router.delete('/:id',ControllerFornecedor.deletar);


export default router;