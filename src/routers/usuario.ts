import { Router } from 'express';
import * as ControllerUsuario from '../controllers/usuario'

const router = Router();

router.post('/',ControllerUsuario.criar);
router.get('/',ControllerUsuario.buscar);
router.get('/:id',ControllerUsuario.buscarPorId);
router.delete('/:id',ControllerUsuario.deletar);


export default router;