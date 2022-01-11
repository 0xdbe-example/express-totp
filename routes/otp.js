var express = require('express');
var router = express.Router();

const qrcode = require('qrcode');

// hardcoded secret for testing purpose (remove for production use)
const secret = '';
const user = '';
const service = '';

router.get('/generate', function(req, res, next) {

    // Send data in QRCode
    res.render('otp_generate');

});

router.get('/get', function(req, res, next) {
  // Send the current valid code
  res.send("current code is: XXXXX");
});

router.get('/verify', function(req, res, next) {
    res.render('otp_verify');
});

router.post('/verify', function(req, res, next) {
    let token=req.body.token;

    if (isValid){
      res.status(200);
      res.send('ok');
    }else{
      res.status(403);
      res.send('error');
    }
});

module.exports = router;





