function getMessages(req, res) {
    res.send('<ul><li>Hello Albert!</li></ul>');
};

function postMesssage(req, res) {
    console.log('Updating messages...');
};

module.exports = {
    getMessages, 
    postMesssage
};