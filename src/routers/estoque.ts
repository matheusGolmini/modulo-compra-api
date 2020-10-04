import { Router } from 'express';
import * as ControllerEstoque from '../controllers/estoque'

const router = Router();

router.post('/',ControllerEstoque.criar);
router.get('/',ControllerEstoque.buscar);
router.get('/:id',ControllerEstoque.buscarPorId);
router.delete('/:id',ControllerEstoque.deletar);


export default router;