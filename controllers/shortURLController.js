const ShortURL = require('../models/ShortURL');







/* ---------------------------------------------
.         REDIRECT FROM SHORT TO FULL
--------------------------------------------- */
module.exports.redirect_to_full_url_from_short_url = async (req, res, next)=>{
  const { shortURL } = req.params;

  const shortURLItem = await ShortURL.findOne({ short: shortURL });

  if(!shortURLItem) return res.status(404).json({ msg: `URL not found` });


  shortURLItem.clicks++;
  shortURLItem.save();

  res.redirect(shortURLItem.full);
}















/* ---------------------------------------------
.             GET ALL SHORT-URLs
--------------------------------------------- */
module.exports.get_all_short_urls = async (req, res, next)=>{
  try {
    const allShortURLs = await ShortURL.find({});
    
    res.json(allShortURLs.reverse());


  } catch (err) {
    next(err, req, res);
  }
}













/* ---------------------------------------------
.             CREATE NEW SHORT-URL
--------------------------------------------- */
module.exports.create_short_url = async (req, res, next)=>{
  try {
    const { fullURL } = req.body;

    const newShortURL = await ShortURL.create({ full: fullURL });

    res.json(newShortURL);


  } catch (err) {
    next(err, req, res);
  }
}