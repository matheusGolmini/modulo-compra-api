import { Router } from 'express';
import * as ControllerCompra from '../controllers/compra'

const router = Router();

router.post('/',ControllerCompra.criar);
router.get('/',ControllerCompra.buscar);
router.get('/:id',ControllerCompra.buscarPorId);
router.delete('/:id',ControllerCompra.deletar);


export default router;