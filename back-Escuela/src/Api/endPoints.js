const express = require('express');
const router = express.Router();

// Cuado se exporta el controlador asimodule.exports = ping;
// Al importarlo aca no se debe de destructurar debe de estar sin {}
// const  ping  = require('../Controllers/pingController');

// Cuando se esporta asi: module.exports.ping=(req,res)=>{
// Si se debe de destructurar
const  {ping} = require('../Controllers/pingController');

// const { login } = require('../controllers/loginController')

router.get('/ping', ping);

// router.post('/login', login);

module.exports = router;