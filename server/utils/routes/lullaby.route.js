import { express } from 'express';
import lullabyController from '../controllers/lullaby.controller';

const router = express.Router();

router.get('/', lullabyController.getAllLullabies);
router.get('/:id', lullabyController.getOneLullaby);
router.post('/', lullabyController.createLullaby);
router.put('/:id', lullabyController.updateLullaby);
router.delete('/:id', lullabyController.deleteLullaby);

export default router;