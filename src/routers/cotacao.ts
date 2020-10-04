import { Router } from 'express';
import * as ControllerCotacao from '../controllers/cotacao'

const router = Router();

router.post('/',ControllerCotacao.criar);
router.get('/',ControllerCotacao.buscar);
router.get('/:id',ControllerCotacao.buscarPorId);
router.delete('/:id',ControllerCotacao.deletar);


export default router;