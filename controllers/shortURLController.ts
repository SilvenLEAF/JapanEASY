import { NextFunction, Request, Response } from 'express';
import ShortURL from '../models/ShortURL';







/* ---------------------------------------------
.         REDIRECT FROM SHORT TO FULL
--------------------------------------------- */
export const redirect_to_full_url_from_short_url = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { shortURL } = req.params;

    const shortURLItem = await ShortURL.findOne({ short: shortURL });

    if(!shortURLItem) return res.status(404).json({ msg: `URL not found` });


    shortURLItem.clicks!++;
    shortURLItem.save();

    res.redirect(shortURLItem.full);

  } catch (err) {
    next({err, req, res})
  }
}















/* ---------------------------------------------
.             GET ALL SHORT-URLs
--------------------------------------------- */
export const get_all_short_urls = async (req: Request, res: Response, next: NextFunction)=>{
  try {    
    const allShortURLs = await ShortURL.find();
    
    res.json(allShortURLs.reverse());

  } catch (err) {
    next({err, req, res});
  }
}













/* ---------------------------------------------
.             CREATE NEW SHORT-URL
--------------------------------------------- */
export const create_short_url = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { fullURL } = req.body;

    const newShortURL = await ShortURL.create({ full: fullURL });

    res.json(newShortURL);


  } catch (err) {
    next({err, req, res});
  }
}











/* ---------------------------------------------
.             DELETE SHORT-URL
--------------------------------------------- */
export const delete_short_url = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { urlId } = req.body;

    const deletedShortURL = await ShortURL.findByIdAndRemove(urlId);

    res.json(deletedShortURL);


  } catch (err) {
    next({err, req, res});
  }
}