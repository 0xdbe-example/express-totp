var express = require('express');
var router = express.Router();

const authenticator = require('otplib').authenticator;

// setting
authenticator.options = { window: 2 };

const qrcode = require('qrcode');

// hardcoded secret for testing purpose (remove for production use)
const secret = 'DFXSWOTCAQRWUDL7';
const user = 'bob';
const service = 'test';

router.get('/generate', function(req, res, next) {

  // Generate random secret (uncomment for production)
  // let secret = authenticator.generateSecret();
  // console.log(`Secret: ${secret}`);
  const otpauth = authenticator.keyuri(user, service, secret);

  qrcode.toDataURL(otpauth, (err, imageUrl) => {
    if (err) {
        res.status(500);
        res.send(err);
    }
    res.render('otp_generate', { imgSrc: imageUrl });
  });
  
});

router.get('/get', function(req, res, next) {
  let token = authenticator.generate(secret);
  res.send(new Date().toISOString() + ': ' + token);
});

router.get('/verify', function(req, res, next) {
    res.render('otp_verify');
});

router.post('/verify', function(req, res, next) {
    let token=req.body.token;
    
    console.log(token);
    console.log(secret);
    
    let isValid = authenticator.verify({ token, secret });
//     isValid = authenticator.check(token, secret);
    
    if (isValid){
      res.status(200);
      res.send('ok');
    }else{
      res.status(403);
      res.send('error');
    }
});

module.exports = router;





