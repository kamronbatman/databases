var db = require('../db');

/*module.exports = {
  messages: {
    get: function (cb) {
      var command = 'SELECT users.username, rooms.roomname, messages.text, messages.createdAt, messages.messageid as objectId FROM users, rooms, messages WHERE rooms.roomid=messages.roomid AND users.userid=messages.userid';
      db.query(command, function(err, rows){
        if (cb) { cb(err,rows) };
      });
    }, // a function which produces all the messages
    post: function (messageObj, cb) {
      var command =
        'INSERT IGNORE INTO users SET username="' + messageObj.username + '";\n' +
        'INSERT IGNORE INTO rooms SET roomname=LOWER("' + messageObj.roomname + '");\n' +
        'INSERT INTO messages (userid, roomid, text) ' +
        'SELECT userid, roomid, ? ' +
          'FROM users, rooms ' +
          'WHERE users.username="' + messageObj.username + '" AND rooms.roomname=LOWER("' + messageObj.roomname + '");';

      db.query(command, messageObj.text, function(err, result){
        //console.log('Error?',err);
        //console.log('Results?', result);
        if (cb) { cb(err,result) };
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
};

*/