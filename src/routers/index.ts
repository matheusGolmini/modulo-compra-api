import { Router } from 'express';

const router = Router();

router.use('/test', (req, res) => {
    return res.status(200).json({ message: "Deu boa" })
})

export default router;