const router = require('express').Router();
const shortURLController = require('../controllers/shortURLController')





router.post('/', shortURLController.create_short_url);
router.get('/all', shortURLController.get_all_short_urls);

router.get('/:shortURL', shortURLController.redirect_to_full_url_from_short_url);






module.exports = router;