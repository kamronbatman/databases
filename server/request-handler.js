var db = require('./models/index.js');

var genId = function() {
  return (60466176 + Math.floor(Math.random() * 2116316160)).toString(36).toUpperCase();
}

exports.getMessages = function(callback) {
  db.Message.findAll().success(callback);
}

exports.postMessage = function(message, callback) {
  var puser = db.User.findOrCreate({ where: { username: message.username } });
  var proom = db.Room.findOrCreate({ where: { roomname: message.roomname.toLowerCase() }});

  db.sequelize.Promise.join(puser, proom, function(user, room) {
    db.Message.create({
      text: message.text,
      objectId: genId(),
      userId: user.get('id'),
      roomId: room.get('id')
    }).then(callback);
  });
};