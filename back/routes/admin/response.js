var checksum = require('../../model/checksum');
var config = require('../../config/config');
module.exports = function (app) {


  app.post('/response', function (req, res) {


    var paramlist = req.body;

    if (checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY)) {

      res.writeHead(302,
        { Location: `http://localhost:3001/payment?orderid=${paramlist.ORDERID}&amount=${paramlist.TXNAMOUNT}&status=${paramlist.STATUS}` }
      );
      res.end();

    } else {

      res.writeHead(302,
        { Location: `http://localhost:3001/payment?orderid=${paramlist.ORDERID}&amount=${paramlist.TXNAMOUNT}&status=${paramlist.STATUS}` }
      );
      res.end();
    };
  });
};