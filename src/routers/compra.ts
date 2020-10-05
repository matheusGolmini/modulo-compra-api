import { Router } from 'express';
import * as ControllerCompra from '../controllers/compra'

const router = Router();

router.post('/',ControllerCompra.criar);

export default router;