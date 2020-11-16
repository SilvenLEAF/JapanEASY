// chalk makes colorful console.logs, only for helping our development
const chalk = require('chalk');



if(process.env.NODE_ENV !== 'production'){
  // if we are on development, load development environmental variables
  require('dotenv').config()
}










// core modules
const express = require('express');
const path = require('path');









// ------------------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, `client/build`)));


















/* -------------------------------------------------
.                    config
------------------------------------------------- */




/* -------------------------------------------------
.                    routes
------------------------------------------------- */


// CATCH ALL HANDLER
app.get('*', (req, res, next)=>{
  try {
    res.sendFile(path.join(__dirname, `client/build/index.html`));
  } catch (err) {
    next(err, req, res)
  }
})






// ERRORS HANDLER
app.use((err, req, res, next)=>{
  console.log(chalk.red(err.message));

  console.log(err);
  res.json({ msg: `Server error`, error: err.message })
});



// --------------------end of routes------------------------


















// -----------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
});