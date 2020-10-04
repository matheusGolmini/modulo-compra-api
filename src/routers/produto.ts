import { Router } from 'express';
import * as ControllerLoja from '../controllers/produto'

const router = Router();

router.post('/',ControllerLoja.criar);
router.get('/',ControllerLoja.buscar);
router.get('/:id',ControllerLoja.buscarPorId);
router.delete('/:id',ControllerLoja.deletar);


export default router;