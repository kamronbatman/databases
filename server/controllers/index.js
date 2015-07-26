var models = require('../request-handler.js');

module.exports = {
  messages: {
    get: function (req, res) {
      models.getMessages(function(err, rows){

        res.status(200).json({ results: rows }).end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.postMessages(req.body,function(err, result){
        if (err) {
          console.log('What happened?', err);
        } /*else if (result) {
          console.log('Results!', result);
        }*/

        res.status(201).end();
      });
    } // a function which handles posting a message to the database
  },

/*  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }*/
};

