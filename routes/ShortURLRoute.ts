import { Router } from 'express';
import * as shortURLController from '../controllers/shortURLController';





const router = Router();



router.post('/', shortURLController.create_short_url);
router.delete('/', shortURLController.delete_short_url);
router.get('/all', shortURLController.get_all_short_urls);

router.get('/:shortURL', shortURLController.redirect_to_full_url_from_short_url);






export default router;