import { Router } from 'express';
import routerUsuario from './usuario';
import routerFornecedor from './fornecedor';
import routerProduto from './produto';
import routerEstoque from './estoque';

const router = Router();

router.use('/test', (req, res) => {
    return res.status(200).json({ message: "Deu boa" })
})

router.use('/usuario', routerUsuario)
router.use('/fornecedor', routerFornecedor)
router.use('/produto', routerProduto)
router.use('/estoque', routerEstoque)

export default router;