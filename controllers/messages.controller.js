const path = require('path');

function getMessages(req,res) {
   res.render('messages', {
    title: 'Messages to my friends',
    friend : 'Elon Musk',
   })
    // res.sendFile(path.join(__dirname, '..','public','images','ski.jpg'));
};

function postMessages(req,res) {
    console.log('updating messages...');
}

module.exports = {
    postMessages,
    getMessages,
}