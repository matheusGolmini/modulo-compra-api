import { Router } from 'express';
import * as ControllerEstoque from '../controllers/estoque'

const router = Router();

router.post('/',ControllerEstoque.criar);



export default router;